import { useState } from 'react';
import Menu from '../../components/Menu';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import './mainPage.css';
import About from '../About';

const Portfolio = () => {
  const [foldMenu, setFoldMenu] = useState(false);

  return (
    <>
      <Header foldMenu={foldMenu} />
      <div className='container'>
        <div className={`sidebar ${!foldMenu ? 'folded' : ''}`}>
          <Menu foldMenu={foldMenu} setFoldMenu={setFoldMenu} />
        </div>

        <div className={`card-container ${!foldMenu ? 'folded' : ''}`}>
          <div className='card-body'>
            <About />
          </div>
        </div>
      </div>
      <Footer foldMenu={foldMenu} />
    </>
  );
};

export default Portfolio;
