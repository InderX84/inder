import { motion } from 'framer-motion';
import SectionTitle from './SectionTitle';
import { skillGroups } from '../data/skills';

export default function SkillsSection() {
  return (
    <section id="skills" className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
      <SectionTitle subtitle="Skills" title="Technical Proficiency" />
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        {skillGroups.map((group, index) => (
          <motion.div
            key={group.category}
            initial={{ opacity: 0, y: 26 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.7, delay: index * 0.1 }}
            className="glass-card rounded-[2rem] border-white/10 p-6"
          >
            <h3 className="text-xl font-semibold text-slate-100">{group.category}</h3>
            <div className="mt-5 space-y-3">
              {group.items.map((skill) => (
                <div key={skill} className="rounded-2xl border border-white/10 bg-slate-950/70 px-4 py-3 text-slate-200 transition hover:border-sky-300/40 hover:bg-slate-900/85">
                  {skill}
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
