import { Link } from 'react-scroll';
import { FaGithub, FaLinkedinIn, FaInstagram } from 'react-icons/fa';

const quickLinks = [
  { to: 'hero', label: 'Home' },
  { to: 'about', label: 'About' },
  { to: 'skills', label: 'Skills' },
  { to: 'projects', label: 'Projects' },
  { to: 'contact', label: 'Contact' },
];

const socials = [
  { icon: <FaGithub />, href: 'https://github.com/rafareza', label: 'GitHub' },
  { icon: <FaLinkedinIn />, href: 'https://www.linkedin.com/in/rafa-rezandrya-jaelani-070137391', label: 'LinkedIn' },
  { icon: <FaInstagram />, href: 'https://www.instagram.com/rafa.reza_/', label: 'Instagram' },
];

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-brand">
          <div className="footer-logo">{'<Rafareza />'}</div>
          <p>
            Seorang mahasiswa semester akhir jurusan Sistem Informasi Universitas Gunadarma yang memiliki ketertarikan pada pengembangan web dan teknologi.
          </p>
        </div>

        <div className="footer-links">
          <h4>Quick Links</h4>
          {quickLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              smooth={true}
              offset={-70}
              duration={500}
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="footer-links">
          <h4>Contact</h4>
          <a href="mailto:rafarezandrya@gmail.com">rafarezandrya@gmail.com</a>
          <a>Bekasi, Indonesia</a>
          <a>Universitas Gunadarma</a>
        </div>
      </div>

      <div className="footer-bottom">
        <span>© {2026} Rafa Rezandrya Jaelani. All rights reserved.</span>
        <div className="footer-bottom-socials">
          {socials.map((social, idx) => (
            <a
              key={idx}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.label}
            >
              {social.icon}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}

export default Footer;
