import React, { useState } from 'react';
import * as Icons from 'react-icons/fa';
import './Menu.css';
import profileImg from '../../assets/Img/profile.jpg';
import Logo from '../../assets/Img/Logo.png';
import JnLogo from '../../assets/Img/JnLogo.png';

const Menu = (props) => {
  const {
    foldMenu,
    setFoldMenu
  } = props;

  const [activeMenu, setActiveMenu] = useState('home');

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
          onClick={() => setFoldMenu(!foldMenu)}
          aria-label={foldMenu ? 'Collapse menu' : 'Expand menu'}
        >
          <Icons.FaBars />
        </button>
        {foldMenu &&
          <img
            src={Logo}
            alt='Sistemas JN Logo'
            className='sidebar-logo'
            style={{
              width: '60%',
              height: 'auto',
              maxWidth: '150px',
              marginLeft: '10px'
            }}
          />}
        {!foldMenu &&
          <img
            src={JnLogo}
            alt='JN Logo'
            className='sidebar-logo'
            style={{
              width: '62%',
              maxWidth: '150px',
              marginLeft: '5px'
            }}
          />}
      </div>
      {foldMenu &&
        <div className='menu-header'>
          <img
            src={profileImg}
            alt='Logo or header image'
            className='sidebar-image image-style'
            style={{
              width: '70%',
              maxWidth: '200px',
              margin: '0 auto',
              display: 'block',
              padding: '10px 0'
            }}
          />
        </div>
      }

      <ul className='menu-items'>
        {menuItems.map((item, index) => {
          const IconComponent = Icons[item.icon];
          return (<li
            key={index}
            className={activeMenu === `${item.name}` ? 'active' : ''}
            onClick={() => setActiveMenu(item.name)}
          >
            {!foldMenu &&
              <button type='button' className='fold-menu icon-button'>
                <IconComponent />
                <span className='tooltip'>{item.text}</span>
              </button>}

            {foldMenu && <>
              <IconComponent />
              {' '}
              {item.text}
            </>
            }
          </li>);
        })}
      </ul>

      {foldMenu && <div className='container-menu-icons'>
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
    </>
  );
};

export default Menu;
