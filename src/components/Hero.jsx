import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { FiArrowRight, FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';
import profilePic from '../assests/pic.jpeg';
import { socials } from '../data/socials';

const phrases = ['B.Tech CSE Graduate', 'Software Developer', 'Tech Enthusiast'];

const stats = [
  { value: '8.0', label: 'CGPA' },
  { value: '10+', label: 'Projects' },
  { value: '40+', label: 'Certificates' },
];

const socialIcons = {
  GitHub: <FiGithub size={18} />,
  LinkedIn: <FiLinkedin size={18} />,
  Email: <FiMail size={18} />,
};

export default function Hero() {
  const [text, setText] = useState('');
  const [index, setIndex] = useState(0);
  const [forward, setForward] = useState(true);

  useEffect(() => {
    const current = phrases[index];
    const timeout = setTimeout(() => {
      setText((value) => {
        const next = forward
          ? current.slice(0, value.length + 1)
          : current.slice(0, value.length - 1);
        if (!forward && next.length === 0) { setIndex((i) => (i + 1) % phrases.length); setForward(true); }
        if (forward && next.length === current.length) setForward(false);
        return next;
      });
    }, forward ? 90 : 40);
    return () => clearTimeout(timeout);
  }, [text, forward, index]);

  return (
    <section id="home" className="relative min-h-screen mx-auto max-w-7xl px-6 lg:px-8 flex items-center">

      {/* left col */}
      <div className="grid w-full gap-16 lg:grid-cols-2 lg:items-center">

        {/* text side */}
        <div className="order-2 lg:order-1">

          {/* badge */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-sky-400/20 bg-sky-400/5 px-4 py-1.5"
          >
            <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_6px_2px_rgba(52,211,153,0.5)]" />
            <span className="text-xs uppercase tracking-[0.28em] text-sky-300/90">Available for opportunities</span>
          </motion.div>

          {/* heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-5xl font-bold leading-[1.1] tracking-tight text-slate-100 md:text-6xl xl:text-7xl"
          >
            Hi, I'm <br />
            <span className="bg-gradient-to-r from-sky-400 via-cyan-300 to-fuchsia-400 bg-clip-text text-transparent">
              Narinder
            </span>
          </motion.h1>

          {/* typewriter */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="mt-4 text-xl text-slate-400 sm:text-2xl"
          >
            <span className="text-slate-200">{text}</span>
            <span className="animate-pulse text-sky-400">|</span>
          </motion.p>

          {/* bio */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.38 }}
            className="mt-6 max-w-lg leading-8 text-slate-400"
          >
            B.Tech CSE graduate from Chitkara University passionate about building clean, performant software and exploring emerging technologies.
          </motion.p>

          {/* stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-8 flex gap-8"
          >
            {stats.map((s) => (
              <div key={s.label} className="flex flex-col">
                <span className="text-2xl font-bold text-slate-100">{s.value}</span>
                <span className="mt-0.5 text-xs uppercase tracking-widest text-slate-500">{s.label}</span>
              </div>
            ))}
          </motion.div>

          {/* buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.62 }}
            className="mt-8 flex flex-wrap gap-4"
          >
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-2xl bg-gradient-to-r from-sky-400 to-cyan-400 px-6 py-3 text-sm font-semibold text-slate-950 shadow-lg shadow-sky-400/20 transition hover:-translate-y-0.5 hover:shadow-sky-400/40"
            >
              View Projects <FiArrowRight />
            </a>
          </motion.div>

          {/* socials */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.75 }}
            className="mt-8 flex items-center gap-3"
          >
            {socials.map((s) => (
              <motion.a
                key={s.label}
                href={s.href}
                target={s.href.startsWith('mailto') ? undefined : '_blank'}
                rel="noreferrer"
                whileHover={{ y: -4, scale: 1.1 }}
                className="flex h-10 w-10 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-slate-400 transition hover:border-sky-400/40 hover:text-sky-300"
              >
                {socialIcons[s.label]}
              </motion.a>
            ))}
          </motion.div>
        </div>

        {/* image side */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="order-1 flex justify-center lg:order-2 lg:justify-end"
        >
          <div className="relative">

            {/* outer glow ring */}
            <div className="absolute -inset-4 rounded-[2.5rem] bg-gradient-to-br from-sky-400/30 via-fuchsia-500/20 to-cyan-400/20 blur-2xl" />

            {/* card */}
            <div className="relative h-[420px] w-[340px] overflow-hidden rounded-[2.5rem] border border-white/10 bg-slate-900/80 shadow-2xl sm:h-[480px] sm:w-[380px]">
              <img
                src={profilePic}
                alt="Narinder Singh"
                className="h-full w-full object-cover object-top"
              />

              {/* bottom info strip */}
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950/95 via-slate-950/60 to-transparent px-6 pb-6 pt-16">
                <p className="text-lg font-semibold text-slate-100">Narinder Singh</p>
                <p className="mt-1 text-sm text-sky-300">Software Developer</p>
              </div>
            </div>

            {/* floating badge — bottom left */}
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
              className="absolute -left-6 bottom-16 rounded-2xl border border-white/10 bg-slate-900/90 px-4 py-3 shadow-xl backdrop-blur-xl"
            >
              <p className="text-xs text-slate-400">Certificates</p>
              <p className="text-xl font-bold text-slate-100">40<span className="text-sm text-fuchsia-400">+</span></p>
            </motion.div>

          </div>
        </motion.div>

      </div>

      {/* scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.4, repeat: Infinity, ease: 'easeInOut' }}
          className="flex h-8 w-5 items-start justify-center rounded-full border border-white/10 pt-1.5"
        >
          <div className="h-1.5 w-1 rounded-full bg-sky-400" />
        </motion.div>
      </motion.div>

    </section>
  );
}
