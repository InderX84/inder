import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiAward, FiBookOpen } from 'react-icons/fi';
import SectionTitle from './SectionTitle';
import { achievements } from '../data/achievements';
import { learningItems } from '../data/learning';

const tabs = [
  { id: 'achievements', label: 'Achievements', icon: FiAward },
  { id: 'learning',     label: 'Currently Learning', icon: FiBookOpen },
];

export default function AchievementsSection() {
  const [active, setActive] = useState('achievements');

  const items = active === 'achievements'
    ? achievements.map((a) => ({ title: a.title, desc: a.description, emoji: '🏆' }))
    : learningItems.map((l) => ({ title: l.title, desc: l.desc, emoji: '📚' }));

  return (
    <section id="achievements" className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
      <SectionTitle subtitle="Growth" title="Achievements & Learning" />

      {/* tabs */}
      <div className="mb-8 flex gap-2">
        {tabs.map(({ id, label, icon: Icon }) => (
          <button
            key={id}
            onClick={() => setActive(id)}
            className={`inline-flex items-center gap-2 rounded-2xl border px-5 py-2.5 text-sm font-medium transition ${
              active === id
                ? 'border-sky-400/60 bg-sky-400/10 text-sky-300'
                : 'border-white/10 bg-white/5 text-slate-400 hover:text-slate-100'
            }`}
          >
            <Icon size={15} /> {label}
          </button>
        ))}
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={active}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.3 }}
          className="grid gap-6 md:grid-cols-3"
        >
          {items.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              className="glass-card rounded-[2rem] border-white/10 p-7"
            >
              <span className="mb-4 inline-block rounded-3xl bg-slate-900/80 p-4 text-2xl">
                {item.emoji}
              </span>
              <h3 className="text-xl font-semibold text-slate-100">{item.title}</h3>
              <p className="mt-3 text-slate-400">{item.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </AnimatePresence>
    </section>
  );
}
