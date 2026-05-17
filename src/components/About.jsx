import { motion } from 'framer-motion';
import { FiCode, FiCpu, FiLayers, FiUser } from 'react-icons/fi';
import SectionTitle from './SectionTitle';
import profilePic from '../assests/pic.jpeg';

const highlights = [
  { icon: <FiCode size={20} />, label: 'Frontend Dev', desc: 'React, HTML, CSS, JS' },
  { icon: <FiCpu size={20} />, label: 'Programming', desc: 'C++, Java, Python' },
  { icon: <FiLayers size={20} />, label: 'Tools', desc: 'Git, GitHub, SQL' },
  { icon: <FiUser size={20} />, label: 'Soft Skills', desc: 'Problem Solving, Teamwork' },
];

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
      <SectionTitle subtitle="About" title="Who I Am" />

      <div className="grid gap-12 lg:grid-cols-[1fr,1.4fr] lg:items-center">

        {/* left — image + floating card */}
        <motion.div
          initial={{ opacity: 0, x: -32 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto w-full max-w-sm lg:mx-0"
        >
          {/* glow */}
          <div className="absolute -inset-4 rounded-[2.5rem] bg-gradient-to-br from-sky-400/20 via-fuchsia-500/10 to-cyan-400/10 blur-2xl" />

          {/* photo */}
          <div className="relative overflow-hidden rounded-[2rem] border border-white/10 shadow-2xl">
            <img
              src={profilePic}
              alt="Narinder Singh"
              className="h-[420px] w-full object-cover object-top"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 to-transparent" />
          </div>

          {/* floating experience card */}
          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute -right-6 -bottom-6 rounded-2xl border border-white/10 bg-slate-900/90 px-5 py-4 shadow-xl backdrop-blur-xl"
          >
            <p className="text-xs uppercase tracking-widest text-slate-500">Graduated</p>
            <p className="mt-1 text-lg font-bold text-slate-100">2024 <span className="text-sm font-normal text-sky-400">B.Tech CSE</span></p>
          </motion.div>

          {/* floating cgpa card */}
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
            className="absolute -left-6 top-8 rounded-2xl border border-white/10 bg-slate-900/90 px-5 py-4 shadow-xl backdrop-blur-xl"
          >
            <p className="text-xs uppercase tracking-widest text-slate-500">CGPA</p>
            <p className="mt-1 text-lg font-bold text-slate-100">8.0 <span className="text-sm font-normal text-fuchsia-400">/ 10</span></p>
          </motion.div>
        </motion.div>

        {/* right — text content */}
        <motion.div
          initial={{ opacity: 0, x: 32 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="space-y-6"
        >
          <p className="text-lg leading-8 text-slate-300">
            I'm <span className="font-semibold text-slate-100">Narinder Singh</span>, a B.Tech Computer Science Engineering graduate from{' '}
            <span className="text-sky-300">Chitkara University</span> with a CGPA of 8.0. I have a strong passion for software development, problem-solving, and emerging technologies.
          </p>
          <p className="leading-8 text-slate-400">
            I completed my 10th from Government High School Upalheri with <span className="text-slate-200">90%</span>, and my +2 Non-Medical from Government Senior Secondary School Mohinder Ganj Rajpura (School of Eminence) with <span className="text-slate-200">77%</span>. I continuously focus on improving my technical skills and building practical projects.
          </p>

          {/* highlight grid */}
          <div className="grid grid-cols-2 gap-4 pt-2">
            {highlights.map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
                whileHover={{ scale: 1.03 }}
                className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/5 p-4"
              >
                <div className="mt-0.5 flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-xl bg-sky-400/10 text-sky-300">
                  {item.icon}
                </div>
                <div>
                  <p className="text-sm font-semibold text-slate-100">{item.label}</p>
                  <p className="mt-0.5 text-xs text-slate-500">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* cta */}
          <div className="flex flex-wrap gap-4 pt-2">
            <a
              href="/Narinder-Singh-Resume.pdf"
              className="inline-flex items-center gap-2 rounded-2xl bg-gradient-to-r from-sky-400 to-cyan-400 px-6 py-3 text-sm font-semibold text-slate-950 shadow-lg shadow-sky-400/20 transition hover:-translate-y-0.5"
            >
              Download Resume
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-6 py-3 text-sm text-slate-200 transition hover:border-sky-400/40 hover:text-sky-300"
            >
              Get in Touch
            </a>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
