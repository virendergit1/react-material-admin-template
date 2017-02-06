import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as vacationNotificationActions from '../actions/vacationNotificationFormActions';
import VacationNotificationForm from '../components/VacationNotificationForm';
import {authorsFormattedForDropdown} from '../selectors/selectors'; //eslint-disable-line import/no-named-as-default
import toastr from 'toastr'; //eslint-disable-line import/no-named-as-default
import PageBase from '../components/PageBase';

export class VacationNotificationFormPage extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
          vacationNotification: Object.assign({}, this.props.vacationNotification),
          errors:{},
          saving: false
        };

        this.updateVacationNotificationState = this.updateVacationNotificationState.bind(this);
        this.saveVacationNotification = this.saveVacationNotification.bind(this);
    }

    componentWillReceiveProps(nextProps){
      if(this.props.vacationNotification.id != nextProps.vacationNotification.id){
        this.setState({vacationNotification: Object.assign({}, nextProps.vacationNotification)});
      }
    }

    updateVacationNotificationState(event){
      const field = event.target.name;
      let vacationNotification = this.state.vacationNotification;
      vacationNotification[field] = event.target.value;
      return this.setState({vacationNotification:vacationNotification});
    }

    vacationNotificationFormIsValid(){
      let formIsValid = true;
      let errors = {};

      if(this.state.vacationNotification.title.length < 5){
        errors.title = 'Title must be at least 5 characters.';
        formIsValid = false;
      }

      this.setState({errors: errors});
      return formIsValid;
  }

    saveVacationNotification(event){
      event.preventDefault();

      if(!this.vacationNotificationFormIsValid()){
        return;
      }

      this.setState({saving: true});

      this.props.actions.saveVacationNotification(this.state.vacationNotification)
        .then(() => this.redirect())
        .catch(error => {
          toastr.error(error);
          this.setState({saving: false});
        });
    }

    redirect(){
      this.setState({saving: false});
      toastr.success('Vacation Notification Saved');
      this.context.router.push('/vacationNotification');
    }
    
  render() {
        return (
        <PageBase title="My Vacation Notification" navigation="Application / Vacation Notification">
          <VacationNotificationForm onSubmit={handleSubmit}/>          
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

VacationNotificationFormPage.propTypes = {
  vacationNotification: PropTypes.object.isRequired  
};

VacationNotificationFormPage.contextTypes = {
  router: PropTypes.object
};

function getVacationNotificationById(vacationNotifications, id){
  const vacationNotification = vacationNotifications.filter(vacationNotification => vacationNotification.id==id);
  if(vacationNotification) return vacationNotification[0];
  return null;
}

function mapStateToProps(state, ownProps) {
  const vacationNotificationId = ownProps.params.id;

  let vacationNotification = {id: '', watchHref: '', title: '', authorId: '', length: '', category: ''};
  
  if(vacationNotificationId && state.vacationNotifications.length > 0){
    vacationNotification = getVacationNotificationById(state.vacationNotifications, vacationNotificationId);
  }

  return {
    vacationNotification: vacationNotification
  };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(vacationNotificationActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(VacationNotificationFormPage);
