import axios from 'axios';

const githubUser = 'InderX84';

export async function fetchGithubRepos() {
  const response = await axios.get(`https://api.github.com/users/${githubUser}/repos?per_page=100&sort=updated`);
  return response.data;
}

export async function fetchGithubProfile() {
  const response = await axios.get(`https://api.github.com/users/${githubUser}`);
  return response.data;
}
