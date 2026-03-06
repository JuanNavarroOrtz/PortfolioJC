import React, { useEffect, useState } from 'react';
import * as Icons from 'react-icons/fa';
import './Menu.css';
import profileImg from '../../assets/Img/profile.jpg';
import JnLogo from '../../assets/Img/JnLogo.png';
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
          className='icon-link icon-button'
          onClick={() => {
            if (isMobile) {
              setMobileMenuOpen(!mobileMenuOpen);
              return;
            }
            setFoldMenu(!foldMenu);
          }}
          aria-label={isMobile ? (mobileMenuOpen ? 'Close menu' : 'Open menu') : (foldMenu ? 'Collapse menu' : 'Expand menu')}
        >
          <Icons.FaBars />
        </button>
        {(isMobile || foldMenu) &&
          <img
            src={JnLogo}
            alt='JN Logo'
            className='sidebar-logo sidebar-logo-main'
          />}
        {(!isMobile && !foldMenu) &&
          <img
            src={JnLogo}
            alt='JN Logo'
            className='sidebar-logo sidebar-logo-compact'
          />}
      </div>
      <div className={`menu-panel ${isMobile ? (mobileMenuOpen ? 'open' : '') : ''}`}>
        {!isMobile && foldMenu &&
          <div className='menu-header'>
            <img
              src={profileImg}
              alt='Profile'
              className='sidebar-image image-style sidebar-profile'
            />
          </div>
        }

        <ul className='menu-items'>
          {menuItems.map((item) => {
            const IconComponent = Icons[item.icon];
            return (<li
              key={item.name}
              className={activeMenu === `${item.name}` ? 'active' : ''}
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
              {(!foldMenu && !isMobile) &&
                <button type='button' className='fold-menu icon-button'>
                  <IconComponent />
                  <span className='tooltip'>{item.text}</span>
                </button>}

              {(foldMenu || isMobile) && <>
                <IconComponent />
                {' '}
                {item.text}
              </>
              }
            </li>);
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
                      <ContactIcon
                        aria-label={item.ariaLabel}
                        style={{
                          color: 'white',
                          fontSize: '24px',
                          transition: 'all 0.3s ease'
                        }}
                      />
                    ) : null}
                    <span className='tooltip'>{item.text}</span>
                  </a>
                ) : (
                  <span className='icon-link'>
                    {ContactIcon ? <ContactIcon aria-label={item.ariaLabel} /> : null}
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
