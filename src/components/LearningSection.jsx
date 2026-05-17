import { motion } from 'framer-motion';
import SectionTitle from './SectionTitle';
import { learningItems } from '../data/learning';

export default function LearningSection() {
  return (
    <section id="learning" className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
      <SectionTitle subtitle="Learning" title="What I&apos;m Currently Exploring" />
      <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
        {learningItems.map((item, index) => (
          <motion.div
            key={item}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.7, delay: index * 0.1 }}
            className="glass-card rounded-[2rem] border-white/10 p-8"
          >
            <h3 className="text-xl font-semibold text-slate-100">{item}</h3>
            <p className="mt-4 text-slate-300">Growing expertise through hands-on learning, guided study, and real-world project experimentation.</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
