import * as React from 'react';
import { connect } from 'react-redux';
import {Link} from 'react-router';
import MemberEntity from '../../api/memberEntity';
import MemberRow from './memberRow';
import fetchMembersRequest from '../../actions/fetchMembersRequest';
import fetchReposRequest from '../../actions/fetchReposRequest';
import RepoEntity from '../../api/repoEntity';
import MemberList from './memberList';
import RepoList from '../repos/repoList';

// Presentational

// extends React.Props<MembersPage>
interface Props extends React.Props<MembersPage>{
  members? : Array<any>;
  fetchMembersRequest? : () => void;

  repos? : Array<RepoEntity>
  fetchReposRequest? : () => void;
}

class MembersPage extends React.Component<Props, {}> {

   // Standard react lifecycle function:
   // https://facebook.github.io/react/docs/component-specs.html
   public componentDidMount() {
     this.props.fetchMembersRequest();
     this.props.fetchReposRequest();
   }

   public render() {
     if(!this.props.members || !this.props.repos)
        return (<div>No data</div>)


       return (
        <div className="row">
          <h2> Members Page</h2>
          <Link to="/member">New Member</Link>
          
          <MemberList members={this.props.members}/>
          <RepoList repos={this.props.repos}/>
        </div>
       );
  }
}

// Container

const mapStateToProps = (state) => {
    return {
      members: state.members,
      repos : state.repos
    }
}


const mapDispatchToProps = (dispatch) => {
  return {
    fetchMembersRequest: () => {return dispatch(fetchMembersRequest())},
    fetchReposRequest : () => {return dispatch(fetchReposRequest())}
  }
}

const ContainerMembersPage = connect(
                                   mapStateToProps
                                  ,mapDispatchToProps
                                )(MembersPage)


export default ContainerMembersPage;
