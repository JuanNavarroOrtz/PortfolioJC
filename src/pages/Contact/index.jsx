import {
  FaArrowRight,
  FaUserTie
} from 'react-icons/fa';
import { contactFacts, contactLinks } from '../../utils/data';

const Contact = () => {
  return (
    <section className='about-section contact-section'>
      <div className='section-heading'>
        <span className='section-icon' aria-hidden='true'>
          <FaUserTie />
        </span>
        <h2 className='about-title'>Contact</h2>
      </div>

      <div className='contact-hero'>
        <div className='contact-intro-card'>
          <span className='contact-kicker'>Open to opportunities</span>
          <h3 className='contact-name'>Juan Navarro</h3>
          <p className='contact-role'>Full Stack Engineer focused on business systems, logistics, and cloud-backed delivery.</p>

          <div className='contact-facts'>
            {contactFacts.map((item) => {
              const Icon = item.icon;

              return (
                <div key={item.label} className='contact-fact'>
                  <span className='contact-fact-icon' aria-hidden='true'>
                    <Icon />
                  </span>
                  <div className='contact-fact-copy'>
                    <span className='contact-fact-label'>{item.label}</span>
                    <span className='contact-fact-value'>{item.value}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className='contact-links-grid'>
          {contactLinks.map((item) => {
            const Icon = item.icon;

            return (
              <a
                key={item.title}
                href={item.href}
                target='_blank'
                rel='noopener noreferrer'
                className={`contact-link-card ${item.tone}`}
              >
                <div className='contact-link-head'>
                  <span className='contact-link-icon' aria-hidden='true'>
                    <Icon />
                  </span>
                  <span className='contact-link-title'>{item.title}</span>
                </div>
                <p className='contact-link-handle'>{item.handle}</p>
                <span className='contact-link-cta'>
                  Visit profile
                  <FaArrowRight aria-hidden='true' />
                </span>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Contact;
