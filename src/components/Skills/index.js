import React from "react";
import { motion } from "framer-motion";
import { FaReact, FaPython, FaAws, FaNodeJs, FaHtml5, FaCss3Alt } from "react-icons/fa";
import { SiDjango, SiPostgresql, SiJquery, SiBootstrap } from "react-icons/si";

const Skills = () => {
  const skills = [
    { icon: <FaHtml5 size={30} />, name: "HTML" },
    { icon: <FaCss3Alt size={30} />, name: "CSS" },
    { icon: <FaReact size={30} />, name: "React" },
    { icon: <FaNodeJs size={30} />, name: "Node.js" },
    { icon: <SiDjango size={30} />, name: "Django" },
    { icon: <FaPython size={30} />, name: "Python" },
    { icon: <SiPostgresql size={30} />, name: "PostgreSQL" },
    { icon: <FaAws size={30} />, name: "AWS" },
    { icon: <SiJquery size={30} />, name: "jQuery" },
    { icon: <SiBootstrap size={30} />, name: "Bootstrap" },
  ];

  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="skills"
    >
      <div className="container">
        <h2>Skills</h2>
        <div className="skills-grid">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="skill-card"
            >
              {skill.icon}
              <span>{skill.name}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Skills;