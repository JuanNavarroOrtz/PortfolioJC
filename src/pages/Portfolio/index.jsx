import Menu from '../../components/Menu';
import './Portfolio.css';
import About from '../../components/About';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

const Portfolio = () => {
  return (
    <>
      <Header />
      <div className='container'>
        <div className="sidebar">
          <Menu />
        </div>

        <div class="main-container">
          <div className='card-body'>
            <About />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Portfolio;
