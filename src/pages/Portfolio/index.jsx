import { useState } from 'react';
import Menu from '../../components/Menu';
import './Portfolio.css';
import About from '../../components/About';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

const Portfolio = () => {
  const [foldMenu, setFoldMenu] = useState(false);

  return (
    <>
      <Header foldMenu={foldMenu} />
      <div className='container'>
        <div className={`sidebar ${!foldMenu ? 'folded' : ''}`}>
          <Menu foldMenu={foldMenu} setFoldMenu={setFoldMenu} />
        </div>

        <div class={`card-container ${!foldMenu ? 'folded' : ''}`}>
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
