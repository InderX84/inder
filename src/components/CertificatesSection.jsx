import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiAward, FiExternalLink, FiX, FiChevronDown } from 'react-icons/fi';
import SectionTitle from './SectionTitle';
import { certificateCategories } from '../data/certificates';

function Modal({ cert, onClose }) {
  return (
    <AnimatePresence>
      {cert && (
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
            className="relative w-full max-w-5xl rounded-[2rem] border border-white/10 bg-slate-900 shadow-2xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between border-b border-white/10 px-6 py-4">
              <p className="font-medium text-slate-100 truncate pr-4">{cert.title}</p>
              <div className="flex items-center gap-3 flex-shrink-0">
                <a
                  href={cert.file}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-300 hover:text-sky-300"
                >
                  <FiExternalLink /> Open
                </a>
                <button
                  onClick={onClose}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-300 hover:text-sky-300"
                >
                  <FiX />
                </button>
              </div>
            </div>
            <div className="overflow-hidden" style={{ height: 'calc(100vh - 160px)' }}>
              <iframe
                src={`${cert.file}#toolbar=0&navpanes=0&scrollbar=0&view=Fit`}
                title={cert.title}
                className="w-full h-full border-0"
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default function CertificatesSection() {
  const [openId, setOpenId] = useState(null);
  const [selected, setSelected] = useState(null);

  const toggle = (id) => setOpenId((prev) => (prev === id ? null : id));

  return (
    <section id="certificates" className="mx-auto max-w-4xl px-6 py-20 lg:px-8">
      <SectionTitle subtitle="Certificates" title="Courses & Certifications" />

      <div className="mt-10 space-y-3">
        {certificateCategories.map((cat, i) => {
          const isOpen = openId === cat.id;
          return (
            <motion.div
              key={cat.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="rounded-2xl border border-white/10 bg-white/5 overflow-hidden"
            >
              {/* accordion header */}
              <button
                onClick={() => toggle(cat.id)}
                className="flex w-full items-center justify-between px-5 py-4 text-left transition hover:bg-white/5"
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-sky-400/10 text-sky-300 flex-shrink-0">
                    <FiAward size={18} />
                  </div>
                  <span className="font-medium text-slate-100">{cat.label}</span>
                  <span className="rounded-full bg-sky-400/10 px-2.5 py-0.5 text-xs text-sky-300">
                    {cat.items.length}
                  </span>
                </div>
                <motion.div
                  animate={{ rotate: isOpen ? 180 : 0 }}
                  transition={{ duration: 0.25 }}
                  className="text-slate-400"
                >
                  <FiChevronDown size={18} />
                </motion.div>
              </button>

              {/* accordion body */}
              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    key="body"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                    className="overflow-hidden"
                  >
                    <div className="grid gap-3 px-5 pb-5 pt-1 sm:grid-cols-2">
                      {cat.items.map((cert) => (
                        <motion.div
                          key={cert.title}
                          initial={{ opacity: 0, y: 8 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.25 }}
                          className="flex items-center justify-between gap-3 rounded-xl border border-white/10 bg-slate-950/50 px-4 py-3"
                        >
                          <p className="text-sm text-slate-300 leading-snug">{cert.title}</p>
                          <button
                            onClick={() => setSelected(cert)}
                            className="flex-shrink-0 rounded-xl border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-slate-400 transition hover:border-sky-400/40 hover:text-sky-300"
                          >
                            View
                          </button>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          );
        })}
      </div>

      <Modal cert={selected} onClose={() => setSelected(null)} />
    </section>
  );
}
