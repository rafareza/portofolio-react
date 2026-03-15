import { motion } from 'framer-motion';
import { FiMapPin, FiBook, FiUser, FiStar } from 'react-icons/fi';
import fotoImg from '../assets/r1.jpeg';

const infoItems = [
  { icon: <FiUser />, label: 'Name', value: 'Rafa Rezandrya Jaelani' },
  { icon: <FiBook />, label: 'Major', value: 'Information Systems' },
  { icon: <FiMapPin />, label: 'Location', value: 'Bekasi, Indonesia' },
  { icon: <FiStar />, label: 'GPA', value: '3.72 / 4.00' },
];

function About() {
  return (
    <section className="section" id="about">
      <motion.h2
        className="section-title"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
      >
        About Me
      </motion.h2>
      <motion.p
        className="section-subtitle"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, delay: 0.1 }}
      >
        Get to know me better
      </motion.p>

      <div className="about-container">
        <motion.div
          className="about-image-wrapper"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
        >
          <div
            className="about-image"
            style={{
              background: 'linear-gradient(135deg, var(--accent-primary), var(--accent-secondary))',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '5rem',
              color: 'white',
              borderRadius: '20px',
            }}
          >
            <img src={fotoImg} alt="foto" style={{ borderRadius: '20px' }} />
          </div>
        </motion.div>

        <motion.div
          className="about-text"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
        >
          <h3>
            A Passionate <span className="gradient-text">Frontend Developer</span>
          </h3>
          <p>
            My name is Rafa Rezandrya Jaelani, a final-semester Information Systems student at Gunadarma University. 
            I have a strong passion for web development, particularly front-end development. 
            I am skilled at building interactive, responsive websites with compelling UI/UX.
          </p>
          <p>
            I continue to learn and develop my skills in modern web technologies and various development tools. 
            I am ready to contribute and learn more in the industry.
          </p>

          <div className="about-info-grid">
            {infoItems.map((item, idx) => (
              <motion.div
                key={idx}
                className="about-info-item"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
              >
                <span className="info-icon">{item.icon}</span>
                <div className="info-content">
                  <span className="info-label">{item.label}</span>
                  <span className="info-value">{item.value}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default About;
