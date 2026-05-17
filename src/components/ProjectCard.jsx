import { motion } from 'framer-motion';
import { FiExternalLink, FiStar } from 'react-icons/fi';
import { formatDate } from '../utils/formatDate';

export default function ProjectCard({ repo, index = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.55, delay: index * 0.08 }}
      whileHover={{ y: -8, scale: 1.02, transition: { duration: 0.2 } }}
      className="glass-card flex flex-col justify-between rounded-[2rem] border-white/10 p-6 transition"
    >
      <div>
        <div className="mb-4 flex items-center justify-between">
          <span className="rounded-2xl bg-slate-900/80 px-3 py-1 text-xs uppercase tracking-[0.24em] text-slate-300">{repo.language || 'Other'}</span>
          <motion.span
            whileHover={{ scale: 1.2 }}
            className="inline-flex items-center gap-1 text-sm text-amber-300"
          >
            <FiStar /> {repo.stargazers_count}
          </motion.span>
        </div>
        <h3 className="text-xl font-semibold text-slate-100">{repo.name}</h3>
        <p className="mt-4 text-sm leading-6 text-slate-300">{repo.description || 'A polished project demonstrating modern frontend development and engineering focus.'}</p>
      </div>
      <div className="mt-6 flex flex-wrap items-center justify-between gap-3 text-xs text-slate-400">
        <span>Updated {formatDate(repo.updated_at)}</span>
        <motion.a
          href={repo.html_url}
          target="_blank"
          rel="noreferrer"
          whileHover={{ x: 4 }}
          className="inline-flex items-center gap-2 font-medium text-sky-300 hover:text-sky-200"
        >
          View repo <FiExternalLink />
        </motion.a>
      </div>
    </motion.div>
  );
}
