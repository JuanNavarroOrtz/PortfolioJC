import React, { useState } from 'react';
import { FaEnvelope, FaLinkedinIn, FaGithub } from 'react-icons/fa';
import './Menu.css';
import profileImg from '../../assets/Img/profile.jpg';

const Menu = () => {
  const [activeMenu, setActiveMenu] = useState('home');
  const menuItems = [{
    name: 'about', text: 'About'
  }, {
    name: 'portfolio', text: 'Portfolio'
  }, {
    name: 'services', text: 'Services'
  }, {
    name: 'contact', text: 'Contact'
  }];
  const contactItems = [
    { icon: <FaEnvelope aria-label="Email" />, text: "juan.navarro.ortz@gmail.com" },
    {
      icon: <FaLinkedinIn aria-label="LinkedIn" />,
      text: "linkedin.com/in/juannavarroortz",
      link: "https://linkedin.com/in/juannavarroortz"
    },
    {
      icon: <FaGithub aria-label="GitHub" />,
      text: "github.com/JuanNavarroOrtz",
      link: "https://github.com/JuanNavarroOrtz"
    },
  ];
  return (
    <>
      <div className="sidebar">
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

        <ul className="menu-items">
          {menuItems.map((item, index) => (
            <li
              key={index}
              className={activeMenu === `${item.name}` ? 'active' : ''}
              onClick={() => setActiveMenu(item.name)}
            >
              {item.text}
            </li>
          ))}
        </ul>

        <div className='container-menu-icons'>
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
        </div>
      </div>
    </>
  )
}

export default Menu;