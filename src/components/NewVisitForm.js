import React,  { PropTypes } from 'react';
import { Field, reduxForm } from 'redux-form';
import { RadioButton } from 'material-ui/RadioButton';
import MenuItem from 'material-ui/MenuItem';
import {Link} from 'react-router';
import RaisedButton from 'material-ui/RaisedButton';
import {grey200} from 'material-ui/styles/colors';
import Divider from 'material-ui/Divider';
import Subheader from 'material-ui/Subheader';
import { AutoComplete as MUIAutoComplete } from 'material-ui';
import {AutoComplete, Checkbox, TimePicker, DatePicker, RadioButtonGroup, SelectField, Slider, TextField, Toggle,} from 'redux-form-material-ui';

const DateTimeFormat = global.Intl.DateTimeFormat;

const styles = {
  block: {
    maxWidth: 200,
  },
  flexGrid: {
    paddingTop: 10,
    paddingBottom: 10,
    display: 'flex',
    flexDirection: 'row',
    width: 120,
    whiteSpace: 'nowrap',
  },
  textField:{
     paddingTop: 0,
     margin: 0,
  },
  p:{
     paddingTop: 0,
     margin: 0,
     color: grey200
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
  const requiredFields = [ 'phone', 'name', 'gender', 'commuteMode', 'visitPurpose', 'companionCount', 'visitDate', 'visitTime' ];
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

const dataSource3 = [
  {textKey: 'Some Text', valueKey: 'someFirstValue'},
  {textKey: 'Some Text', valueKey: 'someSecondValue'},
];
const dataSourceConfig = {
  text: 'textKey',
  value: 'valueKey',
};

class NewVisitForm extends React.Component {

    componentDidMount() {
        this.refs.visitorPhone            // the Field
          .getRenderedComponent() // on Field, returns ReduxFormMaterialUITextField
          .getRenderedComponent() // on ReduxFormMaterialUITextField, returns TextField
          .focus() ;               // on TextField
      }
    render() {
        const { handleSubmit, pristine, reset, submitting } = this.props;
        return (
        <form onSubmit={handleSubmit}>
            <div className="row">
                <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6 col-md">
                    <Field name="phone" component={AutoComplete} ref="visitorPhone" withRef hintText="e.g. 98100-12345" floatingLabelText="Visitor's Phone Number" filter={AutoComplete.noFilter} dataSource={dataSource3} dataSourceConfig={dataSourceConfig} fullWidth={true}/>
                </div>
                <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6 col-md">
                    <Field name="email" component={TextField} label="Visitor Email" hintText="e.g. ram.bahadur@gmail.com" floatingLabelText="Visitor's Email" fullWidth={true}/>
                </div>
            </div>    
            <div className="row">
                <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6 col-md">
                    <Field name="name" component={TextField} label="Visitor Name" hintText="e.g. Ram Bahadur" floatingLabelText="Visitor's Name" fullWidth={true}/>
                </div>
                <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6 col-md">
                    <Field name="name" component={TextField} label="Age" hintText="e.g. 26" floatingLabelText="Visitor's Age" fullWidth={true}/>
                </div>
            </div>
            <div className="row">
                <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6 col-md">
                <Field name="gender" component={RadioButtonGroup} defaultSelected="male" style={styles.flexGrid}>
                  <RadioButton value="male" label="Male" />
                  <RadioButton value="female" label="Female"/>
                </Field>
                </div>
            </div>
            <Divider/>
            <div className="row">
                <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6 col-md">
                <Field name="commuteMode" component={RadioButtonGroup} defaultSelected="pedestrian" style={styles.flexGrid}>
                  <RadioButton value="pedestrian" label="Pedestrian"/>
                  <RadioButton value="vehicleRidden" label="Vehicle Ridden"/>
                </Field>
                </div>
            </div>
            <Divider/>
            <div className="row">
                <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6 col-md">
                    <Field name="visitPurpose" component={TextField} multiLine={true} label="Visit Purpose" hintText="e.g. To meet the flat owner" floatingLabelText="Purpose for the Visit" fullWidth={true}/>
                </div>
                <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6 col-md">
                    <Field name="companionCount" component={TextField} label="Visitor Companions" hintText="e.g. 5" floatingLabelText="Visitor's Companions Count (including Visitor)" fullWidth={true}/>
                </div>
            </div>
            <div className="row">
                <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6 col-md">
                    <Field name="visitDate" component={DatePicker} floatingLabelText="Date of Visit" hintText="Date of Visit" format={null} DateTimeFormat={DateTimeFormat} locale="en-GB" fullWidth={true}/>
                </div>
                <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6 col-md">
                    <Field name="visitTime" component={TimePicker} floatingLabelText="Time of Visit" hintText="Time of Visit" format={null} fullWidth={true}/>
                </div>
            </div>  
             <div className="row">
                <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6 col-md">
                    <Field name="visitorNotes" component={TextField} label="Visitor Notes" floatingLabelText="Visitor's Comments" multiLine={true} fullWidth={true}/>
                </div>
                <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6 col-md">
                    <Field name="securityGuardNotes" component={TextField} label="Security Guard Notes" floatingLabelText="Security Guard's Comments" multiLine={true} fullWidth={true}/>
                </div>
                </div>  
            <div style={styles.buttons}>
                <RaisedButton label="Save" type="submit" style={styles.saveButton} primary={true} disabled={pristine || submitting} onSubmit={handleSubmit}/>
                <RaisedButton label="Clear Values" primary={true} disabled={pristine || submitting} onClick={reset}/>            
            </div>
        </form>
  );
  }
}

NewVisitForm.propTypes = {
  fields: PropTypes.array,
  meta: PropTypes.array,
  handleSubmit: PropTypes.func,
  pristine: PropTypes.bool,
  reset: PropTypes.func,
  submitting: PropTypes.bool
};

export default reduxForm({
  form: 'NewVisitForm',  // a unique identifier for this form
  validate,
  initialValues: {
    companionCount: '1',
    gender: 'male',
    commuteMode: 'pedestrian',
    visitDate: new Date(),
    visitTime: new Date(),
    visitPurpose: 'Personal'
  }
})(NewVisitForm);