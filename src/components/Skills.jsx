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
  FaVuejs,
} from 'react-icons/fa';
import {
  SiTailwindcss,
  SiTypescript,
  SiVite,
  SiMysql,
} from 'react-icons/si';

const skills = [
  { name: 'HTML5', icon: <FaHtml5 />, color: '#e34f26'},
  { name: 'CSS3', icon: <FaCss3Alt />, color: '#1572b6'},
  { name: 'JavaScript', icon: <FaJsSquare />, color: '#f7df1e'},
  { name: 'React', icon: <FaReact />, color: '#61dafb'},
  { name: 'TypeScript', icon: <SiTypescript />, color: '#3178c6'},
  { name: 'Tailwind CSS', icon: <SiTailwindcss />, color: '#06b6d4'},
  { name: 'Bootstrap', icon: <FaBootstrap />, color: '#7952b3'},
  { name: 'Node.js', icon: <FaNodeJs />, color: '#339933'},
  { name: 'Git', icon: <FaGitAlt />, color: '#f05032'},
  { name: 'Figma', icon: <FaFigma />, color: '#f24e1e'},
  { name: 'Vite', icon: <SiVite />, color: '#646cff'},
  { name: 'MySQL', icon: <SiMysql />, color: '#4479a1'},
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

          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
