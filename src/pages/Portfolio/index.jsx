import Menu from '../../components/Menu';
import './Portfolio.css';
import About from '../../components/About';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

const Portfolio = () => {
  return (
    <>
      <div className='container'>
        <div>
          <Menu />
        </div>
        <div className='right-side'>
          <Header />
          <div className='card-body'>
            <About />
          </div>
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Portfolio;
