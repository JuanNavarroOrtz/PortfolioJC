import { useEffect, useMemo, useState } from 'react';
import {
  FaArrowLeft,
  FaArrowRight,
  FaFolderOpen,
  FaTimes
} from 'react-icons/fa';
import {
  projectGalleries,
  projectItems,
  projectSectionContent
} from '../../utils/data';

const Projects = () => {
  const [activeGalleryProject, setActiveGalleryProject] = useState(null);
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const galleries = useMemo(() => projectGalleries, []);

  useEffect(() => {
    if (!activeGalleryProject) {
      return undefined;
    }

    // Modal navigation works with keyboard and locks page scrolling while open.
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        setActiveGalleryProject(null);
        return;
      }

      const galleryImages = galleries[activeGalleryProject.galleryKey] ?? [];

      if (!galleryImages.length) {
        return;
      }

      if (event.key === 'ArrowRight') {
        setActiveImageIndex((currentIndex) => (currentIndex + 1) % galleryImages.length);
      }

      if (event.key === 'ArrowLeft') {
        setActiveImageIndex(
          (currentIndex) => (currentIndex - 1 + galleryImages.length) % galleryImages.length
        );
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [activeGalleryProject, galleries]);

  const activeGalleryImages = activeGalleryProject
    ? galleries[activeGalleryProject.galleryKey] ?? []
    : [];
  const activeImage = activeGalleryImages[activeImageIndex] ?? null;

  // Always open a project gallery from its first image.
  const openGallery = (project) => {
    setActiveGalleryProject(project);
    setActiveImageIndex(0);
  };

  const renderProjectBadge = (project) => {
    const galleryImages = project.galleryKey ? galleries[project.galleryKey] ?? [] : [];

    if (!galleryImages.length) {
      return <span className='project-badge'>{project.category}</span>;
    }

    return (
      <button
        type='button'
        className='project-badge project-badge-button'
        onClick={() => openGallery(project)}
        aria-label={`${project.category} - ${project.galleryLabel ?? 'Open gallery'}`}
      >
        {project.category}
      </button>
    );
  };

  const renderProjectCta = (project) => {
    const galleryImages = project.galleryKey ? galleries[project.galleryKey] ?? [] : [];

    if (!galleryImages.length) {
      return (
        <span className='project-cta'>
          {project.ctaLabel}
          <FaArrowRight aria-hidden='true' />
        </span>
      );
    }

    return (
      <button
        type='button'
        className='project-cta project-cta-button'
        onClick={() => openGallery(project)}
        aria-label={project.ctaAriaLabel ?? project.ctaLabel}
      >
        {project.ctaLabel}
        <FaArrowRight aria-hidden='true' />
      </button>
    );
  };

  const renderProjectMedia = (project) => {
    if (!project.galleryKey) {
      return <img src={project.image} alt={project.imageAlt} className='project-media' />;
    }

    return (
      <button
        type='button'
        className='project-media-button'
        onClick={() => openGallery(project)}
        aria-label={project.imageButtonLabel ?? project.galleryLabel}
      >
        <img src={project.image} alt={project.imageAlt} className='project-media' />
      </button>
    );
  };

  const changeImage = (direction) => {
    if (!activeGalleryImages.length) {
      return;
    }

    // Loop navigation so next/previous keeps cycling through the gallery.
    setActiveImageIndex((currentIndex) => {
      if (direction === 'next') {
        return (currentIndex + 1) % activeGalleryImages.length;
      }

      return (currentIndex - 1 + activeGalleryImages.length) % activeGalleryImages.length;
    });
  };

  return (
    <>
      <section className='about-section projects-section'>
        <div className='section-heading'>
          <span className='section-icon' aria-hidden='true'>
            <FaFolderOpen />
          </span>
          <h2 className='about-title'>{projectSectionContent.title}</h2>
        </div>

        <div className='projects-grid'>
          {projectItems.map((project) => (
            <article key={project.title} className='project-card'>
              <div className='project-media-shell'>
                {renderProjectMedia(project)}
                {renderProjectBadge(project)}
              </div>

              <div className='project-content'>
                <div className='project-copy'>
                  <h3 className='project-title'>{project.title}</h3>
                  <p className='project-summary'>{project.summary}</p>
                </div>

                <ul className='project-highlight-list'>
                  {project.highlights.map((highlight) => (
                    <li key={highlight}>{highlight}</li>
                  ))}
                </ul>

                <div className='skills-tags project-stack'>
                  {project.stack.map((item) => (
                    <span key={item} className='skill-tag'>
                      {item}
                    </span>
                  ))}
                </div>

                <div className='project-footer'>
                  <p className='project-impact'>{project.impact}</p>
                  {renderProjectCta(project)}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {activeGalleryProject && (
        <div
          className='project-modal-backdrop'
          role='dialog'
          aria-modal='true'
          aria-labelledby='project-gallery-title'
          onClick={() => setActiveGalleryProject(null)}
        >
          <div className='project-modal' onClick={(event) => event.stopPropagation()}>
            <div className='project-modal-header'>
              <div>
                <p className='project-modal-kicker'>{activeGalleryProject.category}</p>
                <h3 id='project-gallery-title' className='project-modal-title'>
                  {activeGalleryProject.galleryTitle ?? activeGalleryProject.title}
                </h3>
              </div>

              <button
                type='button'
                className='project-modal-close'
                onClick={() => {
                  setActiveGalleryProject(null);
                  setActiveImageIndex(0);
                }}
                aria-label={projectSectionContent.modalCloseLabel}
              >
                <FaTimes aria-hidden='true' />
              </button>
            </div>

            {activeImage && (
              <>
                <div className='project-modal-stage'>
                  <button
                    type='button'
                    className='project-modal-nav'
                    onClick={() => changeImage('prev')}
                    aria-label={projectSectionContent.modalPreviousLabel}
                  >
                    <FaArrowLeft aria-hidden='true' />
                  </button>

                  <figure className='project-modal-figure'>
                    <img
                      src={activeImage.src}
                      alt={activeImage.alt}
                      className='project-modal-image'
                    />
                  </figure>

                  <button
                    type='button'
                    className='project-modal-nav'
                    onClick={() => changeImage('next')}
                    aria-label={projectSectionContent.modalNextLabel}
                  >
                    <FaArrowRight aria-hidden='true' />
                  </button>
                </div>

                <div className='project-modal-toolbar'>
                  <p className='project-modal-count'>
                    {projectSectionContent.imageCountLabel(
                      activeImageIndex + 1,
                      activeGalleryImages.length
                    )}
                  </p>

                  <div
                    className='project-modal-thumbs'
                    aria-label={projectSectionContent.modalThumbsAriaLabel}
                  >
                    {activeGalleryImages.map((image, index) => (
                      <button
                        key={image.id}
                        type='button'
                        className={`project-modal-thumb${
                          index === activeImageIndex ? ' is-active' : ''
                        }`}
                        onClick={() => setActiveImageIndex(index)}
                        aria-label={`${projectSectionContent.modalThumbLabel} ${index + 1}`}
                        aria-pressed={index === activeImageIndex}
                      >
                        <img
                          src={image.src}
                          alt={image.alt}
                          className='project-modal-thumb-image'
                        />
                      </button>
                    ))}
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default Projects;
