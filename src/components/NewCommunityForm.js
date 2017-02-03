import React,  { PropTypes } from 'react';
import { Field, FieldArray, reduxForm } from 'redux-form';
import MenuItem from 'material-ui/MenuItem';
import { RadioButton } from 'material-ui/RadioButton';
import RaisedButton from 'material-ui/RaisedButton';
import {RadioButtonGroup, SelectField, TextField} from 'redux-form-material-ui';
import {typography} from 'material-ui/styles';

const styles = {
  block: {
    maxWidth: 200
  },
  flexGrid: {
    paddingTop: 10,
    paddingBottom: 10,
    display: 'flex',
    flexDirection: 'row',
    width: 120,
    whiteSpace: 'nowrap'
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
    marginBottom: 10
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
  const requiredFields = [ 'accountNumber', 'name', 'addressLine1', 'city', 'state', 'country', 'zip', 'visitTime', 
  'contact1Name', 'contact1Phone', 'contact1Email'];
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

const renderContacts = function({ fields, meta: { touched, error } }) {    
    return <div className="row">
          <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4 col-md">
              <Field name={`${fields.name}.contact1Name`} component={TextField} label="Name" hintText="e.g. RK Kapoor" floatingLabelText="Name" fullWidth={true}/>
          </div>
          <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4 col-md">
              <Field name={`${fields.name}.contact1Phone`} component={TextField} label="Phone" hintText="e.g. 98001-54321" floatingLabelText="Phone" fullWidth={true}/>
          </div>
          <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4 col-md">
              <Field name={`${fields.name}.contact1Email`} component={TextField} label="Email" hintText="e.g. rameshk.kapoor@someemail.com" floatingLabelText="Email" fullWidth={true}/>
          </div>        
        </div>;      
 };
      
class NewCommunityForm extends React.Component {

    componentDidMount() {
        
        this.refs.accountNumber            // the Field
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
                <Field name="type" component={RadioButtonGroup} defaultSelected="residential" style={styles.flexGrid}>
                  <RadioButton value="residential" label="Residential" />
                  <RadioButton value="commercial" label="Commercial"/>
                </Field>
                </div>
            </div>
            <div className="row">
                <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6 col-md">
                    <Field name="accountNumber" component={TextField} ref="accountNumber" withRef hintText="e.g. HR-GGN-VC-0001" floatingLabelText="Account Number" fullWidth={true}/>
                </div>
                <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6 col-md">
                    <Field name="name" component={TextField} label="Community Name" hintText="e.g. Vatika City" floatingLabelText="Community's Name" fullWidth={true}/>
                </div>
            </div>    
            <div className="row">
                <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6 col-md">
                    <Field name="addressLine1" component={TextField} label="Address Line 1" hintText="e.g. Sector 49" floatingLabelText="Address Line 1" fullWidth={true}/>
                </div>
                <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6 col-md">
                    <Field name="addressLine2" component={TextField} label="Address Line 2" hintText="e.g. Sohna Road" floatingLabelText="Address Line 2" fullWidth={true}/>
                </div>
            </div>            
            <div className="row">
                <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6 col-md">
                    <Field name="city" component={TextField} label="City" hintText="e.g. Gurugram" floatingLabelText="City" fullWidth={true}/>
                </div>
                <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6 col-md">
                    <Field name="state" component={SelectField} label="State" hintText="e.g. Haryana" floatingLabelText="State" fullWidth={true}>
                        <MenuItem value="HR" primaryText="Haryana"/>
                        <MenuItem value="UP" primaryText="UP"/>
                        <MenuItem value="MP" primaryText="MP"/>
                    </Field>    
                </div>
            </div>
            <div className="row">
                <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6 col-md">
                    <Field name="country" component={TextField} label="Country" hintText="e.g. India" floatingLabelText="Country" fullWidth={true}/>
                </div>
                <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6 col-md">
                    <Field name="zip" component={TextField} label="PIN / ZIP" hintText="e.g. 122061" floatingLabelText="PIN / ZIP" fullWidth={true}/>
                </div>
            </div>           
          <div style={styles.subheading}>Community Contacts</div>
            <p style={styles.multiFieldHeading}>Primary Contact</p>
            <FieldArray name="contacts.primary" component={renderContacts}/>
            <p style={styles.multiFieldHeading}>Secondary Contact</p>
            <FieldArray name="contacts.secondary" component={renderContacts}/>
            <div style={styles.subheading}>Other Important Information</div>
            <div className="row">
                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-md">
                    <Field name="aboutCommunity" component={TextField} label="About Community" floatingLabelText="About Community" multiLine={true} fullWidth={true}/>
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

NewCommunityForm.propTypes = {
  fields: PropTypes.array,
  meta: PropTypes.array,
  handleSubmit: PropTypes.func,
  pristine: PropTypes.bool,
  reset: PropTypes.func,
  submitting: PropTypes.bool
};

export default reduxForm({
  form: 'NewCommunityForm',  // a unique identifier for this form
  validate,
  initialValues: {
    residential: 'residential',
    country: 'India'
  }
})(NewCommunityForm);