import { useEffect, useState, useCallback, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiArrowRight, FiGithub, FiLinkedin, FiMail, FiInstagram, FiX, FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { FaSnapchatGhost } from 'react-icons/fa';
import profilePic from '../assests/pic.png';
import profilePic2 from '../assests/pic2.png';
import profilePic3 from '../assests/pic3.png';
import { socials } from '../data/socials';

const phrases = ['B.Tech CSE Graduate', 'Software Developer', 'Tech Enthusiast'];

const stats = [
  { value: '8.0', label: 'CGPA' },
  { value: '10+', label: 'Projects' },
  { value: '40+', label: 'Certificates' },
];

const slides = [
  { src: profilePic,  position: 'object-top',    label: 'Software Developer' },
  { src: profilePic2, position: 'object-top',    label: 'B.Tech CSE Graduate' },
  { src: profilePic3, position: 'object-top',    label: 'Tech Enthusiast' },
];

const socialIcons = {
  GitHub: <FiGithub size={18} />,
  LinkedIn: <FiLinkedin size={18} />,
  Email: <FiMail size={18} />,
  Instagram: <FiInstagram size={18} />,
  Snapchat: <FaSnapchatGhost size={18} />,
};

export default function Hero() {
  const [text, setText] = useState('');
  const typeRef = useRef({ index: 0, forward: true });

  useEffect(() => {
    let timeout;
    const tick = () => {
      const { index, forward } = typeRef.current;
      const current = phrases[index];
      setText((value) => {
        const next = forward
          ? current.slice(0, value.length + 1)
          : current.slice(0, value.length - 1);
        if (!forward && next.length === 0) {
          typeRef.current = { index: (index + 1) % phrases.length, forward: true };
        } else if (forward && next.length === current.length) {
          typeRef.current = { index, forward: false };
        }
        return next;
      });
      timeout = setTimeout(tick, typeRef.current.forward ? 90 : 40);
    };
    timeout = setTimeout(tick, 90);
    return () => clearTimeout(timeout);
  }, []);

  const [slide, setSlide] = useState(0);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalSlide, setModalSlide] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setSlide((s) => (s + 1) % slides.length), 3500);
    return () => clearInterval(id);
  }, []);

  const openModal = useCallback(() => { setModalSlide(slide); setModalOpen(true); }, [slide]);
  const prevModal = useCallback(() => setModalSlide((s) => (s - 1 + slides.length) % slides.length), []);
  const nextModal = useCallback(() => setModalSlide((s) => (s + 1) % slides.length), []);

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
            <div
              className="relative h-[420px] w-[340px] overflow-hidden rounded-[2.5rem] border border-white/10 bg-slate-900/80 shadow-2xl sm:h-[480px] sm:w-[380px] cursor-zoom-in"
              onClick={openModal}
            >
              <AnimatePresence mode="wait">
                <motion.img
                  key={slide}
                  src={slides[slide].src}
                  alt="Narinder Singh"
                  loading="lazy"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                  style={{ willChange: 'opacity', transform: 'translateZ(0)' }}
                  className={`h-full w-full object-cover ${slides[slide].position}`}
                />
              </AnimatePresence>

              {/* bottom info strip */}
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950/95 via-slate-950/60 to-transparent px-6 pb-6 pt-16">
                <p className="text-lg font-semibold text-slate-100">Narinder Singh</p>
                <AnimatePresence mode="wait">
                  <motion.p
                    key={slide}
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -6 }}
                    transition={{ duration: 0.4 }}
                    className="mt-1 text-sm text-sky-300"
                  >
                    {slides[slide].label}
                  </motion.p>
                </AnimatePresence>
              </div>

              {/* dot indicators */}
              <div className="absolute bottom-4 right-4 flex gap-1.5">
                {slides.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setSlide(i)}
                    className={`h-1.5 rounded-full transition-all duration-300 ${
                      i === slide ? 'w-5 bg-sky-400' : 'w-1.5 bg-white/30'
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* floating badge — bottom center */}
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
              style={{ willChange: 'transform' }}
              className="mx-auto mt-4 w-fit rounded-2xl border border-white/10 bg-slate-900/90 px-4 py-3 shadow-xl backdrop-blur-xl text-center"
            >
              <p className="text-xs text-slate-400">Certificates</p>
              <p className="text-xl font-bold text-slate-100">40<span className="text-sm text-fuchsia-400">+</span></p>
            </motion.div>

          </div>
        </motion.div>

      </div>

      {/* image modal */}
      <AnimatePresence>
        {modalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/90 backdrop-blur-sm p-4"
            onClick={() => setModalOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="relative max-h-[90vh] max-w-lg w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <AnimatePresence mode="wait">
                <motion.img
                  key={modalSlide}
                  src={slides[modalSlide].src}
                  alt={slides[modalSlide].label}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  style={{ willChange: 'opacity' }}
                  className="w-full max-h-[80vh] object-contain rounded-[2rem] shadow-2xl"
                />
              </AnimatePresence>

              {/* label */}
              <p className="mt-3 text-center text-sm text-sky-300">{slides[modalSlide].label}</p>

              {/* prev / next */}
              <button onClick={prevModal} className="absolute left-2 top-1/2 -translate-y-1/2 flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-slate-900/80 text-slate-200 hover:text-sky-300 backdrop-blur">
                <FiChevronLeft size={20} />
              </button>
              <button onClick={nextModal} className="absolute right-2 top-1/2 -translate-y-1/2 flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-slate-900/80 text-slate-200 hover:text-sky-300 backdrop-blur">
                <FiChevronRight size={20} />
              </button>

              {/* close */}
              <button onClick={() => setModalOpen(false)} className="absolute -top-4 -right-4 flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-slate-900 text-slate-300 hover:text-sky-300">
                <FiX size={16} />
              </button>

              {/* dots */}
              <div className="mt-3 flex justify-center gap-2">
                {slides.map((_, i) => (
                  <button key={i} onClick={() => setModalSlide(i)} className={`h-1.5 rounded-full transition-all duration-300 ${i === modalSlide ? 'w-5 bg-sky-400' : 'w-1.5 bg-white/30'}`} />
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

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
