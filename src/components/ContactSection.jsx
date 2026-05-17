import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { motion } from 'framer-motion';
import { FiSend, FiCheck, FiAlertCircle } from 'react-icons/fi';
import SectionTitle from './SectionTitle';
import { socials } from '../data/socials';

// ── Replace these with your EmailJS credentials ──────────────────────────────
const SERVICE_ID  = 'service_r8k50ky';
const TEMPLATE_ID = 'YOUR_TEMPLATE_ID';
const PUBLIC_KEY  = 'YOUR_PUBLIC_KEY';
// ─────────────────────────────────────────────────────────────────────────────

const displayHref = (href) => href.replace('mailto:', '');

export default function ContactSection() {
  const formRef = useRef();
  const [status, setStatus] = useState('idle'); // idle | sending | success | error

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');
    try {
      await emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, PUBLIC_KEY);
      setStatus('success');
      formRef.current.reset();
    } catch {
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
      <SectionTitle subtitle="Contact" title="Let's build something together" />
      <div className="grid gap-8 lg:grid-cols-[0.95fr,1.05fr]">

        {/* left — info */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7 }}
          className="glass-card rounded-[2rem] border-white/10 p-8"
        >
          <h3 className="text-xl font-semibold text-slate-100">Contact me</h3>
          <p className="mt-4 text-slate-300">
            I'm available for internships, entry-level opportunities, and collaborative software
            projects. Let's connect and bring thoughtful products to life.
          </p>
          <div className="mt-8 space-y-4">
            {socials.map((s) => (
              <div key={s.label} className="rounded-3xl border border-white/10 bg-slate-950/80 p-4">
                <p className="text-sm uppercase tracking-[0.24em] text-slate-500">{s.label}</p>
                <a
                  href={s.href}
                  target={s.href.startsWith('mailto') ? undefined : '_blank'}
                  rel="noreferrer"
                  className="mt-2 inline-block text-slate-200 hover:text-sky-300 transition"
                >
                  {displayHref(s.href)}
                </a>
              </div>
            ))}
          </div>
        </motion.div>

        {/* right — form */}
        <motion.form
          ref={formRef}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="glass-card rounded-[2rem] border-white/10 p-8"
          onSubmit={handleSubmit}
        >
          <div className="grid gap-5">
            <label className="space-y-2 text-sm text-slate-300">
              <span>Name</span>
              <input
                name="from_name"
                required
                className="w-full rounded-3xl border border-white/10 bg-slate-950/80 px-4 py-3 text-slate-100 outline-none transition focus:border-sky-400/60"
                placeholder="Your full name"
              />
            </label>
            <label className="space-y-2 text-sm text-slate-300">
              <span>Email</span>
              <input
                name="reply_to"
                type="email"
                required
                className="w-full rounded-3xl border border-white/10 bg-slate-950/80 px-4 py-3 text-slate-100 outline-none transition focus:border-sky-400/60"
                placeholder="you@example.com"
              />
            </label>
            <label className="space-y-2 text-sm text-slate-300">
              <span>Message</span>
              <textarea
                name="message"
                rows="5"
                required
                className="w-full rounded-[1.5rem] border border-white/10 bg-slate-950/80 px-4 py-3 text-slate-100 outline-none transition focus:border-sky-400/60"
                placeholder="Tell me about your next idea."
              />
            </label>

            {/* status messages */}
            {status === 'success' && (
              <div className="flex items-center gap-2 rounded-2xl border border-emerald-400/30 bg-emerald-400/10 px-4 py-3 text-sm text-emerald-300">
                <FiCheck /> Message sent! I'll get back to you soon.
              </div>
            )}
            {status === 'error' && (
              <div className="flex items-center gap-2 rounded-2xl border border-red-400/30 bg-red-400/10 px-4 py-3 text-sm text-red-300">
                <FiAlertCircle /> Something went wrong. Please try again.
              </div>
            )}

            <button
              type="submit"
              disabled={status === 'sending'}
              className="inline-flex items-center justify-center gap-2 rounded-3xl bg-gradient-to-r from-sky-400 to-cyan-400 px-6 py-3 text-sm font-semibold text-slate-950 shadow-lg shadow-sky-400/20 transition hover:-translate-y-0.5 disabled:opacity-60 disabled:cursor-not-allowed"
            >
              <FiSend size={15} />
              {status === 'sending' ? 'Sending…' : 'Send Message'}
            </button>
          </div>
        </motion.form>

      </div>
    </section>
  );
}
