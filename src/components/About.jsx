import { motion } from 'framer-motion';
import SectionTitle from './SectionTitle';

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
      <SectionTitle subtitle="About" title="Professional Summary" />
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.7 }}
        className="glass-card rounded-[2rem] border-white/10 p-8 shadow-xl"
      >
        <p className="leading-8 text-slate-300 md:text-lg">
          I am Narinder Singh, a B.Tech Computer Science Engineering graduate from Chitkara University with a CGPA of 8.0. I have a strong interest in software development, problem-solving, and emerging technologies. I completed my 10th from Government High School Upalheri with 90%, and completed my +2 in Non-Medical from Government Senior Secondary School Mohinder Ganj Rajpura (currently School of Eminence) with 77%. I continuously focus on improving my technical skills and building practical projects.
        </p>
      </motion.div>
    </section>
  );
}
