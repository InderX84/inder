import { useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import SectionTitle from './SectionTitle';
import ProjectCard from './ProjectCard';
import SkeletonCard from './SkeletonCard';
import { useGithubRepos } from '../hooks/useGithubRepos';

const sortOptions = [
  { value: 'updated', label: 'Latest update' },
  { value: 'stars', label: 'Most stars' },
  { value: 'name', label: 'Name' },
];

const PAGE_SIZE = 6;

export default function ProjectsSection() {
  const { repos, loading, error } = useGithubRepos();
  const [search, setSearch] = useState('');
  const [language, setLanguage] = useState('All');
  const [sort, setSort] = useState('updated');
  const [currentPage, setCurrentPage] = useState(1);

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
    </section>
  );
}
