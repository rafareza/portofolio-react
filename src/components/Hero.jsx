import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import { FiArrowDown, FiDownload } from 'react-icons/fi';

const roles = [
  'Frontend Web Developer',
  'UI/UX Enthusiast',
  'React Developer',
  'Vibe Coder',
];

function Hero() {
  const [currentRole, setCurrentRole] = useState('');
  const [roleIndex, setRoleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentText = roles[roleIndex];

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (charIndex < currentText.length) {
          setCurrentRole(currentText.substring(0, charIndex + 1));
          setCharIndex(charIndex + 1);
        } else {
          setTimeout(() => setIsDeleting(true), 1500);
        }
      } else {
        if (charIndex > 0) {
          setCurrentRole(currentText.substring(0, charIndex - 1));
          setCharIndex(charIndex - 1);
        } else {
          setIsDeleting(false);
          setRoleIndex((prev) => (prev + 1) % roles.length);
        }
      }
    }, isDeleting ? 40 : 80);

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, roleIndex]);

  return (
    <section className="hero" id="hero">
      <motion.div
        className="hero-content"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        <motion.p
          className="hero-greeting"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          👋 Hello, I'm
        </motion.p>

        <motion.h1
          className="hero-name"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
           <span className="highlight">Rafa Rezandrya Jaelani</span>
        </motion.h1>

        <motion.div
          className="hero-typewriter"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          {currentRole}
          <span className="cursor"></span>
        </motion.div>

        <motion.p
          className="hero-description"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          Final semester student majoring in information systems at Gunadarma University.
          Passionate about creating beautiful, interactive, and user-friendly web experiences.
        </motion.p>

        <motion.div
          className="hero-buttons"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.6 }}
        >
          <Link to="projects" smooth={true} offset={-70} duration={500}>
            <button className="btn-primary">
              View My Work <FiArrowDown />
            </button>
          </Link>
          <a href="https://drive.google.com/file/d/1sclLaK5Yb3wz-ByU4UM3yqCsUX90wfDK/view" className="btn-outline" target="_blank">
            <FiDownload /> My CV
          </a>
        </motion.div>
      </motion.div>

      <div className="hero-scroll-indicator">
        <div className="scroll-mouse"></div>
        <span>Scroll Down</span>
      </div>
    </section>
  );
}

export default Hero;
