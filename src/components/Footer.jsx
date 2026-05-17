import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';
import { socials } from '../data/socials';

const socialIcons = {
  Email: <FiMail />,
  LinkedIn: <FiLinkedin />,
  GitHub: <FiGithub />,
};

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6 }}
      className="border-t border-white/10 bg-slate-950/80 py-12"
    >
      <div className="mx-auto flex max-w-7xl flex-col gap-6 px-6 text-slate-400 sm:flex-row sm:items-center sm:justify-between lg:px-8">
        <p>Designed & Developed by Narinder Singh</p>
        <div className="flex flex-wrap items-center gap-4 text-slate-300">
          {socials.map((link) => (
            <motion.a
              key={link.label}
              href={link.href}
              target={link.href.startsWith('mailto') ? undefined : '_blank'}
              rel="noreferrer"
              whileHover={{ y: -3, color: '#7dd3fc' }}
              className="inline-flex items-center gap-2"
            >
              {socialIcons[link.label]} {link.label}
            </motion.a>
          ))}
        </div>
      </div>
    </motion.footer>
  );
}
