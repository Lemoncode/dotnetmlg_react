import RepoEntity from '../api/repoEntity';

const fetchReposCompleted = (repos: Array<RepoEntity>) => {
  return {
    type: 'FETCH_REPOS_COMPLETED',
    repos: repos
  };
};

export default fetchReposCompleted;
