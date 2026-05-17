import { motion } from 'framer-motion';
import SectionTitle from './SectionTitle';
import { learningItems } from '../data/learning';

export default function LearningSection() {
  return (
    <section id="learning" className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
      <SectionTitle subtitle="Learning" title="What I'm Currently Exploring" />
      <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
        {learningItems.map((item, index) => (
          <motion.div
            key={item}
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: index * 0.15 }}
            whileHover={{ y: -6, scale: 1.02, transition: { duration: 0.2 } }}
            className="glass-card relative overflow-hidden rounded-[2rem] border-white/10 p-8"
          >
            <motion.div
              className="absolute -right-6 -top-6 h-24 w-24 rounded-full bg-sky-400/10 blur-2xl"
              animate={{ scale: [1, 1.3, 1], opacity: [0.4, 0.7, 0.4] }}
              transition={{ duration: 4, repeat: Infinity, delay: index * 0.5 }}
            />
            <h3 className="relative text-xl font-semibold text-slate-100">{item}</h3>
            <p className="relative mt-4 text-slate-300">Growing expertise through hands-on learning, guided study, and real-world project experimentation.</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
