import { FaBriefcase } from 'react-icons/fa';
import { experienceItems } from '../../utils/data';

const Portfolio = () => {
  return (
    <section className='about-section resume-style'>
      <div className='section-heading'>
        <span className='section-icon' aria-hidden='true'>
          <FaBriefcase />
        </span>
        <h2 className='about-title'>Work Experience</h2>
      </div>
      <div className='experience-timeline'>
        {experienceItems.map((item) => (
          <div key={`${item.company}-${item.period}`} className='experience-item'>
            <article className='experience-card'>
              <div className='experience-head'>
                <h3 className='experience-company'>{item.company}</h3>
                <span className='experience-dates'>{item.period}</span>
              </div>
              <p className='about-text experience-role'>{item.role}</p>
              <ul className='experience-list'>
                {item.highlights.map((highlight) => (
                  <li key={highlight}>{highlight}</li>
                ))}
              </ul>
            </article>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
