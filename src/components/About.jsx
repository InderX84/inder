import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiCode, FiCpu, FiLayers, FiUsers, FiMapPin, FiBookOpen, FiAward, FiX, FiDownload } from 'react-icons/fi';
import SectionTitle from './SectionTitle';
import resume from '../assests/Narinder_Singh.pdf';

const highlights = [
  { icon: FiCode,   label: 'Frontend Dev',  desc: 'React, HTML, CSS, JS'    },
  { icon: FiCpu,    label: 'Programming',   desc: 'C++, Java, Python, C'     },
  { icon: FiLayers, label: 'Tools',         desc: 'Git, GitHub, SQL, MongoDB' },
  { icon: FiUsers,  label: 'Soft Skills',   desc: 'Problem Solving, Teamwork' },
];

const education = [
  {
    icon: FiAward,
    degree: 'M.E. — Computer Science',
    school: 'Pursuing',
    year: 'Research Assistant',
    grade: 'Upcoming',
    color: 'text-cyan-400',
    border: 'border-cyan-400/40',
    bg: 'bg-cyan-400/10',
  },
  {
    icon: FiBookOpen,
    degree: 'B.E. — CSE',
    school: 'Chitkara University',
    year: '2022 – 2026',
    grade: 'CGPA 7.62',
    color: 'text-sky-400',
    border: 'border-sky-400/40',
    bg: 'bg-sky-400/10',
  },
  {
    icon: FiAward,
    degree: '+2 Non-Medical',
    school: 'GSSS Mohinder Ganj Rajpura',
    year: 'School of Eminence',
    grade: '77%',
    color: 'text-fuchsia-400',
    border: 'border-fuchsia-400/40',
    bg: 'bg-fuchsia-400/10',
  },
  {
    icon: FiMapPin,
    degree: '10th',
    school: 'Govt. High School Upalheri',
    year: '',
    grade: '90%',
    color: 'text-emerald-400',
    border: 'border-emerald-400/40',
    bg: 'bg-emerald-400/10',
  },
];

function ResumeModal({ onClose }) {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/80 backdrop-blur-sm p-4"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.92, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.92, opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="relative w-full max-w-4xl rounded-[2rem] border border-white/10 bg-slate-900 shadow-2xl overflow-hidden"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex items-center justify-between border-b border-white/10 px-6 py-4">
            <p className="font-medium text-slate-100">Narinder Singh — Resume</p>
            <div className="flex items-center gap-3">
              <a
                href={resume}
                download
                className="inline-flex items-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-300 hover:text-sky-300"
              >
                <FiDownload size={14} /> Download
              </a>
              <button
                onClick={onClose}
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-300 hover:text-sky-300"
              >
                <FiX />
              </button>
            </div>
          </div>
          <div style={{ height: 'calc(100vh - 160px)' }}>
            <iframe
              src={`${resume}#toolbar=0&navpanes=0&scrollbar=0&view=Fit`}
              title="Resume"
              className="w-full h-full border-0"
            />
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

export default function About() {
  const [showResume, setShowResume] = useState(false);
  return (
    <section id="about" className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
      <SectionTitle subtitle="About" title="Who I Am" />

      <div className="mt-12 grid gap-10 lg:grid-cols-2 lg:items-start">

        {/* LEFT — bio + highlight cards */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
          className="space-y-6"
        >
          <p className="text-lg leading-8 text-slate-300">
            I'm a final-year B.Tech CSE student at{' '}
            <span className="text-sky-300">Chitkara University</span>, focused on full-stack development, machine learning, and building real-world projects that solve meaningful problems.
          </p>

          {/* highlight grid */}
          <div className="grid grid-cols-2 gap-3 pt-2">
            {highlights.map(({ icon: Icon, label, desc }, i) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: i * 0.08 }}
                whileHover={{ scale: 1.03 }}
                className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/5 p-4"
              >
                <div className="mt-0.5 flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-xl bg-sky-400/10 text-sky-300">
                  <Icon size={18} />
                </div>
                <div>
                  <p className="text-sm font-semibold text-slate-100">{label}</p>
                  <p className="mt-0.5 text-xs text-slate-500">{desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* cta */}
          <div className="flex flex-wrap gap-3 pt-2">
            <button
              onClick={() => setShowResume(true)}
              className="inline-flex items-center gap-2 rounded-2xl bg-gradient-to-r from-sky-400 to-cyan-400 px-6 py-3 text-sm font-semibold text-slate-950 shadow-lg shadow-sky-400/20 transition hover:-translate-y-0.5"
            >
              View Resume
            </button>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-6 py-3 text-sm text-slate-200 transition hover:border-sky-400/40 hover:text-sky-300"
            >
              Get in Touch
            </a>
          </div>
        </motion.div>

        {/* RIGHT — education timeline + stats */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="space-y-6"
        >
          {/* education timeline */}
          <div className="relative space-y-4 pl-4">
            {/* vertical line */}
            <div className="absolute left-0 top-2 h-[calc(100%-1rem)] w-px bg-white/10" />

            {education.map(({ icon: Icon, degree, school, year, grade, color, border, bg }, i) => (
              <motion.div
                key={degree}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: i * 0.1 }}
                className={`relative rounded-2xl border ${border} ${bg} p-5`}
              >
                {/* dot on timeline */}
                <span className={`absolute -left-[1.35rem] top-5 flex h-4 w-4 items-center justify-center rounded-full border-2 ${border} bg-slate-950`}>
                  <span className={`h-1.5 w-1.5 rounded-full ${color.replace('text-', 'bg-')}`} />
                </span>

                <div className="flex items-start justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <div className={`flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-xl ${bg} ${color}`}>
                      <Icon size={17} />
                    </div>
                    <div>
                      <p className="font-semibold text-slate-100">{degree}</p>
                      <p className="text-xs text-slate-400">{school}</p>
                      {year && <p className="text-xs text-slate-500">{year}</p>}
                    </div>
                  </div>
                  <span className={`flex-shrink-0 rounded-xl border ${border} px-3 py-1 text-sm font-bold ${color}`}>
                    {grade}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

      </div>
      {showResume && <ResumeModal onClose={() => setShowResume(false)} />}
    </section>
  );
}
