import { FaUser } from 'react-icons/fa';
import { homeContent } from '../../utils/data';

const Home = () => {
  return (
    <section className='about-section resume-style'>
      <div className='section-heading'>
        <span className='section-icon' aria-hidden='true'>
          <FaUser />
        </span>
        <h2 className='about-title'>{homeContent.title}</h2>
      </div>
      <div className='about-content'>
        {homeContent.paragraphs.map((paragraph) => (
          <p key={paragraph} className='about-text'>
            {paragraph}
          </p>
        ))}
      </div>
    </section>
  );
};

export default Home;
