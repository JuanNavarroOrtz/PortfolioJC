import { useEffect, useState } from 'react';
import Menu from '../../components/Menu';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import './mainPage.css';
import About from '../About';
import PortfolioPage from '../Portfolio';
import Services from '../Services';
import Contact from '../Contact';

const MOBILE_BREAKPOINT = 640;

const Portfolio = () => {
  const [isMobile, setIsMobile] = useState(() => {
    if (typeof window === 'undefined') return false;
    return window.innerWidth <= MOBILE_BREAKPOINT;
  });
  const [foldMenu, setFoldMenu] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [currentSection, setCurrentSection] = useState('about');

  useEffect(() => {
    if (typeof window === 'undefined') return undefined;

    const mobileQuery = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT}px)`);
    const syncMenuByViewport = (event) => {
      const matches = event.matches;
      setIsMobile(matches);
      setMobileMenuOpen(false);

      if (!matches) {
        setFoldMenu(true);
      }
    };

    syncMenuByViewport(mobileQuery);

    if (mobileQuery.addEventListener) {
      mobileQuery.addEventListener('change', syncMenuByViewport);
      return () => mobileQuery.removeEventListener('change', syncMenuByViewport);
    }

    mobileQuery.addListener(syncMenuByViewport);
    return () => mobileQuery.removeListener(syncMenuByViewport);
  }, []);

  return (
    <div className='app-shell'>
      <Header foldMenu={foldMenu} />
      {isMobile && mobileMenuOpen && (
        <button
          type='button'
          className='mobile-menu-backdrop'
          aria-label='Close menu'
          onClick={() => setMobileMenuOpen(false)}
        />
      )}
      <div className='layout-container'>
        <div className={`sidebar ${isMobile ? 'mobile' : ''} ${!foldMenu ? 'folded' : ''} ${mobileMenuOpen ? 'open' : ''}`}>
          <Menu
            foldMenu={foldMenu}
            setFoldMenu={setFoldMenu}
            isMobile={isMobile}
            mobileMenuOpen={mobileMenuOpen}
            setMobileMenuOpen={setMobileMenuOpen}
            currentSection={currentSection}
            setCurrentSection={setCurrentSection}
          />
        </div>

        <div className={`card-container ${!foldMenu ? 'folded' : ''}`}>
          <div className='card-body'>
            {currentSection === 'about' && <About />}
            {currentSection === 'portfolio' && <PortfolioPage />}
            {currentSection === 'services' && <Services />}
            {currentSection === 'contact' && <Contact />}
          </div>
        </div>
      </div>
      <Footer foldMenu={foldMenu} />
    </div>
  );
};

export default Portfolio;
