import { useMemo } from 'react';
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

  return (
    <section id="github" className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
      <SectionTitle subtitle="GitHub" title="Activity & Insights" />
      <div className="grid gap-8 lg:grid-cols-[1.2fr,0.8fr]">
        <div className="glass-card rounded-[2rem] border-white/10 p-8 shadow-xl">
          <h3 className="text-xl font-semibold text-slate-100">GitHub Snapshot</h3>
          {!loading && !error && profile ? (
            <div className="mt-6 space-y-4 text-slate-300">
              <div className="flex items-center gap-4 rounded-3xl bg-slate-950/80 p-4">
                <div className="h-16 w-16 overflow-hidden rounded-3xl bg-slate-800">
                  <img src={profile.avatar_url} alt={profile.login} className="h-full w-full object-cover" />
                </div>
                <div>
                  <p className="text-lg font-semibold text-slate-100">{profile.name || profile.login}</p>
                  <p className="text-sm text-slate-400">{profile.bio || 'Active contributor focused on engineering quality and polished design.'}</p>
                </div>
              </div>
              <div className="grid gap-4 sm:grid-cols-3">
                <div className="rounded-3xl bg-slate-950/80 p-5 text-center">
                  <p className="text-3xl font-semibold text-slate-100">{profile.public_repos}</p>
                  <p className="mt-2 text-sm text-slate-400">Repositories</p>
                </div>
                <div className="rounded-3xl bg-slate-950/80 p-5 text-center">
                  <p className="text-3xl font-semibold text-slate-100">{profile.followers}</p>
                  <p className="mt-2 text-sm text-slate-400">Followers</p>
                </div>
                <div className="rounded-3xl bg-slate-950/80 p-5 text-center">
                  <p className="text-3xl font-semibold text-slate-100">{languageUsage.length}</p>
                  <p className="mt-2 text-sm text-slate-400">Languages used</p>
                </div>
              </div>
            </div>
          ) : (
            <p className="mt-5 text-sm text-slate-400">Loading GitHub insights...</p>
          )}
        </div>

        <div className="glass-card rounded-[2rem] border-white/10 p-8 shadow-xl">
          <h3 className="text-xl font-semibold text-slate-100">Contribution-style breakdown</h3>
          <div className="mt-6 space-y-4">
            {loading && !error ? (
              <p className="text-slate-400">Fetching language usage data...</p>
            ) : error ? (
              <p className="text-red-300">{error}</p>
            ) : (
              languageUsage.map(([language, count]) => {
                const width = Math.min((count / Math.max(...languageUsage.map(([, value]) => value))) * 100, 100);
                return (
                  <div key={language} className="space-y-2">
                    <div className="flex items-center justify-between text-sm text-slate-200">
                      <span>{language}</span>
                      <span>{count} repos</span>
                    </div>
                    <div className="h-2 rounded-full bg-slate-900/80">
                      <div className="h-full rounded-full bg-gradient-to-r from-sky-400 via-fuchsia-500 to-cyan-300" style={{ width: `${width}%` }} />
                    </div>
                  </div>
                );
              })
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
