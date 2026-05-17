import { useEffect, useState } from 'react';
import { fetchGithubProfile, fetchGithubRepos } from '../services/githubService';

export function useGithubRepos() {
  const [repos, setRepos] = useState([]);
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    let mounted = true;

    async function loadData() {
      setLoading(true);
      try {
        const [repoData, userProfile] = await Promise.all([fetchGithubRepos(), fetchGithubProfile()]);
        if (!mounted) return;
        setRepos(repoData);
        setProfile(userProfile);
      } catch (err) {
        if (!mounted) return;
        setError('Unable to fetch GitHub data. Please verify the username in the service configuration.');
      } finally {
        if (mounted) setLoading(false);
      }
    }

    loadData();
    return () => {
      mounted = false;
    };
  }, []);

  return { repos, profile, loading, error };
}
