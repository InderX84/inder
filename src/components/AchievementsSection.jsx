import { motion } from 'framer-motion';
import SectionTitle from './SectionTitle';
import { achievements } from '../data/achievements';

export default function AchievementsSection() {
  return (
    <section id="achievements" className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
      <SectionTitle subtitle="Achievements" title="Recognition & Certificates" />
      <div className="grid gap-6 md:grid-cols-3">
        {achievements.map((achievement, index) => (
          <motion.article
            key={achievement.id}
            initial={{ opacity: 0, scale: 0.92, y: 24 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: index * 0.12 }}
            whileHover={{ y: -6, scale: 1.02, transition: { duration: 0.2 } }}
            className="glass-card rounded-[2rem] border-white/10 p-7"
          >
            <motion.div
              initial={{ scale: 0.5, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.12 + 0.2, type: 'spring', stiffness: 200 }}
              className="mb-4 inline-block rounded-3xl bg-slate-900/80 p-4 text-2xl"
            >
              🏆
            </motion.div>
            <h3 className="text-xl font-semibold text-slate-100">{achievement.title}</h3>
            <p className="mt-4 text-slate-300">{achievement.description}</p>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
