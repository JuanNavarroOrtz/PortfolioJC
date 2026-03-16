import { useEffect, useState } from 'react';
import Menu from '../../components/Menu';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import './mainPage.css';
import Home from '../Home';
import Experience from '../Experience';
import Projects from '../Projects';
import TechStack from '../TechStack';
import Education from '../Education';
import Contact from '../Contact';
import { menuItems } from '../../utils/data';

const MOBILE_BREAKPOINT = 640;
const SECTION_STORAGE_KEY = 'portfolio-current-section';

const Portfolio = () => {
  const defaultSection = menuItems[0]?.name || 'home';
  const validSections = menuItems.map((item) => item.name);
  const [isMobile, setIsMobile] = useState(() => {
    if (typeof window === 'undefined') return false;
    return window.innerWidth <= MOBILE_BREAKPOINT;
  });
  const [foldMenu, setFoldMenu] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [currentSection, setCurrentSection] = useState(() => {
    // Restore the last visited section after reload, but only if it still exists.
    if (typeof window === 'undefined') {
      return defaultSection;
    }

    const savedSection = window.localStorage.getItem(SECTION_STORAGE_KEY);
    return validSections.includes(savedSection) ? savedSection : defaultSection;
  });

  const sectionComponents = {
    home: Home,
    experience: Experience,
    projects: Projects,
    techStack: TechStack,
    education: Education,
    contact: Contact
  };

  const SectionComponent = sectionComponents[currentSection] || Home;

  useEffect(() => {
    if (typeof window === 'undefined') return undefined;

    const mobileQuery = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT}px)`);
    // Keep sidebar behavior in sync with the current viewport mode.
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

  useEffect(() => {
    if (typeof window === 'undefined') {
      return;
    }

    // Persist menu selection so refresh keeps the same active section.
    window.localStorage.setItem(SECTION_STORAGE_KEY, currentSection);
  }, [currentSection]);

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
            <SectionComponent />
          </div>
        </div>
      </div>
      <Footer foldMenu={foldMenu} />
    </div>
  );
};

export default Portfolio;
