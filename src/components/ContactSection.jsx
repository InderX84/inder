import { motion } from 'framer-motion';
import { FiMail } from 'react-icons/fi';
import SectionTitle from './SectionTitle';

export default function ContactSection() {
  return (
    <section id="contact" className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
      <SectionTitle subtitle="Contact" title="Let's build something together" />
      <div className="grid gap-8 lg:grid-cols-[0.95fr,1.05fr]">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7 }}
          className="glass-card rounded-[2rem] border-white/10 p-8"
        >
          <h3 className="text-xl font-semibold text-slate-100">Contact me</h3>
          <p className="mt-4 text-slate-300">I'm available for internships, entry-level opportunities, and collaborative software projects. Let's connect and bring thoughtful products to life.</p>
          <div className="mt-8 space-y-4 text-slate-400">
            <div className="rounded-3xl border border-white/10 bg-slate-950/80 p-4">
              <p className="text-sm uppercase tracking-[0.24em] text-slate-500">Email</p>
              <a href="mailto:singhnarinder14720@gmail.com" className="mt-2 inline-block text-slate-200 hover:text-sky-300">singhnarinder14720@gmail.com</a>
            </div>
            <div className="rounded-3xl border border-white/10 bg-slate-950/80 p-4">
              <p className="text-sm uppercase tracking-[0.24em] text-slate-500">LinkedIn</p>
              <a href="https://www.linkedin.com" target="_blank" rel="noreferrer" className="mt-2 inline-block text-sky-300">linkedin.com/in/narinder</a>
            </div>
            <div className="rounded-3xl border border-white/10 bg-slate-950/80 p-4">
              <p className="text-sm uppercase tracking-[0.24em] text-slate-500">GitHub</p>
              <a href="https://github.com/InderX84" target="_blank" rel="noreferrer" className="mt-2 inline-block text-sky-300">github.com/InderX84</a>
            </div>
          </div>
        </motion.div>
        <motion.form
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="glass-card rounded-[2rem] border-white/10 p-8"
          onSubmit={(e) => e.preventDefault()}
        >
          <div className="grid gap-5">
            <label className="space-y-2 text-sm text-slate-300">
              <span>Name</span>
              <input className="w-full rounded-3xl border border-white/10 bg-slate-950/80 px-4 py-3 text-slate-100 outline-none focus:border-sky-400/60" placeholder="Your full name" />
            </label>
            <label className="space-y-2 text-sm text-slate-300">
              <span>Email</span>
              <input className="w-full rounded-3xl border border-white/10 bg-slate-950/80 px-4 py-3 text-slate-100 outline-none focus:border-sky-400/60" placeholder="you@example.com" />
            </label>
            <label className="space-y-2 text-sm text-slate-300">
              <span>Message</span>
              <textarea rows="6" className="w-full rounded-[1.5rem] border border-white/10 bg-slate-950/80 px-4 py-3 text-slate-100 outline-none focus:border-sky-400/60" placeholder="Tell me about your next idea." />
            </label>
            <button type="submit" className="inline-flex items-center justify-center rounded-3xl bg-sky-400 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:-translate-y-0.5">
              Send message
            </button>
          </div>
        </motion.form>
      </div>
      <div className="mt-8 flex items-center gap-4 text-slate-400">
        <FiMail />
        <span>singhnarinder14720@gmail.com</span>
      </div>
    </section>
  );
}
