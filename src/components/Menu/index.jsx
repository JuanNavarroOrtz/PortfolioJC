import React, { useState } from 'react';
import * as Icons from 'react-icons/fa';
import './Menu.css';
import profileImg from '../../assets/Img/profile.jpg';
import Logo from '../../assets/Img/Logo.png';
import JnLogo from '../../assets/Img/JnLogo.png';

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

  const [activeMenu, setActiveMenu] = useState(currentSection || 'about');

  const menuItems = [{
    name: 'about', text: 'About', icon: 'FaUser'
  }, {
    name: 'portfolio', text: 'Portfolio', icon: 'FaBriefcase'
  }, {
    name: 'services', text: 'Services', icon: 'FaLaptopCode'
  }, {
    name: 'contact', text: 'Contact', icon: 'FaPhone'
  }];

  const contactItems = [
    {
      icon: <Icons.FaEnvelope aria-label="Email" />,
      text: 'juan.navarro.ortz@gmail.com',
      link: 'mailto:juan.navarro.ortz@gmail.com'
    },
    {
      icon: <Icons.FaLinkedinIn aria-label="LinkedIn" />,
      text: 'linkedin.com/in/juannavarroortz',
      link: 'https://linkedin.com/in/juannavarroortz'
    },
    {
      icon: <Icons.FaGithub aria-label="GitHub" />,
      text: 'github.com/JuanNavarroOrtz',
      link: 'https://github.com/JuanNavarroOrtz'
    }
  ];

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
            src={Logo}
            alt='Sistemas JN Logo'
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
              alt='Logo or header image'
              className='sidebar-image image-style sidebar-profile'
            />
          </div>
        }

        <ul className='menu-items'>
          {menuItems.map((item, index) => {
            const IconComponent = Icons[item.icon];
            return (<li
              key={index}
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
              {item.link ? (
                <a
                  href={item.link}
                  className='icon-link'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  {React.cloneElement(item.icon, {
                    style: {
                      color: 'white',
                      fontSize: '24px',
                      transition: 'all 0.3s ease'
                    }
                  })}
                  <span className='tooltip'>{item.text}</span>
                </a>
              ) : (
                <span className='icon-link'>
                  {item.icon}
                  <span className='tooltip'>{item.text}</span>
                </span>
              )}
            </div>
          ))}
        </div>}
      </div>
    </>
  );
};

export default Menu;
