import React from "react";
import { motion } from "framer-motion";
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import profilePhoto from "../../assets/profile.jpg"; // Adjust path to your image
import "../../styles/App.css";

const Header = () => {
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
            alt="Juan Navarro - Full Stack Developer" 
            className="profile-photo"
          />
          <div className="photo-border"></div>
        </motion.div>

        <div className="header-content">
          <motion.h1
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
          >
            Juan Navarro
          </motion.h1>
          
          <motion.h2
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="job-title"
          >
            Full Stack Developer
          </motion.h2>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="contact-info"
          >
            <span><FaPhone className="contact-icon" /> +505 896 11536</span>
            <span><FaEnvelope className="contact-icon" /> juan.navarro.ortz@gmail.com</span>
            <span><FaMapMarkerAlt className="contact-icon" /> Managua, Nicaragua</span>
          </motion.div>
        </div>
      </div>
    </motion.header>
  );
};

export default Header;