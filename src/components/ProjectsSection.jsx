import { useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiStar, FiGitBranch, FiGlobe } from 'react-icons/fi';
import SectionTitle from './SectionTitle';
import ProjectCard from './ProjectCard';
import SkeletonCard from './SkeletonCard';
import { useGithubRepos } from '../hooks/useGithubRepos';
import { formatDate } from '../utils/formatDate';

const sortOptions = [
  { value: 'updated', label: 'Latest update' },
  { value: 'stars', label: 'Most stars' },
  { value: 'name', label: 'Name' },
];

const PAGE_SIZE = 6;

function FeaturedRepo({ repo }) {
  if (!repo) return null;
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="mb-8 glass-card rounded-[2rem] border-sky-400/20 p-6"
    >
      <div className="flex items-center gap-2 mb-3">
        <FiStar size={15} className="text-amber-300" />
        <span className="text-xs uppercase tracking-widest text-amber-300">Most Starred</span>
      </div>
      <div className="flex flex-wrap items-start justify-between gap-4">
        <div className="flex-1 min-w-0">
          <h3 className="text-xl font-bold text-slate-100">{repo.name}</h3>
          <p className="mt-1 text-sm text-slate-400">{repo.description || 'No description provided.'}</p>
          <div className="mt-3 flex flex-wrap gap-2 text-xs text-slate-400">
            <span className="flex items-center gap-1"><FiStar size={12} className="text-amber-300" />{repo.stargazers_count} stars</span>
            <span className="flex items-center gap-1"><FiGitBranch size={12} />{repo.forks_count} forks</span>
            <span>Updated {formatDate(repo.updated_at)}</span>
          </div>
        </div>
        <div className="flex gap-2 flex-shrink-0">
          <a href={repo.html_url} target="_blank" rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-300 hover:text-sky-300 transition">
            <FiGithub size={14} /> Repo
          </a>
          {repo.homepage && (
            <a href={repo.homepage} target="_blank" rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-2xl bg-gradient-to-r from-sky-500 to-cyan-400 px-4 py-2 text-sm font-semibold text-slate-950 hover:opacity-90 transition">
              <FiGlobe size={14} /> Live
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}

export default function ProjectsSection() {
  const { repos, loading, error } = useGithubRepos();
  const [search, setSearch] = useState('');
  const [language, setLanguage] = useState('All');
  const [sort, setSort] = useState('updated');
  const [currentPage, setCurrentPage] = useState(1);

  const mostStarred = useMemo(() => {
    if (!repos.length) return null;
    return [...repos].sort((a, b) => b.stargazers_count - a.stargazers_count)[0];
  }, [repos]);

  const languageOptions = useMemo(() => {
    const languages = repos.map((repo) => repo.language).filter(Boolean);
    return ['All', ...Array.from(new Set(languages))];
  }, [repos]);

  const filteredRepos = useMemo(() => {
    return repos
      .filter((repo) => {
        const matchesSearch = [repo.name, repo.description].join(' ').toLowerCase().includes(search.toLowerCase());
        const matchesLanguage = language === 'All' || repo.language === language;
        return matchesSearch && matchesLanguage;
      })
      .sort((a, b) => {
        if (sort === 'stars') return b.stargazers_count - a.stargazers_count;
        if (sort === 'name') return a.name.localeCompare(b.name);
        return new Date(b.updated_at) - new Date(a.updated_at);
      });
  }, [repos, language, search, sort]);

  const totalPages = Math.max(1, Math.ceil(filteredRepos.length / PAGE_SIZE));
  const pageRepos = filteredRepos.slice((currentPage - 1) * PAGE_SIZE, currentPage * PAGE_SIZE);

  const handleSearch = (value) => {
    setSearch(value);
    setCurrentPage(1);
  };

  const handleLanguage = (value) => {
    setLanguage(value);
    setCurrentPage(1);
  };

  const handleSort = (value) => {
    setSort(value);
    setCurrentPage(1);
  };

  return (
    <section id="projects" className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
      <SectionTitle subtitle="Projects" title="Explore my GitHub work" />
      <FeaturedRepo repo={mostStarred} />
      <div className="glass-card rounded-[2rem] border-white/10 p-6 shadow-xl">
        <div className="grid gap-4 lg:grid-cols-[1.5fr,1fr]">
          <input
            type="search"
            value={search}
            onChange={(e) => handleSearch(e.target.value)}
            placeholder="Search projects"
            className="rounded-3xl border border-white/10 bg-slate-950/80 px-5 py-4 text-slate-100 outline-none transition focus:border-sky-400/60"
          />
          <div className="grid gap-4 sm:grid-cols-2">
            <select
              value={language}
              onChange={(e) => handleLanguage(e.target.value)}
              className="rounded-3xl border border-white/10 bg-slate-950/80 px-5 py-4 text-slate-100 outline-none transition focus:border-sky-400/60"
            >
              {languageOptions.map((lang) => (
                <option key={lang} value={lang} className="bg-slate-950 text-slate-100">
                  {lang}
                </option>
              ))}
            </select>
            <select
              value={sort}
              onChange={(e) => handleSort(e.target.value)}
              className="rounded-3xl border border-white/10 bg-slate-950/80 px-5 py-4 text-slate-100 outline-none transition focus:border-sky-400/60"
            >
              {sortOptions.map((option) => (
                <option key={option.value} value={option.value} className="bg-slate-950 text-slate-100">
                  {option.label}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      <div className="mt-8 grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
        {loading && Array.from({ length: PAGE_SIZE }).map((_, idx) => <SkeletonCard key={idx} />)}
        {!loading && error && (
          <div className="rounded-2xl border border-red-500/20 bg-red-500/5 p-8 text-slate-200">
            <p className="font-medium text-red-200">{error}</p>
            <p className="mt-2 text-sm text-slate-400">The username is configured in <span className="font-mono text-slate-100">src/services/githubService.js</span>.</p>
          </div>
        )}
        {!loading && !error && filteredRepos.length === 0 && (
          <div className="rounded-2xl border border-white/10 bg-white/5 p-8 text-slate-300">No projects matched your current search or filters.</div>
        )}
        {!loading && !error && pageRepos.map((repo, i) => <ProjectCard key={repo.id} repo={repo} index={i} />)}
      </div>

      {!loading && !error && filteredRepos.length > PAGE_SIZE && (
        <div className="mt-10 flex flex-wrap items-center justify-center gap-3 text-sm text-slate-300">
          <button
            onClick={() => setCurrentPage((current) => Math.max(current - 1, 1))}
            disabled={currentPage === 1}
            className="rounded-full border border-white/10 bg-slate-950/80 px-4 py-2 transition hover:bg-slate-900 disabled:cursor-not-allowed disabled:opacity-50"
          >
            Previous
          </button>
          {Array.from({ length: totalPages }).map((_, index) => {
            const page = index + 1;
            return (
              <button
                key={page}
                onClick={() => setCurrentPage(page)}
                className={`rounded-full border px-4 py-2 transition ${currentPage === page ? 'border-sky-300 bg-sky-400/15 text-sky-200' : 'border-white/10 bg-slate-950/80 text-slate-300 hover:border-sky-300 hover:text-slate-100'}`}
              >
                {page}
              </button>
            );
          })}
          <button
            onClick={() => setCurrentPage((current) => Math.min(current + 1, totalPages))}
            disabled={currentPage === totalPages}
            className="rounded-full border border-white/10 bg-slate-950/80 px-4 py-2 transition hover:bg-slate-900 disabled:cursor-not-allowed disabled:opacity-50"
          >
            Next
          </button>
        </div>
      )}
      {!loading && !error && (
        <div className="mt-8 text-center">
          <a
            href="https://github.com/InderX84"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-6 py-3 text-sm text-slate-300 transition hover:border-sky-400/40 hover:text-sky-300"
          >
            <FiGithub size={16} /> View all on GitHub
          </a>
        </div>
      )}
    </section>
  );
}
