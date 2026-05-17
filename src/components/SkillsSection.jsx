import { motion } from 'framer-motion';
import SectionTitle from './SectionTitle';
import { pyramidRows } from '../data/skills';

export default function SkillsSection() {
  return (
    <section id="skills" className="mx-auto max-w-4xl px-6 py-20 lg:px-8">
      <SectionTitle subtitle="Skills" title="Technical Proficiency" />

      <div className="flex flex-col items-center gap-4 mt-10">
        {pyramidRows.map((row, rowIndex) => (
          <motion.div
            key={rowIndex}
            className="flex justify-center gap-4 flex-wrap"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.5, delay: rowIndex * 0.1 }}
          >
            {row.map((skill) => {
              const Icon = skill.icon;
              return (
                <motion.div
                  key={skill.name}
                  whileHover={{ y: -6, scale: 1.08 }}
                  transition={{ duration: 0.2 }}
                  className="glass-card flex flex-col items-center justify-center gap-2 rounded-2xl border border-white/10 px-5 py-4 w-24 cursor-default"
                >
                  <Icon size={36} color={skill.color} />
                  <span className="text-xs font-medium text-slate-300 text-center leading-tight">
                    {skill.name}
                  </span>
                </motion.div>
              );
            })}
          </motion.div>
        ))}
      </div>
    </section>
  );
}
