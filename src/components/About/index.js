import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="about"
    >
      <div className="container">
        <h2>About Me</h2>
        <p>
          Dedicated and experienced programmer with four years of expertise in software
          development, specializing in front-end and back-end applications, Proficient in a wide range
          of programming languages and frameworks, with a strong track record of delivering high
          quality, efficient and scalable software solutions. Committed to staying up-to-date with
          latest industry trends and technologies.
        </p>
      </div>
    </motion.section>
  );
};

export default About;