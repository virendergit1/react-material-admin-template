import React,  { PropTypes } from 'react';
import { Field, reduxForm } from 'redux-form';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';
import {grey200} from 'material-ui/styles/colors';
import {TimePicker, DatePicker, SelectField, TextField} from 'redux-form-material-ui';

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
  const requiredFields = [ 'title', 'incidentDate', 'incidentTime', 'incidentDetail', 'incidentSeverity' ];
  requiredFields.forEach(field => {
    if (!values[ field ]) {
      errors[ field ] = 'Required';
    }
  });
  return errors;
};

class NewIncidentForm extends React.Component {

    componentDidMount() {
        this.refs.title            // the Field
          .getRenderedComponent() // on Field, returns ReduxFormMaterialUITextField
          .getRenderedComponent() // on ReduxFormMaterialUITextField, returns TextField
          .focus() ;               // on TextField
      }
    render() {
        const { handleSubmit, pristine, reset, submitting } = this.props;
        return (
        <form onSubmit={handleSubmit}>
            <div className="row">
                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-md">
                    <Field name="title" component={TextField} label="Incident Title" ref="title" withRef hintText="e.g. An undocumented visitor entered in the complex" floatingLabelText="Incident Title" fullWidth={true}/>
                </div>                
            </div>
            <div className="row">
                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-md">
                    <Field name="incidentDetail" component={TextField} label="Incident Detail" floatingLabelText="Incident Detail" multiLine={true} fullWidth={true}/>
                </div>
            </div>
            <div className="row">
                <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6 col-md">
                    <p>Incident Date</p>
                    <Field name="incidentDate" component={DatePicker} hintText="Date of Incident" format={null} DateTimeFormat={DateTimeFormat} locale="en-GB" fullWidth={true}/>
                </div>
                <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6 col-md">
                    <p>Incident Time</p>
                    <Field name="incidentTime" component={TimePicker} hintText="Time of Incident" format={null} fullWidth={true}/>
                </div>
            </div>  
            <div className="row">
                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-md">
                    <Field name="securityGuardNotes" component={TextField} label="Security Guard Notes" floatingLabelText="Security Guard's Comments" multiLine={true} fullWidth={true}/>
                </div>
            </div>
            <div className="row">
                <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6 col-md">
                    <Field name="incidentSeverity" label="Incident Severity" component={SelectField} floatingLabelText="Incident Severity" fullWidth={true}>
                        <MenuItem value="high" label="High Siverity" primaryText="High"/>
                        <MenuItem value="medium" label="Medium Siverity" primaryText="Medium"/>
                        <MenuItem value="low" label="Low Siverity" primaryText="Low"/>
                    </Field>
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

NewIncidentForm.propTypes = {
  fields: PropTypes.array,
  meta: PropTypes.array,
  handleSubmit: PropTypes.func,
  pristine: PropTypes.bool,
  reset: PropTypes.func,
  submitting: PropTypes.bool
};

export default reduxForm({
  form: 'NewIncidentForm',  // a unique identifier for this form
  validate,
  initialValues: {
    incidentDate: new Date(),
    incidentTime: new Date(),
    incidentSeverity: 'High'
  }
})(NewIncidentForm);