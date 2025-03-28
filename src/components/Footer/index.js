import React from "react";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="footer"
    >
      <div className="container">
        <p>© {new Date().getFullYear()} Juan Navarro. All rights reserved.</p>
      </div>
    </motion.footer>
  );
};

export default Footer;