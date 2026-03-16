import { FaArrowRight, FaCertificate, FaGraduationCap } from 'react-icons/fa';
import { educationItems } from '../../utils/data';

const Education = () => {
  const { featuredCertification, educationHistory } = educationItems;

  return (
    <section className='about-section education-section'>
      <div className='section-heading'>
        <span className='section-icon' aria-hidden='true'>
          <FaGraduationCap />
        </span>
        <h2 className='about-title'>Education</h2>
      </div>
      
      <article className='project-card project-card-featured education-featured'>
        <div className='project-media-shell education-media-shell'>
          <img
            src={featuredCertification.image}
            alt={featuredCertification.imageAlt}
            className='project-media'
          />      
        </div>

        <div className='project-content'>
          <div className='project-copy'>
            <div className='education-heading-row'>
              <span className='education-kicker'>
                <FaCertificate aria-hidden='true' />
                Certification
              </span>
              <span className='education-period'>
                Issued {featuredCertification.issued} | Valid through {featuredCertification.validThrough}
              </span>
            </div>

            <h3 className='project-title'>{featuredCertification.title}</h3>
            <p className='education-credential'>Credential: {featuredCertification.credential}</p>
            <p className='project-summary'>{featuredCertification.summary}</p>
          </div>

          <ul className='project-highlight-list'>
            {featuredCertification.bullets.map((bullet) => (
              <li key={bullet}>{bullet}</li>
            ))}
          </ul>

          <div className='education-actions'>
            <a
              href={featuredCertification.credentialUrl}
              target='_blank'
              rel='noopener noreferrer'
              className='education-link'
            >
              View certification link
              <FaArrowRight aria-hidden='true' />
            </a>
          </div>
        </div>
      </article>

      <div className='education-history'>
        {educationHistory.map((item) => (
          <article key={`${item.title}-${item.period}`} className='skills-group education-card'>
            <div className='education-card-head'>
              <div>
                <h3 className='skills-title education-card-title'>{item.title}</h3>
                <p className='education-card-school'>{item.institution}</p>
              </div>
              <span className='experience-dates'>{item.period}</span>
            </div>
            <p className='about-text'>{item.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Education;
