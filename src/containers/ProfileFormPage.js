import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as profileActions from '../actions/profileFormActions';
import ProfileForm from '../components/ProfileForm';
import {authorsFormattedForDropdown} from '../selectors/selectors'; //eslint-disable-line import/no-named-as-default
import toastr from 'toastr'; //eslint-disable-line import/no-named-as-default
import PageBase from '../components/PageBase';

export class ProfileFormPage extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
          profile: Object.assign({}, this.props.profile),
          errors:{},
          saving: false
        };

        this.updateProfileState = this.updateProfileState.bind(this);
        this.saveProfile = this.saveProfile.bind(this);
    }

    componentWillReceiveProps(nextProps){
      if(this.props.profile.id != nextProps.profile.id){
        this.setState({profile: Object.assign({}, nextProps.profile)});
      }
    }

    updateProfileState(event){
      const field = event.target.name;
      let profile = this.state.profile;
      profile[field] = event.target.value;
      return this.setState({profile:profile});
    }

    profileFormIsValid(){
      let formIsValid = true;
      let errors = {};

      if(this.state.profile.title.length < 5){
        errors.title = 'Title must be at least 5 characters.';
        formIsValid = false;
      }

      this.setState({errors: errors});
      return formIsValid;
  }

    saveProfile(event){
      event.preventDefault();

      if(!this.profileFormIsValid()){
        return;
      }

      this.setState({saving: true});

      this.props.actions.saveProfile(this.state.profile)
        .then(() => this.redirect())
        .catch(error => {
          toastr.error(error);
          this.setState({saving: false});
        });
    }

    redirect(){
      this.setState({saving: false});
      toastr.success('Profile Saved');
      this.context.router.push('/profile');
    }
    
  render() {
        return (
        <PageBase title="My Profile" navigation="Application / Profile">
          <ProfileForm onSubmit={handleSubmit}/>          
        </PageBase>
        );
    }
}

const handleSubmit = (values) => {
    // Do something with the form values
    console.log(values);
  };
  

const showResults = (values) =>
  new Promise(resolve => {
    setTimeout(() => {  // simulate server latency
      window.alert(`You submitted:\n\n${JSON.stringify(values, null, 2)}`)
      resolve()
    }, 500)
  });

ProfileFormPage.propTypes = {
  profile: PropTypes.object.isRequired  
};

ProfileFormPage.contextTypes = {
  router: PropTypes.object
};

function getProfileById(profiles, id){
  const profile = profiles.filter(profile => profile.id==id);
  if(profile) return profile[0];
  return null;
}

function mapStateToProps(state, ownProps) {
  const profileId = ownProps.params.id;

  let profile = {id: '', watchHref: '', title: '', authorId: '', length: '', category: ''};
  
  if(profileId && state.profiles.length > 0){
    profile = getProfileById(state.profiles, profileId);
  }

  return {
    profile: profile
  };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(profileActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(ProfileFormPage);
