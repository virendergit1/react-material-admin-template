import React,  { PropTypes } from 'react';
import { Field, FieldArray, reduxForm } from 'redux-form';
import { RadioButton } from 'material-ui/RadioButton';
import MenuItem from 'material-ui/MenuItem';
import {Link} from 'react-router';
import RaisedButton from 'material-ui/RaisedButton';
import IconButton from 'material-ui/IconButton';
import DeleteIcon from 'material-ui/svg-icons/action/delete';
import PlusOneIcon from 'material-ui/svg-icons/content/add-circle-outline';
import {grey200, cyan600, red500} from 'material-ui/styles/colors';
import Divider from 'material-ui/Divider';
import Subheader from 'material-ui/Subheader';
import {AutoComplete, Checkbox, TimePicker, DatePicker, RadioButtonGroup, SelectField, Slider, TextField, Toggle,} from 'redux-form-material-ui';
import {typography} from 'material-ui/styles';

const DateTimeFormat = global.Intl.DateTimeFormat;

const styles = {
  block: {
    maxWidth: 200,
  },
  flexGrid: {
    paddingTop: 10,
    paddingBottom: 10,
    width: 120,
    whiteSpace: 'nowrap',
  },
  textField:{
     paddingTop: 0,
     margin: 0,
  },
  multiFieldHeading:{
    paddingTop: 5,
    paddingBottom: 0, 
    marginTop: 5,
    marginBottom: 0, 
  },
  subheading:{
    fontSize: 20,
    fontWeight: typography.fontWeightLight,
    marginTop: 20,
    marginBottom: 10,
    borderBottom: '1px solid',
    borderColor: cyan600,
  },
  p:{
     paddingTop: 0,
     margin: 0,
     color: grey200
  },
  exDivGenderBoxStyle: {
    paddingLeft: 40,
    paddingTop: 0,
    },
  exDivTextStyle: {
    paddingLeft: 40,
    paddingTop: 40,
    },
  exDivIconStyle: {
    paddingTop: 25,
  },
  buttons: {
      paddingTop: 30,
      float: 'left'
  },
  saveButton: {
      marginRight: 5
  }
};

const validate = values => {
  const errors = {};
  const requiredFields = [ 'phone', 'name', 'gender', 'permissionStartDate', 'permissionEndDate'];
  requiredFields.forEach(field => {
    if (!values[ field ]) {
      errors[ field ] = 'Required';
    }
  });
  if (values.email && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address';
  }
  return errors;
};

const renderTemporaryVisitors = ({ fields, meta: { touched, error } }) => (
  <div>
    <div>
      <RaisedButton label="Add Temporary Visitor" icon={<PlusOneIcon/>} type="submit" style={styles.saveButton} primary={true} onClick={() => fields.push({})}/>
      {touched && error && <span>{error}</span>}
    </div>
    {fields.map((temporaryVisitor, index) =>
      <div key={index}>        
        <div className="row">
            <div className="col-xs-12 col-sm-1 col-md-1 col-lg-1 col-md" style={styles.exDivTextStyle}>
                  <h1 key={index}>{index + 1}.</h1>
            </div>
            <div className="col-xs-12 col-sm-2 col-md-2 col-lg-2 col-md">
                  <Field name={`${temporaryVisitor}.name`} component={TextField} label="Full Name" hintText="e.g. Ram Bahadur" floatingLabelText="Name" fullWidth={true}/>
            </div>
            <div className="col-xs-12 col-sm-2 col-md-2 col-lg-2 col-md">
                  <Field name={`${temporaryVisitor}.phone`} component={TextField} label="Phone" hintText="e.g. 98100-12245" floatingLabelText="Phone Number" fullWidth={true}/>
              </div>
            <div className="col-xs-12 col-sm-2 col-md-2 col-lg-2 col-md">
              <Field name={`${temporaryVisitor}.permissionStartDate`} component={DatePicker} floatingLabelText="Permission Start Date" format={null} DateTimeFormat={DateTimeFormat} locale="en-GB" fullWidth={true}/>
            </div>
            <div className="col-xs-12 col-sm-2 col-md-2 col-lg-2 col-md">
                <Field name={`${temporaryVisitor}.permissionEndDate`} component={DatePicker} floatingLabelText="Permission End Date" format={null} DateTimeFormat={DateTimeFormat} locale="en-GB" fullWidth={true}/>
            </div>
            <div className="col-xs-12 col-sm-2 col-md-2 col-lg-2 col-md">
                    <Field name={`${temporaryVisitor}.state`} component={SelectField} label="Visitor Type" hintText="e.g. Personal" floatingLabelText="Visitor Type" fullWidth={true}>
                        <MenuItem value="personal" primaryText="Personal"/>
                        <MenuItem value="professional" primaryText="Professioal"/>
                    </Field>    
            </div>         
            <div className="col-xs-12 col-sm-1 col-md-1 col-lg-1 col-md" style={styles.exDivIconStyle}>
                <IconButton onClick={() => fields.remove(index)}><DeleteIcon color={red500}/></IconButton>
            </div>
            </div>
            <div className="row">
                <div className="col-xs-12 col-sm-1 col-md-1 col-lg-1 col-md"/>
                <div className="col-xs-12 col-sm-11 col-md-11 col-lg-11 col-md">
                    <Field name={`${temporaryVisitor}.securityPersonalNote`} component={TextField} label="Note for Security Personal" floatingLabelText="Note for Security Personal" multiLine={true} fullWidth={true}/>
                </div>
            </div>
                      
      </div>
    )}
  </div>
);
 
class VacationNotificationForm extends React.Component {

    componentDidMount() {
        this.refs.vacationStartDate            // the Field
          .getRenderedComponent() // on Field, returns ReduxFormMaterialUITextField
          .getRenderedComponent() // on ReduxFormMaterialUITextField, returns TextField
          .focus() ;               // on TextField
      }
    render() {
        const { handleSubmit, pristine, reset, submitting } = this.props;
        return (
        <form onSubmit={handleSubmit}>
            <div style={styles.subheading}>Setup Vacation Notification</div>
            <div className="row">
                <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6 col-md">
                  <Field name="vacationStartDate" component={DatePicker} ref floatingLabelText="Vacation Start Date" format={null} DateTimeFormat={DateTimeFormat} locale="en-GB" fullWidth={true}/>
                </div>
                <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6 col-md">
                    <Field name="vacationEndDate" component={DatePicker} floatingLabelText="Vacation End Date" format={null} DateTimeFormat={DateTimeFormat} locale="en-GB" fullWidth={true}/>
                </div>                               
            </div>   
            <div className="row">
                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-md">
                    <Field name="vacationNotificationMsg" component={TextField} label="Note for Security Personal" floatingLabelText="Note for Security Personal" multiLine={true} fullWidth={true}/>
                </div>
            </div>
            <div style={styles.subheading}>Visitor Allowed During My Absense</div>
            <FieldArray name="contacts.temporaryVisitors" component={renderTemporaryVisitors}/>
  
            <div style={styles.buttons}>
                <RaisedButton label="Save" type="submit" style={styles.saveButton} primary={true} disabled={pristine || submitting} onSubmit={handleSubmit}/>
                <RaisedButton label="Clear Values" primary={true} disabled={pristine || submitting} onClick={reset}/>            
            </div>
        </form>
  );
  }
}

VacationNotificationForm.propTypes = {
  fields: PropTypes.array,
  meta: PropTypes.array,
  handleSubmit: PropTypes.func,
  pristine: PropTypes.bool,
  reset: PropTypes.func,
  submitting: PropTypes.bool
};

export default reduxForm({
  form: 'VacationNotificationForm',  // a unique identifier for this form
  validate,
  initialValues: {
    gender: 'male',
  }
})(VacationNotificationForm);