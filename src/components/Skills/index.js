import React from "react";
import { motion } from "framer-motion";
import { Tooltip } from 'react-tooltip';
import {  
  FaHtml5,
  FaCss3Alt,
  FaReact,  
  FaPython, 
  FaNodeJs,  
  FaDatabase 
} from "react-icons/fa";
import {
  SiJquery, 
  SiBootstrap,  
  SiDotnet, 
  SiDjango,   
  SiPostgresql,
  SiNginx,    
  SiAwslambda,
  SiAmazonec2,
  SiAmazons3,
  SiAmazondynamodb
} from "react-icons/si";

const Skills = () => {
  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  // Skill data
  const frontendSkills = [
    { 
      category: "core", 
      icon: <FaHtml5 size={30} />, 
      name: "HTML", 
      proficiency: 5,
      tip: "Semantic HTML5, Accessibility"
    },
    { 
      category: "core", 
      icon: <FaCss3Alt size={30} />, 
      name: "CSS", 
      proficiency: 5,
      tip: "Flexbox, Grid, Animations"
    },
    { 
      category: "frameworks", 
      icon: <FaReact size={30} />, 
      name: "React", 
      proficiency: 4,
      tip: "Hooks, Context API"
    },
    { 
      category: "frameworks", 
      icon: <FaReact size={30} />, 
      name: "React Native", 
      proficiency: 3,
      tip: "Cross-platform mobile apps"
    },
    { 
      category: "libraries", 
      icon: <SiJquery size={30} />, 
      name: "jQuery", 
      proficiency: 4,
      tip: "DOM manipulation, AJAX"
    },
    { 
      category: "ui", 
      icon: <SiBootstrap size={30} />, 
      name: "Bootstrap", 
      proficiency: 5,
      tip: "Responsive design, Components"
    },
    { 
      category: "frameworks", 
      icon: <SiDotnet size={30} />, 
      name: "Razor Pages", 
      proficiency: 4,
      tip: "Server-side rendering"
    }
  ];

  const backendSkills = [
    { 
      category: "dotnet", 
      icon: <SiDotnet size={30} />, 
      name: "ASP.NET", 
      proficiency: 5,
      tip: "MVC, Web API"
    },
    { 
      category: "dotnet", 
      icon: <SiDotnet size={30} />, 
      name: "Entity Framework", 
      proficiency: 4,
      tip: "ORM, Migrations"
    },
    { 
      category: "python", 
      icon: <SiDjango size={30} />, 
      name: "Django", 
      proficiency: 4,
      tip: "MVT Architecture"
    },
    { 
      category: "python", 
      icon: <FaPython size={30} />, 
      name: "Django REST", 
      proficiency: 4,
      tip: "API Development"
    },
    { 
      category: "javascript", 
      icon: <FaNodeJs size={30} />, 
      name: "Node.js", 
      proficiency: 3,
      tip: "Express, REST APIs"
    }
  ];

  const databaseServerSkills = [
    { 
      category: "database", 
      icon: <SiPostgresql size={30} />, 
      name: "PostgreSQL", 
      proficiency: 4,
      tip: "Relational database"
    },
    { 
      category: "database", 
      icon: <FaDatabase  size={30} />, 
      name: "SQL Server", 
      proficiency: 4,
      tip: "T-SQL, SSMS"
    },
    { 
      category: "reporting", 
      icon: <SiDotnet size={30} />, 
      name: "SSRS", 
      proficiency: 3,
      tip: "SQL Server Reporting"
    },
    { 
      category: "aws", 
      icon: <SiAmazondynamodb size={30} />, 
      name: "RDS", 
      proficiency: 3,
      tip: "Managed databases"
    },
    { 
      category: "aws", 
      icon: <SiAmazons3 size={30} />, 
      name: "S3", 
      proficiency: 4,
      tip: "Object storage"
    },
    { 
      category: "aws", 
      icon: <SiAmazonec2 size={30} />, 
      name: "EC2", 
      proficiency: 3,
      tip: "Virtual servers"
    },
    { 
      category: "aws", 
      icon: <SiAwslambda size={30} />, 
      name: "Lambda", 
      proficiency: 3,
      tip: "Serverless functions"
    },
    { 
      category: "server", 
      icon: <SiNginx size={30} />, 
      name: "NGINX", 
      proficiency: 3,
      tip: "Web server, Reverse proxy"
    }
  ];

  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="skills"
      id="skills"
    >
      <div className="container">
        <h2 className="section-title">Technical Skills</h2>
        
        {/* Frontend Skills */}
        <div className="skills-group">
          <h3>Frontend Development</h3>
          <motion.div 
            className="skills-grid"
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            {frontendSkills.map((skill, index) => (
              <motion.div
                key={`frontend-${index}`}
                variants={item}
                whileHover={{ scale: 1.05 }}
                className={`skill-card ${skill.category}`}
                data-tooltip-id="skill-tooltip"
                data-tooltip-content={skill.tip}
              >
                <div className="skill-icon">{skill.icon}</div>
                <span className="skill-name">{skill.name}</span>
                <div className="proficiency">
                  {[...Array(5)].map((_, i) => (
                    <span 
                      key={i} 
                      className={i < skill.proficiency ? "filled" : "empty"}
                    >
                      ★
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Backend Skills */}
        <div className="skills-group">
          <h3>Backend Development</h3>
          <motion.div 
            className="skills-grid"
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            {backendSkills.map((skill, index) => (
              <motion.div
                key={`backend-${index}`}
                variants={item}
                whileHover={{ scale: 1.05 }}
                className={`skill-card ${skill.category}`}
                data-tooltip-id="skill-tooltip"
                data-tooltip-content={skill.tip}
              >
                <div className="skill-icon">{skill.icon}</div>
                <span className="skill-name">{skill.name}</span>
                <div className="proficiency">
                  {[...Array(5)].map((_, i) => (
                    <span 
                      key={i} 
                      className={i < skill.proficiency ? "filled" : "empty"}
                    >
                      ★
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Database & Server Skills */}
        <div className="skills-group">
          <h3>Database & Server Infrastructure</h3>
          <motion.div 
            className="skills-grid"
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            {databaseServerSkills.map((skill, index) => (
              <motion.div
                key={`database-${index}`}
                variants={item}
                whileHover={{ scale: 1.05 }}
                className={`skill-card ${skill.category}`}
                data-tooltip-id="skill-tooltip"
                data-tooltip-content={skill.tip}
              >
                <div className="skill-icon">{skill.icon}</div>
                <span className="skill-name">{skill.name}</span>
                <div className="proficiency">
                  {[...Array(5)].map((_, i) => (
                    <span 
                      key={i} 
                      className={i < skill.proficiency ? "filled" : "empty"}
                    >
                      ★
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        <Tooltip 
          id="skill-tooltip" 
          className="custom-tooltip"
          place="top"
          effect="solid"
        />
      </div>
    </motion.section>
  );
};

export default Skills;