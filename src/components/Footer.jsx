import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiMail, FiInstagram, FiEye } from 'react-icons/fi';
import { socials } from '../data/socials';

const socialIcons = {
  Email: <FiMail />,
  LinkedIn: <FiLinkedin />,
  GitHub: <FiGithub />,
  Instagram: <FiInstagram />,
};

function useVisitorCount() {
  const [count, setCount] = useState(null);

  useEffect(() => {
    fetch('https://api.countapi.xyz/hit/narinder-portfolio/visits')
      .then((res) => res.json())
      .then((data) => setCount(data.value))
      .catch(() => {});
  }, []);

  return count;
}

export default function Footer() {
  const count = useVisitorCount();

  return (
    <motion.footer
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6 }}
      className="border-t border-white/10 bg-slate-950/80 py-12"
    >
      <div className="mx-auto flex max-w-7xl flex-col gap-6 px-6 text-slate-400 sm:flex-row sm:items-center sm:justify-between lg:px-8">
        <div className="flex flex-col gap-1">
          <p>Designed & Developed by Narinder Singh</p>
          {count !== null && (
            <p className="flex items-center gap-1.5 text-xs text-slate-500">
              <FiEye size={12} />
              {count.toLocaleString()} visitors
            </p>
          )}
        </div>
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
