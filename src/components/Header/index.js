import React, { useState } from 'react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaLinkedinIn, FaGithub } from "react-icons/fa";

const ProfileCard = () => {
  const [activeMenu, setActiveMenu] = useState('home');
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
    <div className="app-container">
      {/* Left Sidebar Menu */}
      <div className="sidebar">
        <div className="menu-header">Menu</div>
        <ul className="menu-items">
          <li
            className={activeMenu === 'home' ? 'active' : ''}
            onClick={() => setActiveMenu('home')}
          >
            Home
          </li>
          <li
            className={activeMenu === 'about' ? 'active' : ''}
            onClick={() => setActiveMenu('about')}
          >
            About
          </li>
          <li
            className={activeMenu === 'portfolio' ? 'active' : ''}
            onClick={() => setActiveMenu('portfolio')}
          >
            Portfolio
          </li>
          <li
            className={activeMenu === 'services' ? 'active' : ''}
            onClick={() => setActiveMenu('services')}
          >
            Services
          </li>
          <li
            className={activeMenu === 'contact' ? 'active' : ''}
            onClick={() => setActiveMenu('contact')}
          >
            Contact
          </li>
        </ul>
        <div className='container-menu-icons'>
          {contactItems.map((item, index) => (
            <div key={index}>
              <a href={item.link}>
                {item.icon}
              </a>
            </div>
          ))}
        </div>
      </div>

      {/* Profile Card (Right Content) */}
      <div className="profile-card">
        <div className="initial">J</div>
        <div className="name">Jack</div>

        <div className="greeting">
          <div>Hi,</div>
          <div>I'm Jack,</div>
        </div>

        <div className="role">web developer</div>

        <div className="expertise">
          Front End Developer / WordPress Expert
        </div>

        <div className="contact-cta">Contact me!</div>
      </div>
    </div>
  );
};

export default ProfileCard;