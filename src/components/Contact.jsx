import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  FiMail,
  FiMapPin,
  FiPhone,
  FiSend,
} from 'react-icons/fi';
import {
  FaGithub,
  FaLinkedinIn,
  FaInstagram,
} from 'react-icons/fa';

const contactDetails = [
  {
    icon: <FiMail />,
    label: 'Email',
    value: ' rafa.rezandrya08@gmail.com',
  },
  {
    icon: <FiMapPin />,
    label: 'Location',
    value: ' Bekasi, Indonesia',
  },
  {
    icon: <FiPhone />,
    label: 'Phone',
    value: ' +6285894109114',
  },
];

const socials = [
  { icon: <FaGithub />, href: 'https://github.com/rafareza', label: 'GitHub' },
  { icon: <FaLinkedinIn />, href: 'https://www.linkedin.com/in/rafa-rezandrya-jaelani-070137391', label: 'LinkedIn' },
  { icon: <FaInstagram />, href: 'https://www.instagram.com/rafa.reza_/', label: 'Instagram' },
];

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const mailtoLink = `mailto:rafa.rezandrya08@gmail.com?subject=${encodeURIComponent(
      formData.subject
    )}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`
    )}`;
    window.open(mailtoLink);
  };

  return (
    <section className="section" id="contact">
      <motion.h2
        className="section-title"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
      >
        Get In Touch
      </motion.h2>
      <motion.p
        className="section-subtitle"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, delay: 0.1 }}
      >
        Have a project in mind or want to work together? Let's connect!
      </motion.p>

      <div className="contact-container">
        <motion.div
          className="contact-info"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
        >
          <h3>
            Let's Build Something <span className="gradient-text">Amazing</span>
          </h3>
          <p>
            I'm always open to new opportunities, freelance projects, or interesting collaborations. 
            Don't hesitate to contact me!
          </p>

          <div className="contact-details">
            {contactDetails.map((item, idx) => (
              <div key={idx} className="contact-detail-item">
                <div className="contact-detail-icon">{item.icon}</div>
                <div className="contact-detail-text">
                  <span className="label">{item.label}</span>
                  <span className="value">{item.value}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="contact-socials">
            {socials.map((social, idx) => (
              <a
                key={idx}
                href={social.href}
                className="social-link"
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
              >
                {social.icon}
              </a>
            ))}
          </div>
        </motion.div>

        <motion.form
          className="contact-form"
          onSubmit={handleSubmit}
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
        >
          <div className="form-group">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
              id="contact-name"
            />
          </div>
          <div className="form-group">
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
              id="contact-email"
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              name="subject"
              placeholder="Subject"
              value={formData.subject}
              onChange={handleChange}
              required
              id="contact-subject"
            />
          </div>
          <div className="form-group">
            <textarea
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              required
              id="contact-message"
            />
          </div>
          <button type="submit" className="btn-submit" id="contact-submit">
            Send Message <FiSend />
          </button>
        </motion.form>
      </div>
    </section>
  );
}

export default Contact;
