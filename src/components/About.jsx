import { motion } from 'framer-motion';
import { FiMapPin, FiBook, FiUser, FiCalendar } from 'react-icons/fi';

const infoItems = [
  { icon: <FiUser />, label: 'Nama', value: 'Rafa Rezandrya Jaelani' },
  { icon: <FiBook />, label: 'Jurusan', value: 'Sistem Informasi' },
  { icon: <FiMapPin />, label: 'Domisili', value: 'Bekasi, Indonesia' },
  { icon: <FiCalendar />, label: 'Semester', value: 'Semester Akhir' },
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
            }}
          >
            👨‍💻
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
            Saya Rafa Rezandrya Jaelani, mahasiswa semester akhir jurusan Sistem Informasi
            di Universitas Gunadarma. Saya memiliki passion yang kuat di bidang pengembangan
            web, khususnya frontend development. Saya terampil dalam membangun website yang
            interaktif, responsif, dan memiliki UI/UX yang menarik.
          </p>
          <p>
            Saya terus belajar dan mengembangkan kemampuan saya dalam teknologi web modern
            seperti React, JavaScript, dan berbagai tools pengembangan lainnya. Saya siap
            untuk berkontribusi dan belajar lebih banyak di dunia industri.
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
