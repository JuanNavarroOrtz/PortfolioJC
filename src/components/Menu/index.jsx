import React, { useState } from 'react';
import * as Icons from 'react-icons/fa';
import './Menu.css';
import profileImg from '../../assets/Img/profile.jpg';
import Logo from '../../assets/Img/Logo.png';

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
    { icon: <Icons.FaEnvelope aria-label="Email" />, text: "juan.navarro.ortz@gmail.com" },
    {
      icon: <Icons.FaLinkedinIn aria-label="LinkedIn" />,
      text: "linkedin.com/in/juannavarroortz",
      link: "https://linkedin.com/in/juannavarroortz"
    },
    {
      icon: <Icons.FaGithub aria-label="GitHub" />,
      text: "github.com/JuanNavarroOrtz",
      link: "https://github.com/JuanNavarroOrtz"
    },
  ];
  return (
    <>
      <div className='fold-button'>
        <a className='icon-link' onClick={() => setFoldMenu(!foldMenu)}>
          <Icons.FaBars />
        </a>
        {foldMenu &&
          <img
            src={Logo}
            alt="Sistemas JN Logo"
            className="sidebar-logo"
            style={{
              width: '60%',
              height: '80%',
              maxWidth: '150px',
              marginLeft: '10px'
            }}
          />}
      </div>
      {foldMenu &&
        <div className="menu-header">
          <img
            src={profileImg}
            alt="Logo or header image"
            className="sidebar-image image-style"
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

      <ul className="menu-items">
        {menuItems.map((item, index) => {
          const IconComponent = Icons[item.icon];
          return (<li
            key={index}
            className={activeMenu === `${item.name}` ? 'active' : ''}
            onClick={() => setActiveMenu(item.name)}
          >
            {!foldMenu &&
              <a className='fold-menu'>
                <IconComponent />
                <span className="tooltip">{item.name}</span>
              </a>}

            {foldMenu && <>
              <IconComponent />
              {' '}
              {item.text}
            </>
            }
          </li>)
        })}
      </ul>

      {foldMenu && <div className='container-menu-icons'>
        {contactItems.map((item, index) => (
          <div key={index} className="icon-wrapper">
            <a
              href={item.link}
              className="icon-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              {React.cloneElement(item.icon, {
                style: {
                  color: 'white',
                  fontSize: '24px',
                  transition: 'all 0.3s ease'
                }
              })}
              <span className="tooltip">{item.text}</span>
            </a>
          </div>
        ))}
      </div>}
    </>
  )
}

export default Menu;