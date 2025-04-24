import React from "react";
import { motion } from "framer-motion";

const Education = () => {
  const education = [
    "Computer Engineering, UNAN (2017-2021)",
    "AWS Cloud Practitioner (2021)",
    "POWER BI, UAM (2025)"
  ];

  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="education"
    >
      <div className="container">
        <h2>Education & Certifications</h2>
        <ul>
          {education.map((item, index) => (
            <motion.li
              key={index}
              whileHover={{ x: 10 }}
            >
              {item}
            </motion.li>
          ))}
        </ul>
      </div>
    </motion.section>
  );
};

export default Education;