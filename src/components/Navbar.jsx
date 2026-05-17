import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMenu, FiX } from 'react-icons/fi';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Education', href: '#education' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'GitHub', href: '#github' },
  { label: 'Certificates', href: '#certificates' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <motion.header
      initial={{ opacity: 0, y: -24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="sticky top-0 z-40 mx-auto w-full bg-slate-950/40 backdrop-blur-xl border-b border-white/5"
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        <motion.a
          href="#home"
          whileHover={{ scale: 1.05 }}
          className="text-lg font-semibold tracking-[0.16em] text-sky-300"
        >
          NARINDER
        </motion.a>
        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link, i) => (
            <motion.a
              key={link.href}
              href={link.href}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 + i * 0.06 }}
              whileHover={{ color: '#7dd3fc', y: -2 }}
              className="relative text-sm text-slate-300 transition"
            >
              {link.label}
            </motion.a>
          ))}
        </div>
        <motion.button
          whileTap={{ scale: 0.9 }}
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-200 transition hover:bg-sky-400/15 md:hidden"
          onClick={() => setOpen((c) => !c)}
          aria-label="Toggle navigation"
        >
          {open ? <FiX size={20} /> : <FiMenu size={20} />}
        </motion.button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden md:hidden border-t border-white/10 bg-slate-950/95 px-6 pb-4"
          >
            <div className="flex flex-col gap-1 pt-2">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.25, delay: i * 0.05 }}
                  className="rounded-2xl px-4 py-3 text-sm text-slate-200 transition hover:bg-white/10 hover:text-sky-300"
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </motion.a>
              ))}
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
