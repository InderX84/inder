import { motion } from 'framer-motion';
import SectionTitle from './SectionTitle';
import { skillGroups } from '../data/skills';

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

const item = {
  hidden: { opacity: 0, x: -16 },
  show: { opacity: 1, x: 0, transition: { duration: 0.4 } },
};

export default function SkillsSection() {
  return (
    <section id="skills" className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
      <SectionTitle subtitle="Skills" title="Technical Proficiency" />
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        {skillGroups.map((group, index) => (
          <motion.div
            key={group.category}
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: index * 0.12 }}
            whileHover={{ y: -4, transition: { duration: 0.2 } }}
            className="glass-card rounded-[2rem] border-white/10 p-6"
          >
            <h3 className="text-xl font-semibold text-slate-100">{group.category}</h3>
            <motion.div
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="mt-5 space-y-3"
            >
              {group.items.map((skill) => (
                <motion.div
                  key={skill}
                  variants={item}
                  whileHover={{ x: 6, borderColor: 'rgba(125,211,252,0.5)', transition: { duration: 0.15 } }}
                  className="rounded-2xl border border-white/10 bg-slate-950/70 px-4 py-3 text-slate-200 cursor-default"
                >
                  {skill}
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
