import { useMemo } from 'react';
import { motion } from 'framer-motion';
import SectionTitle from './SectionTitle';
import { useGithubRepos } from '../hooks/useGithubRepos';

export default function GitHubActivity() {
  const { repos, profile, loading, error } = useGithubRepos();

  const languageUsage = useMemo(() => {
    const counts = repos.reduce((acc, repo) => {
      if (!repo.language) return acc;
      acc[repo.language] = (acc[repo.language] || 0) + 1;
      return acc;
    }, {});
    return Object.entries(counts).sort((a, b) => b[1] - a[1]);
  }, [repos]);

  const maxCount = Math.max(...languageUsage.map(([, v]) => v), 1);

  return (
    <section id="github" className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
      <SectionTitle subtitle="GitHub" title="Activity & Insights" />
      <div className="grid gap-8 lg:grid-cols-[1.2fr,0.8fr]">

        <motion.div
          initial={{ opacity: 0, x: -32 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="glass-card rounded-[2rem] border-white/10 p-8 shadow-xl"
        >
          <h3 className="text-xl font-semibold text-slate-100">GitHub Snapshot</h3>
          {!loading && !error && profile ? (
            <div className="mt-6 space-y-4 text-slate-300">
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="flex items-center gap-4 rounded-3xl bg-slate-950/80 p-4"
              >
                <div className="h-16 w-16 overflow-hidden rounded-3xl bg-slate-800">
                  <img src={profile.avatar_url} alt={profile.login} className="h-full w-full object-cover" />
                </div>
                <div>
                  <p className="text-lg font-semibold text-slate-100">{profile.name || profile.login}</p>
                  <p className="text-sm text-slate-400">{profile.bio || 'Active contributor focused on engineering quality and polished design.'}</p>
                </div>
              </motion.div>
              <div className="grid gap-4 sm:grid-cols-3">
                {[
                  { value: profile.public_repos, label: 'Repositories' },
                  { value: profile.followers, label: 'Followers' },
                  { value: languageUsage.length, label: 'Languages used' },
                ].map((stat, i) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, scale: 0.85 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.3 + i * 0.1, type: 'spring', stiffness: 180 }}
                    whileHover={{ scale: 1.05, transition: { duration: 0.15 } }}
                    className="rounded-3xl bg-slate-950/80 p-5 text-center"
                  >
                    <p className="text-3xl font-semibold text-slate-100">{stat.value}</p>
                    <p className="mt-2 text-sm text-slate-400">{stat.label}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          ) : (
            <p className="mt-5 text-sm text-slate-400">Loading GitHub insights...</p>
          )}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 32 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="glass-card rounded-[2rem] border-white/10 p-8 shadow-xl"
        >
          <h3 className="text-xl font-semibold text-slate-100">Contribution-style breakdown</h3>
          <div className="mt-6 space-y-4">
            {loading && !error ? (
              <p className="text-slate-400">Fetching language usage data...</p>
            ) : error ? (
              <p className="text-red-300">{error}</p>
            ) : (
              languageUsage.map(([language, count], i) => {
                const width = Math.min((count / maxCount) * 100, 100);
                return (
                  <motion.div
                    key={language}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.07 }}
                    className="space-y-2"
                  >
                    <div className="flex items-center justify-between text-sm text-slate-200">
                      <span>{language}</span>
                      <span>{count} repos</span>
                    </div>
                    <div className="h-2 rounded-full bg-slate-900/80">
                      <motion.div
                        className="h-full rounded-full bg-gradient-to-r from-sky-400 via-fuchsia-500 to-cyan-300"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${width}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.9, delay: i * 0.07 + 0.2, ease: 'easeOut' }}
                      />
                    </div>
                  </motion.div>
                );
              })
            )}
          </div>
        </motion.div>

      </div>
    </section>
  );
}
