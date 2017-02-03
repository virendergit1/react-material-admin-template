import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as communityActions from '../actions/communityFormActions';
import CommunityForm from '../components/NewCommunityForm';
import toastr from 'toastr'; //eslint-disable-line import/no-named-as-default
import PageBase from '../components/PageBase';
import Snackbar from 'material-ui/Snackbar';

export class NewCommunityFormPage extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
          community: Object.assign({}, this.props.community),
          errors:{},
          saving: false,
          openSnackBar: false,
        };

        this.updateCommunityState = this.updateCommunityState.bind(this);
        this.saveCommunity = this.saveCommunity.bind(this);
    }

    componentWillReceiveProps(nextProps){
      if(this.props.community.accountNumber != nextProps.community.accountNumber){
        this.setState({community: Object.assign({}, nextProps.community)});
      }
    }

    updateCommunityState(event){
      const field = event.target.name;
      let community = this.state.community;
      community[field] = event.target.value;
      return this.setState({community:community});
    }

    communityFormIsValid(){
      let formIsValid = true;
      let errors = {};

      if(this.state.community.title.length < 5){
        errors.title = 'Title must be at least 5 characters.';
        formIsValid = false;
      }

      this.setState({errors: errors});
      return formIsValid;
  }

    saveCommunity(values){
      this.setState({saving: true});
      this.setState(this.state.community=values);
      this.props.actions.saveCommunity(this.state.community)
        .then(() => this.redirect())
        .catch(error => {
          toastr.error(error);
          this.setState({saving: false});
        });
    }

    redirect(){
      this.setState({saving: false});
      this.setState({openSnackBar: true});
      console.log('Community Saved');
      //this.context.router.push('/siteAdminHome/newcommunity');
    }
    
  render() {
        return (
        <div><PageBase title="Register a new Community" navigation="Application / New Community">
          <CommunityForm onSubmit={this.saveCommunity}/>          
        </PageBase>
        <Snackbar open={this.state.openSnackBar} message="Community is created successfully" autoHideDuration={4000} onRequestClose={this.handleRequestClose}/>
        </div>);
    }
}

const showResults = (values) =>
  new Promise(resolve => {
    setTimeout(() => {  // simulate server latency
      window.alert(`You submitted:\n\n${JSON.stringify(values, null, 2)}`);
      resolve();
    }, 500);
  });

NewCommunityFormPage.propTypes = {
  community: PropTypes.object.isRequired
};

NewCommunityFormPage.contextTypes = {
  router: PropTypes.object
};

function getCommunityById(communities, accountNumber){
  const community = communities.filter(community => community.accountNumber==accountNumber);
  if(community) return community[0];
  return null;
}

function mapStateToProps(state, ownProps) {
  const communityId = ownProps.params.accountNumber;

  let community = {name: '', type: '', accountNumber: '', addressLine1: '', addressLine2: '', city: '', state: '', country: '', zip: '', 
      contacts: [{ name: '', phone: '', email: ''}], aboutCommunity: ''};
  
  if(communityId && state.communities.length > 0){
    community = getCommunityById(state.communities, communityId);
  }

  return {
    community: community
  };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(communityActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(NewCommunityFormPage);
