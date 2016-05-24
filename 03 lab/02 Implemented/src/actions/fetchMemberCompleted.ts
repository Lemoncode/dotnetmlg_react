
const fetchMemberCompleted = (members : any) => {
   return {
     type: 'MEMBERS_FETCH_COMPLETED'
     ,members: members
   }
 }

export default fetchMemberCompleted;
