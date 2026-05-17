import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { FiArrowRight, FiDownload, FiMail } from 'react-icons/fi';

const phrases = ['B.Tech CSE Graduate', 'Software Developer', 'Tech Enthusiast'];

export default function Hero() {
  const [text, setText] = useState('');
  const [index, setIndex] = useState(0);
  const [forward, setForward] = useState(true);

  useEffect(() => {
    const current = phrases[index];
    const timeout = setTimeout(() => {
      setText((value) => {
        const nextValue = forward ? current.slice(0, value.length + 1) : current.slice(0, value.length - 1);
        if (!forward && nextValue.length === 0) {
          setIndex((valueIndex) => (valueIndex + 1) % phrases.length);
          setForward(true);
        }
        if (forward && nextValue.length === current.length) {
          setForward(false);
        }
        return nextValue;
      });
    }, forward ? 90 : 40);
    return () => clearTimeout(timeout);
  }, [text, forward, index]);

  return (
    <section id="home" className="relative mx-auto flex max-w-7xl flex-col gap-12 px-6 pb-24 pt-8 lg:px-8">
      <div className="glass-card flex flex-col gap-10 rounded-[2rem] border-white/10 px-6 py-10 shadow-xl sm:px-10 lg:flex-row lg:items-center lg:justify-between">
        <div className="max-w-2xl space-y-6">
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-sm uppercase tracking-[0.32em] text-sky-300/90"
          >
            Recently graduated
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <h1 className="text-4xl font-semibold tracking-tight text-slate-100 md:text-6xl">Hi, I&apos;m Narinder Singh</h1>
            <p className="mt-4 text-xl text-slate-300 sm:text-2xl">
              <span className="text-sky-300">{text}</span>
              <span className="animate-pulse">|</span>
            </p>
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="max-w-xl leading-8 text-slate-300/90"
          >
            I am a B.Tech Computer Science Engineering graduate from Chitkara University with a strong interest in software development, problem-solving, and emerging technologies.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="flex flex-wrap gap-4"
          >
            <a
              href="#projects"
              className="inline-flex items-center gap-3 rounded-2xl bg-sky-400 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:-translate-y-0.5"
            >
              View Projects <FiArrowRight />
            </a>
            <a
              href="/Narinder-Singh-Resume.pdf"
              className="inline-flex items-center gap-3 rounded-2xl border border-white/10 bg-white/10 px-6 py-3 text-sm text-slate-200 transition hover:border-sky-400/40 hover:text-sky-300"
            >
              <FiDownload /> Download Resume
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-3 rounded-2xl border border-slate-200/10 bg-white/5 px-6 py-3 text-sm text-slate-200 transition hover:bg-sky-400/10"
            >
              <FiMail /> Contact Me
            </a>
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="relative mx-auto flex h-[340px] w-[340px] max-w-full items-center justify-center overflow-hidden rounded-[2rem] border border-white/10 bg-slate-950/75 p-8 shadow-2xl"
        >
          <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-br from-sky-400/20 via-fuchsia-500/10 to-cyan-300/10 blur-3xl" />
          <div className="relative flex h-full w-full flex-col items-center justify-center rounded-[2rem] bg-slate-900/80 p-8 text-center shadow-inner shadow-slate-950/50">
            <div className="mb-5 flex h-28 w-28 items-center justify-center rounded-full bg-slate-800/80 text-5xl font-bold text-sky-300 shadow-glow">NS</div>
            <p className="text-sm uppercase tracking-[0.24em] text-slate-400">Professional Profile</p>
            <p className="mt-4 text-sm leading-6 text-slate-300">A premium portrait placeholder with clean glass styling and interactive focus for modern introductions.</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
