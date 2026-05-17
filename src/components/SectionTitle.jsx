import { motion } from 'framer-motion';

export default function SectionTitle({ subtitle, title }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.6 }}
      className="mb-8 max-w-2xl"
    >
      <p className="text-sm uppercase tracking-[0.28em] text-sky-400/80">{subtitle}</p>
      <h2 className="mt-3 text-3xl md:text-4xl font-semibold text-slate-100">{title}</h2>
    </motion.div>
  );
}
