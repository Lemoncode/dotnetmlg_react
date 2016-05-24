import repoAPI from '../api/repoAPI';
import fetchReposCompleted from './fetchReposCompleted';

function loadRepos() {
    return dispatcher => {
      return repoAPI.getAllReposAsync().then(
        data => dispatcher(fetchReposCompleted(data))
      );
    }
}

export default loadRepos;
