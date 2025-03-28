import React from "react";
import { motion } from "framer-motion";

const Experience = () => {
  const experiences = [
    {
      company: "ULTRAVAL",
      period: "2022-2025",
      role: "Developer",
      description: [
        "Money transfer Company",
        "Maintained and developed treasury system using ASP.NET MVC, C#, and React.",
        "Improved user experience with React JS and Node.js."
      ]
    },
    {
      company: "I-CARGO (Freelance)",
      period: "2022-2023",
      role: "Developer",
      description: [
        "Logistics & Cargo Services",
        "Built automation system with React, Django, and PostgreSQL.",
        "Deployed on AWS EC2 with NGINX."
      ]
    },
    {
      company: "Almacenadora LAFISE",
      period: "2020-2022",
      role: "Programmer Analyst",
      description: [
        "Inventory & POS Management",
        "Developed WMS systems with Django, Python, and T-SQL."
      ]
    }
  ];

  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="experience"
    >
      <div className="container">
        <h2>Professional Experience</h2>
        <div className="timeline">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ x: index % 2 === 0 ? -50 : 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="timeline-item"
            >
              <h3>{exp.company} ({exp.period})</h3>
              <p>{exp.role}</p>
              <ul>
                {exp.description.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Experience;