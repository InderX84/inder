import { motion } from 'framer-motion';
import { FiStar, FiGitBranch, FiGithub, FiGlobe } from 'react-icons/fi';
import { formatDate } from '../utils/formatDate';

const langColors = {
  JavaScript: '#F7DF1E',
  TypeScript: '#3178C6',
  Python: '#3776AB',
  Java: '#ED8B00',
  'C++': '#00599C',
  C: '#A8B9CC',
  HTML: '#E34F26',
  CSS: '#1572B6',
};

export default function ProjectCard({ repo, index = 0 }) {
  const dot = langColors[repo.language] ?? '#94a3b8';

  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      whileHover={{ y: -6, transition: { duration: 0.2 } }}
      className="glass-card flex flex-col justify-between rounded-[2rem] border-white/10 p-6 hover:border-sky-400/30 transition"
    >
      {/* top */}
      <div>
        {/* language badge + stars + forks */}
        <div className="flex items-center justify-between mb-4">
          <span
            className="flex items-center gap-1.5 rounded-full border border-white/10 bg-slate-900/80 px-3 py-1 text-xs font-medium"
            style={{ color: dot }}
          >
            <span className="h-2 w-2 rounded-full" style={{ backgroundColor: dot }} />
            {repo.language || 'Other'}
          </span>
          <div className="flex items-center gap-3 text-xs text-slate-400">
            <span className="flex items-center gap-1">
              <FiStar size={13} className="text-amber-300" />
              {repo.stargazers_count}
            </span>
            <span className="flex items-center gap-1">
              <FiGitBranch size={13} />
              {repo.forks_count}
            </span>
          </div>
        </div>

        {/* name */}
        <h3 className="text-lg font-semibold text-slate-100 leading-snug">{repo.name}</h3>

        {/* description */}
        <p className="mt-2 text-sm leading-6 text-slate-400 line-clamp-2">
          {repo.description || 'No description provided.'}
        </p>

        {/* topics */}
        {repo.topics?.length > 0 && (
          <div className="mt-3 flex flex-wrap gap-1.5">
            {repo.topics.slice(0, 4).map((topic) => (
              <span
                key={topic}
                className="rounded-full border border-sky-400/20 bg-sky-400/10 px-2.5 py-0.5 text-xs text-sky-300"
              >
                {topic}
              </span>
            ))}
          </div>
        )}
      </div>

      {/* bottom */}
      <div className="mt-5">
        <p className="mb-3 text-xs text-slate-500">Updated {formatDate(repo.updated_at)}</p>
        <div className="flex gap-2">
          <a
            href={repo.html_url}
            target="_blank"
            rel="noreferrer"
            className="flex flex-1 items-center justify-center gap-2 rounded-2xl border border-white/10 bg-white/5 py-2.5 text-sm text-slate-300 transition hover:border-sky-400/40 hover:text-sky-300"
          >
            <FiGithub size={15} /> GitHub
          </a>
          {repo.homepage && (
            <a
              href={repo.homepage}
              target="_blank"
              rel="noreferrer"
              className="flex flex-1 items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-sky-500 to-cyan-400 py-2.5 text-sm font-semibold text-slate-950 shadow-md shadow-sky-400/20 transition hover:opacity-90"
            >
              <FiGlobe size={15} /> Live
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}
