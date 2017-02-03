import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as visitActions from '../actions/visitFormActions';
import VisitForm from '../components/NewVisitForm';
import {authorsFormattedForDropdown} from '../selectors/selectors'; //eslint-disable-line import/no-named-as-default
import toastr from 'toastr'; //eslint-disable-line import/no-named-as-default
import PageBase from '../components/PageBase';

export class NewVisitFormPage extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
          visit: Object.assign({}, this.props.visit),
          errors:{},
          saving: false
        };

        this.updateVisitState = this.updateVisitState.bind(this);
        this.saveVisit = this.saveVisit.bind(this);
    }

    componentWillReceiveProps(nextProps){
      if(this.props.visit.id != nextProps.visit.id){
        this.setState({visit: Object.assign({}, nextProps.visit)});
      }
    }

    updateVisitState(event){
      const field = event.target.name;
      let visit = this.state.visit;
      visit[field] = event.target.value;
      return this.setState({visit:visit});
    }

    visitFormIsValid(){
      let formIsValid = true;
      let errors = {};

      if(this.state.visit.title.length < 5){
        errors.title = 'Title must be at least 5 characters.';
        formIsValid = false;
      }

      this.setState({errors: errors});
      return formIsValid;
  }

    saveVisit(event){
      event.preventDefault();

      if(!this.visitFormIsValid()){
        return;
      }

      this.setState({saving: true});

      this.props.actions.saveVisit(this.state.visit)
        .then(() => this.redirect())
        .catch(error => {
          toastr.error(error);
          this.setState({saving: false});
        });
    }

    redirect(){
      this.setState({saving: false});
      toastr.success('Visit Saved');
      this.context.router.push('/newvisit');
    }
    
  render() {
        return (
        <PageBase title="Register A New Visitor" navigation="Application / New Visitor">
          <VisitForm onSubmit={handleSubmit}/>          
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

NewVisitFormPage.propTypes = {
  visit: PropTypes.object.isRequired  
};

NewVisitFormPage.contextTypes = {
  router: PropTypes.object
};

function getVisitById(visits, id){
  const visit = visits.filter(visit => visit.id==id);
  if(visit) return visit[0];
  return null;
}

function mapStateToProps(state, ownProps) {
  const visitId = ownProps.params.id;

  let visit = {id: '', watchHref: '', title: '', authorId: '', length: '', category: ''};
  
  if(visitId && state.visits.length > 0){
    visit = getVisitById(state.visits, visitId);
  }

  return {
    visit: visit
  };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(visitActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(NewVisitFormPage);
