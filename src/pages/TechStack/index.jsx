import { FaLaptopCode } from 'react-icons/fa';
import { techStackSections } from '../../utils/data';

const Services = () => {
  return (
    <section className='about-section'>
      <div className='section-heading'>
        <span className='section-icon' aria-hidden='true'>
          <FaLaptopCode />
        </span>
        <h2 className='about-title'>Tech Stack</h2>
      </div>
      <div className='skills-grid'>
        {techStackSections.map((section) => (
          <article key={section.title} className='skills-group'>
            <h3 className='skills-title'>{section.title}</h3>
            <div className='skills-tags'>
              {section.items.map((item) => {
                const Icon = item.icon;
                return (
                  <span key={item.name} className='skill-tag'>
                    <Icon className='skill-tag-icon' aria-hidden='true' />
                    <span>{item.name}</span>
                  </span>
                );
              })}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Services;
