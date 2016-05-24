import RepoEntity from '../api/repoEntity';

export default (state: Array<RepoEntity> = [], action) => {
  switch (action.type){
    case 'FETCH_REPOS_COMPLETED':
      return [...action.repos];

    default:
      return state;
  }
}
