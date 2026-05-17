import { motion } from 'framer-motion';
import SectionTitle from './SectionTitle';
import { educationTimeline } from '../data/education';

export default function EducationTimeline() {
  return (
    <section id="education" className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
      <SectionTitle subtitle="Education" title="Academic Timeline" />
      <div className="grid gap-8 lg:grid-cols-3">
        {educationTimeline.map((item, index) => (
          <motion.article
            key={item.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="glass-card rounded-[2rem] border-white/10 p-7"
          >
            <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-3xl bg-slate-900/80 text-2xl">
              {item.icon}
            </div>
            <h3 className="text-xl font-semibold text-slate-100">{item.institution}</h3>
            <p className="mt-2 text-slate-300">{item.title}</p>
            <ul className="mt-4 space-y-2 text-slate-400">
              {item.details.map((detail) => (
                <li key={detail}>• {detail}</li>
              ))}
            </ul>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
