import MemberEntity from "../api/memberEntity";

// Just to show how combine reducers work, we have
// divided into two reducers member load + member load/update/delete
export default (state : Array<MemberEntity> = [], action) => {
  switch (action.type) {
    case 'MEMBERS_FETCH_COMPLETED':

      return [...action.members];

    default:
      return state;
  }

};
