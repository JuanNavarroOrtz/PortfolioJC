import React from "react";
import { motion } from "framer-motion";
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaLinkedinIn, FaGithub } from "react-icons/fa";
import profilePhoto from "../../assets/profile.jpg";

const Header = () => {
  const contactItems = [
    { icon: <FaPhone aria-label="Phone" />, text: "+505 8961 1536" },
    { icon: <FaEnvelope aria-label="Email" />, text: "juan.navarro.ortz@gmail.com"},
    { icon: <FaMapMarkerAlt aria-label="Location" />, text: "Managua, Nicaragua" },
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
    <motion.header
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="hero"
    >
      <div className="container header-container">
        <motion.div
          initial={{ scale: 0.9 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="profile-photo-container"
        >
          <img 
            src={profilePhoto}
            alt="Juan Navarro" 
            className="profile-photo"            
          />
        </motion.div>

        <div className="header-content">
          <motion.h1 transition={{ delay: 0.3 }}>Juan Navarro</motion.h1>
          <motion.h2 transition={{ delay: 0.4 }}>Full Stack Developer</motion.h2>
          
          <motion.div 
            className="contact-info"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, staggerChildren: 0.1 }}
          >
            {contactItems.map((item, index) => (
              <motion.span key={index} transition={{ delay: 0.1 * index }}>
                {item.icon}{" "}
                {item.link ? (
                  <a href={item.link} target="_blank" rel="noopener noreferrer">
                    {item.text}
                  </a>
                ) : (
                  item.text
                )}
              </motion.span>
            ))}
          </motion.div>
        </div>
      </div>
    </motion.header>
  );
};

export default Header;