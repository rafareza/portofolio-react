import { motion } from 'framer-motion';
import { FiExternalLink, FiGithub } from 'react-icons/fi';

const projects = [
  {
    title: 'Mental Health Detection',
    description:
      'Website deteksi kesehatan mental menggunakan algoritma SVM dan Naive Bayes. Dibangun dengan Flask dan machine learning model.',
    tags: ['Python', 'Flask', 'SVM', 'Naive Bayes'],
    gradient: 'linear-gradient(135deg, #6366f1, #8b5cf6)',
    emoji: '🧠',
    github: '#',
  },
  {
    title: 'Acacia Water',
    description:
      'Website untuk penjualan dan pembelian air dan gas di toko Acacia Water.',
    tags: ['React', 'TypeScript', 'Supabase'],
    gradient: 'linear-gradient(135deg, #ec4899, #f43f5e)',
    emoji: '🛒',
    github: 'https://github.com/rafareza/acacia-water.git',
    live: 'https://acacia-water.vercel.app/',
  },
  {
    title: 'Website Bunga Indah',
    description:
      'Website untuk penjualan dan pembelian bunga di toko Bunga Indah.',
    tags: ['PHP', 'MySQL', 'Bootstrap'],
    gradient: 'linear-gradient(135deg, #22d3ee, #06b6d4)',
    emoji: '💐',
    github: 'https://github.com/rafareza/bunga-indah',
  },
  {
    title: 'Portfolio Website',
    description:
      'Website portofolio personal yang interaktif dan responsif dengan animasi modern dan dark theme.',
    tags: ['React', 'Framer Motion', 'Vite', 'CSS3'],
    gradient: 'linear-gradient(135deg, #f59e0b, #f97316)',
    emoji: '🚀',
    github: 'https://github.com/rafareza/portofolio-react',
    live: '#',
  },
  {
    title: 'Design UI/UX Jacoffee',
    description:
      'Merancang tampilan antarmuka (UI) dan pengalaman pengguna (UX) untuk toko kopi Jacoffee dengan menggunakan Figma.',
    tags: ['Figma'],
    gradient: 'linear-gradient(135deg, #36291341, #21160b99)',
    emoji: '🎨',
    live: 'https://bit.ly/jacoffee',
  },
];

function Projects() {
  return (
    <section className="section" id="projects">
      <motion.h2
        className="section-title"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
      >
        Featured Projects
      </motion.h2>
      <motion.p
        className="section-subtitle"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, delay: 0.1 }}
      >
        Some of the projects I've built and worked on
      </motion.p>

      <div className="projects-grid">
        {projects.map((project, idx) => (
          <motion.div
            key={idx}
            className="project-card"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: idx * 0.1 }}
          >
            <div className="project-thumbnail-wrapper">
              <div
                className="project-thumbnail"
                style={{
                  background: project.gradient,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '4rem',
                }}
              >
                {project.emoji}
              </div>
              <div className="project-overlay">
                {project.github && (
                  <a
                    href={project.github}
                    className="project-overlay-btn"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="View source code"
                  >
                    <FiGithub />
                  </a>
                )}
                {project.live && (
                  <a
                    href={project.live}
                    className="project-overlay-btn"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="View live demo"
                  >
                    <FiExternalLink />
                  </a>
                )}
              </div>
            </div>

            <div className="project-info">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="project-tags">
                {project.tags.map((tag) => (
                  <span key={tag} className="project-tag">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
