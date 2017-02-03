import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as incidentActions from '../actions/incidentFormActions';
import IncidentForm from '../components/NewIncidentForm';
import toastr from 'toastr'; //eslint-disable-line import/no-named-as-default
import PageBase from '../components/PageBase';

export class NewIncidentFormPage extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
          incident: Object.assign({}, this.props.incident),
          errors:{},
          saving: false
        };

        this.updateIncidentState = this.updateIncidentState.bind(this);
        this.saveIncident = this.saveIncident.bind(this);
    }

    componentWillReceiveProps(nextProps){
      if(this.props.incident.id != nextProps.incident.id){
        this.setState({incident: Object.assign({}, nextProps.incident)});
      }
    }

    updateIncidentState(event){
      const field = event.target.name;
      let incident = this.state.incident;
      incident[field] = event.target.value;
      return this.setState({incident:incident});
    }

    incidentFormIsValid(){
      let formIsValid = true;
      let errors = {};

      if(this.state.incident.title.length < 1){
        errors.title = 'Title must be at least 1 characters.';
        formIsValid = false;
      }

      this.setState({errors: errors});
      return formIsValid;
  }

    saveIncident(incident){
      // Do something with the form values
        
      if(!this.incidentFormIsValid()){
      //  return;
      }

      this.setState({saving: true});        
        
      this.props.actions.saveIncident(incident)
        .then(() => this.redirect())
        .catch(error => {
          toastr.error(error);
          this.setState({saving: false});
        });
    }

    redirect(){
      console.log("redirect called");
      toastr.success('Incident Saved');
      this.setState({saving: false});
      this.context.router.push('/newincident');      
    }
    
  render() {
        return (
        <PageBase title="Log A New Incident" navigation="Application / New Incident">
          <IncidentForm onSubmit={this.saveIncident}/>          
        </PageBase>
        );
    }
}

/*
const handleSubmit = (values) => {
    // Do something with the form values
    console.log(values);
    showResults(values);
    saveIncident(values);
  };
*/  

const showResults = (values) =>
  new Promise(resolve => {
    setTimeout(() => {  // simulate server latency
      window.alert(`You submitted:\n\n${JSON.stringify(values, null, 2)}`)
      resolve()
    }, 500)
  });

NewIncidentFormPage.propTypes = {
  incident: PropTypes.object.isRequired  
};

NewIncidentFormPage.contextTypes = {
  router: PropTypes.object
};

function getIncidentById(incidents, id){
  const incident = incidents.filter(incident => incident.id==id);
  if(incident) return incident[0];
  return null;
}

function mapStateToProps(state, ownProps) {
  const incidentId = ownProps.params.id;

  let incident = {id: '', title: '', watchHref: '', incidentDetail: '', incidentDate: '', incidentTime: '', securityGuardNotes: '', incidentSeverity: ''};
  
  if(incidentId && state.incidents.length > 0){
    incident = getIncidentById(state.incidents, incidentId);
  }

  return {
    incident: incident
  };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(incidentActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(NewIncidentFormPage);
