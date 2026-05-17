import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiX, FiExternalLink, FiAward } from 'react-icons/fi';
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
                scrolling="no"
                style={{ overflow: 'hidden' }}
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default function CertificatesSection() {
  const [activeTab, setActiveTab] = useState(certificateCategories[0].id);
  const [selected, setSelected] = useState(null);

  const activeCategory = certificateCategories.find((c) => c.id === activeTab);

  return (
    <section id="certificates" className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
      <SectionTitle subtitle="Certificates" title="Courses & Certifications" />

      {/* tabs */}
      <div className="mb-8 flex flex-wrap gap-2">
        {certificateCategories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setActiveTab(cat.id)}
            className={`rounded-2xl border px-4 py-2 text-sm transition ${
              activeTab === cat.id
                ? 'border-sky-400/60 bg-sky-400/10 text-sky-300'
                : 'border-white/10 bg-white/5 text-slate-300 hover:border-sky-400/30 hover:text-slate-100'
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* cards */}
      <motion.div
        key={activeTab}
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35 }}
        className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3"
      >
        {activeCategory.items.map((cert) => (
          <div
            key={cert.title}
            className="glass-card flex items-start justify-between gap-4 rounded-[1.5rem] border-white/10 p-5"
          >
            <div className="flex items-start gap-3">
              <div className="mt-0.5 flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-2xl bg-sky-400/10 text-sky-300">
                <FiAward size={18} />
              </div>
              <p className="text-sm leading-6 text-slate-200">{cert.title}</p>
            </div>
            <button
              onClick={() => setSelected(cert)}
              className="flex-shrink-0 rounded-2xl border border-white/10 bg-slate-950/60 px-3 py-1.5 text-xs text-slate-300 transition hover:border-sky-400/40 hover:text-sky-300"
            >
              View
            </button>
          </div>
        ))}
      </motion.div>

      <Modal cert={selected} onClose={() => setSelected(null)} />
    </section>
  );
}
