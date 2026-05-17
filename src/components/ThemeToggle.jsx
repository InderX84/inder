import { motion } from 'framer-motion';
import { FiMoon, FiSun } from 'react-icons/fi';

export default function ThemeToggle({ theme, toggleTheme }) {
  return (
    <motion.button
      initial={{ opacity: 0, x: 24 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      onClick={toggleTheme}
      className="fixed right-6 top-6 z-50 inline-flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-slate-900/70 text-slate-100 shadow-lg shadow-slate-950/20 transition hover:-translate-y-1 hover:bg-sky-400/10"
      aria-label="Toggle theme"
    >
      {theme === 'dark' ? <FiSun size={20} /> : <FiMoon size={20} />}
    </motion.button>
  );
}
