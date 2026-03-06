import { FaUser } from 'react-icons/fa';

const About = () => {
  return (
    <section className='about-section resume-style'>
      <div className='section-heading'>
        <span className='section-icon' aria-hidden='true'>
          <FaUser />
        </span>
        <h2 className='about-title'>Profile</h2>
      </div>
      <div className='about-content'>
        <p className='about-text'>
          Full Stack Engineer with 6 years of experience building and maintaining backend-focused
          business systems in financial and logistics environments. Strong background in API development,
          relational databases and production infrastructure management. Experience working with cloud-based
          deployments and maintaining live systems, continuously improving performance, reliability and code quality.
        </p>
      </div>
    </section>
  );
};

export default About;
