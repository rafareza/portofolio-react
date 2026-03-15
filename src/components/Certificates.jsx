import { motion } from 'framer-motion';
import { FiExternalLink, FiAward } from 'react-icons/fi';

const certificates = [
  {
    title: 'Bootcamp: Data Analyst FIKTI Learning',
    issuer: 'Gunadarma University',
    date: '28 May 2023',
    gradient: 'linear-gradient(135deg, #6366f1, #8b5cf6)',
    emoji: '📊',
    driveLink: 'https://drive.google.com/file/d/1rP3gV4iMsG7eY1ZbyAabsWYeADu2eqOk/view?usp=sharing',
  },
  {
    title: 'Bootcamp: Web Development FIKTI Learning',
    issuer: 'Gunadarma University',
    date: '19 May 2024',
    gradient: 'linear-gradient(135deg, #ec4899, #f43f5e)',
    emoji: '💻',
    driveLink: 'https://drive.google.com/file/d/1fHt1ChT_3GCWdUpEBsj3ynnjlVlS6NT-/view?usp=sharing',
  },
  {
    title: 'Workshop: Javascript Fundamental Analysis',
    issuer: 'Gunadarma University',
    date: '23 August 2024',
    gradient: 'linear-gradient(135deg, #e59605ff, #de8d23ff)',
    emoji: '🌐',
    driveLink: 'https://drive.google.com/file/d/1EAYolRzkjaqxQ9XZijlyNd2R3JED70yS/view?usp=sharing',
  },
  {
    title: 'Vinix7: Divisi Data Sains',
    issuer: 'Vinix7',
    date: '28 December 2025',
    gradient: 'linear-gradient(135deg, #22d3ee, #06b6d4)',
    emoji: '📈',
    driveLink: 'https://drive.google.com/file/d/1bTW7J1Bkx9n812H-nBRsyoxvo-msTTMA/view?usp=sharing',
  },
];

function Certificates() {
  return (
    <section className="section" id="certificates">
      <motion.h2
        className="section-title"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
      >
        Certificates
      </motion.h2>
      <motion.p
        className="section-subtitle"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, delay: 0.1 }}
      >
        Certifications and achievements I've earned
      </motion.p>

      <div className="certificates-grid">
        {certificates.map((cert, idx) => (
          <motion.div
            key={idx}
            className="certificate-card"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: idx * 0.1 }}
          >
            <div className="certificate-thumbnail-wrapper">
              <div
                className="certificate-thumbnail"
                style={{
                  background: cert.gradient,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '3.5rem',
                }}
              >
                {cert.emoji}
              </div>
            </div>

            <div className="certificate-info">
              <div className="certificate-badge">
                <FiAward />
                <span>{cert.issuer}</span>
              </div>
              <h3>{cert.title}</h3>
              <p className="certificate-date">{cert.date}</p>
              <a
                href={cert.driveLink}
                className="certificate-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                Certificate <FiExternalLink />
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Certificates;
