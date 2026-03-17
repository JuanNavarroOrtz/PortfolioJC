import { useEffect, useState } from 'react';
import * as Icons from 'react-icons/fa';
import './Menu.css';
import profileImg from '../../assets/Img/profile.jpg';
import JnLogo from '../../assets/Img/devjn.png';
import { menuItems } from '../../utils/data';
import { contactItems } from '../../utils/data';

const Menu = (props) => {
  const {
    foldMenu,
    setFoldMenu,
    isMobile,
    mobileMenuOpen,
    setMobileMenuOpen,
    currentSection,
    setCurrentSection
  } = props;

  const defaultSection = menuItems[0]?.name || 'home';
  const [activeMenu, setActiveMenu] = useState(currentSection || defaultSection);

  useEffect(() => {
    setActiveMenu(currentSection || defaultSection);
  }, [currentSection]);

  return (
    <>
      <div className={`fold-button ${!foldMenu ? 'folded' : ''}`}>
        <button
          type='button'
          className='sidebar-toggle icon-button'
          aria-label={isMobile ? 'Toggle mobile menu' : 'Toggle sidebar'}
          aria-expanded={isMobile ? mobileMenuOpen : foldMenu}
          onClick={() => {
            if (isMobile) {
              setMobileMenuOpen(!mobileMenuOpen);
              return;
            }
            setFoldMenu(!foldMenu);
          }}
        >
          <img
            src={JnLogo}
            alt='JN Logo'
            className='sidebar-logo sidebar-logo-main'
          />
        </button>
      </div>
      <div className={`menu-panel ${isMobile ? (mobileMenuOpen ? 'open' : '') : ''}`}>
        {!isMobile && foldMenu &&
          <div className='menu-header'>
            <img
              src={profileImg}
              alt='Profile'
              className='sidebar-image image-style sidebar-profile'
            />
            <div className='menu-intro'>
              <h2 className='menu-name'>Juan Navarro</h2>              
              <span className='menu-status'>FULL STACK ENGINEER - CLOUD FOCUS</span>
            </div>
          </div>
        }

        <ul className='menu-items'>
          {menuItems.map((item) => {
            const IconComponent = Icons[item.icon];
            const isActive = activeMenu === item.name;

            return (
              <li
                key={item.name}
                className={isActive ? 'active' : ''}
              >
                <button
                  type='button'
                  className={`menu-action ${!foldMenu && !isMobile ? 'menu-action-compact' : ''}`}
                  aria-current={isActive ? 'page' : undefined}
                  onClick={() => {
                    setActiveMenu(item.name);
                    if (setCurrentSection) {
                      setCurrentSection(item.name);
                    }
                    if (isMobile) {
                      setMobileMenuOpen(false);
                    }
                  }}
                >
                  <IconComponent />
                  {(foldMenu || isMobile) && <span>{item.text}</span>}
                  {(!foldMenu && !isMobile) && <span className='tooltip'>{item.text}</span>}
                </button>
              </li>
            );
          })}
        </ul>

        {!isMobile && foldMenu && <div className='container-menu-icons'>
          {contactItems.map((item, index) => (
            <div key={index} className='icon-wrapper'>
              {(() => {
                const ContactIcon = Icons[item.icon];

                return item.link ? (
                  <a
                    href={item.link}
                    className='icon-link'
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    {ContactIcon ? (
                      <ContactIcon aria-label={item.ariaLabel} className='contact-icon' />
                    ) : null}
                    <span className='tooltip'>{item.text}</span>
                  </a>
                ) : (
                  <span className='icon-link'>
                    {ContactIcon ? <ContactIcon aria-label={item.ariaLabel} className='contact-icon' /> : null}
                    <span className='tooltip'>{item.text}</span>
                  </span>
                );
              })()}
            </div>
          ))}
        </div>}
      </div>
    </>
  );
};

export default Menu;
