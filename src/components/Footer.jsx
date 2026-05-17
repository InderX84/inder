import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-slate-950/80 py-12">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 px-6 text-slate-400 sm:flex-row sm:items-center sm:justify-between lg:px-8">
        <p>Designed & Developed by Narinder Singh</p>
        <div className="flex flex-wrap items-center gap-4 text-slate-300">
          <a href="mailto:narinder@example.com" className="inline-flex items-center gap-2 hover:text-sky-300"><FiMail /> Email</a>
          <a href="https://www.linkedin.com" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 hover:text-sky-300"><FiLinkedin /> LinkedIn</a>
          <a href="https://github.com/InderX84" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 hover:text-sky-300"><FiGithub /> GitHub</a>
        </div>
      </div>
    </footer>
  );
}
