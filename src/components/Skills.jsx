import { motion } from 'framer-motion';
import {
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaReact,
  FaGitAlt,
  FaFigma,
  FaNodeJs,
  FaBootstrap,
} from 'react-icons/fa';
import {
  SiTailwindcss,
  SiTypescript,
  SiVite,
  SiMysql,
} from 'react-icons/si';

const skills = [
  { name: 'HTML5', icon: <FaHtml5 />, color: '#e34f26', level: 90 },
  { name: 'CSS3', icon: <FaCss3Alt />, color: '#1572b6', level: 85 },
  { name: 'JavaScript', icon: <FaJsSquare />, color: '#f7df1e', level: 80 },
  { name: 'React', icon: <FaReact />, color: '#61dafb', level: 75 },
  { name: 'TypeScript', icon: <SiTypescript />, color: '#3178c6', level: 65 },
  { name: 'Tailwind CSS', icon: <SiTailwindcss />, color: '#06b6d4', level: 75 },
  { name: 'Bootstrap', icon: <FaBootstrap />, color: '#7952b3', level: 80 },
  { name: 'Node.js', icon: <FaNodeJs />, color: '#339933', level: 60 },
  { name: 'Git', icon: <FaGitAlt />, color: '#f05032', level: 70 },
  { name: 'Figma', icon: <FaFigma />, color: '#f24e1e', level: 65 },
  { name: 'Vite', icon: <SiVite />, color: '#646cff', level: 70 },
  { name: 'MySQL', icon: <SiMysql />, color: '#4479a1', level: 65 },
];

function Skills() {
  return (
    <section className="section" id="skills">
      <motion.h2
        className="section-title"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
      >
        Skills & Technologies
      </motion.h2>
      <motion.p
        className="section-subtitle"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, delay: 0.1 }}
      >
        Technologies I work with to bring ideas to life
      </motion.p>

      <div className="skills-grid">
        {skills.map((skill, idx) => (
          <motion.div
            key={skill.name}
            className="skill-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.05 }}
          >
            <span className="skill-icon" style={{ color: skill.color }}>
              {skill.icon}
            </span>
            <span className="skill-name">{skill.name}</span>
            <div className="skill-bar-wrapper">
              <motion.div
                className="skill-bar"
                initial={{ width: 0 }}
                whileInView={{ width: `${skill.level}%` }}
                viewport={{ once: true }}
                transition={{ duration: 1.2, delay: idx * 0.05 + 0.3 }}
              />
            </div>
            <span className="skill-level">{skill.level}%</span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
