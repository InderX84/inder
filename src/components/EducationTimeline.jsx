import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SectionTitle from './SectionTitle';
import { educationTimeline } from '../data/education';

export default function EducationTimeline() {
  const [expanded, setExpanded] = useState(null);

  return (
    <section id="education" className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
      <SectionTitle subtitle="Education" title="Academic Timeline" />

      <div className="relative">
        {/* vertical line */}
        <div className="absolute left-6 top-0 hidden h-full w-px bg-gradient-to-b from-sky-400/60 via-fuchsia-500/40 to-transparent md:block" />

        <div className="space-y-10">
          {educationTimeline.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: index * 0.12 }}
              className="relative md:pl-20"
            >
              {/* dot on the line */}
              <div className="absolute left-0 top-6 hidden h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-slate-900 text-2xl shadow-glow md:flex">
                {item.icon}
              </div>

              <div className="glass-card rounded-[2rem] border-white/10 p-7">
                {/* header row */}
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div>
                    <span className="text-xs uppercase tracking-[0.24em] text-sky-400/80">{item.year}</span>
                    <h3 className="mt-1 text-xl font-semibold text-slate-100">{item.institution}</h3>
                    <p className="mt-1 text-slate-300">{item.title}</p>
                  </div>
                  <div className="flex items-center gap-3">
                    {item.details.map((d) => (
                      <span key={d} className="rounded-2xl bg-sky-400/10 px-3 py-1 text-sm font-medium text-sky-300 border border-sky-400/20">
                        {d}
                      </span>
                    ))}
                  </div>
                </div>

                {/* expandable more info */}
                <AnimatePresence initial={false}>
                  {expanded === item.id && (
                    <motion.ul
                      key="details"
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.35 }}
                      className="mt-5 space-y-2 overflow-hidden border-t border-white/10 pt-5"
                    >
                      {item.more.map((point) => (
                        <li key={point} className="flex items-start gap-2 text-sm text-slate-300">
                          <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-sky-400" />
                          {point}
                        </li>
                      ))}
                    </motion.ul>
                  )}
                </AnimatePresence>

                <button
                  onClick={() => setExpanded(expanded === item.id ? null : item.id)}
                  className="mt-5 inline-flex items-center gap-2 rounded-2xl border border-white/10 bg-slate-950/60 px-4 py-2 text-sm text-slate-300 transition hover:border-sky-400/40 hover:text-sky-300"
                >
                  {expanded === item.id ? 'Show less ↑' : 'View more ↓'}
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
