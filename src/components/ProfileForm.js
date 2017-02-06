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
import { AutoComplete as MUIAutoComplete } from 'material-ui';
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
    display: 'flex',
    flexDirection: 'row',
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
  const requiredFields = [ 'phone', 'name', 'email', 'gender', 'password'];
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

const renderMembers = ({ fields, meta: { touched, error } }) => (
  <div>
    <div>
      <RaisedButton label="Add Member" icon={<PlusOneIcon/>} type="submit" style={styles.saveButton} primary={true} onClick={() => fields.push({})}/>
      {touched && error && <span>{error}</span>}
    </div>
    {fields.map((member, index) =>
      <div key={index}>        
        <div className="row">
          <div className="col-xs-12 col-sm-1 col-md-1 col-lg-1 col-md" style={styles.exDivTextStyle}>
              <h1 key={index}>{index + 1}.</h1>
          </div>
          <div className="col-xs-12 col-sm-3 col-md-3 col-lg-3 col-md">
              <Field name={`${member}.contactName`} component={TextField} label="Name" floatingLabelText="Name" fullWidth={true}/>
          </div>
          <div className="col-xs-12 col-sm-2 col-md-2 col-lg-2 col-md">
              <Field name={`${member}.contactPhone`} component={TextField} label="Phone" floatingLabelText="Phone" fullWidth={true}/>
          </div>
          <div className="col-xs-13 col-sm-3 col-md-3 col-lg-3 col-md">
              <Field name={`${member}.contactEmail`} component={TextField} label="Email" floatingLabelText="Email" fullWidth={true}/>
          </div>
           <div className="col-xs-12 col-sm-2 col-md-2 col-lg-2 col-md">
              <Field name={`${member}.contactRelationship`} component={TextField} label="Relationship" floatingLabelText="Relationship" fullWidth={true}/>
          </div>
          <div className="col-xs-12 col-sm-1 col-md-1 col-lg-1 col-md" style={styles.exDivIconStyle}>
            <IconButton onClick={() => fields.remove(index)}><DeleteIcon color={red500}/></IconButton>
          </div>
          </div>
      </div>
    )}
  </div>
);
 
const renderVehicles = ({ fields, meta: { touched, error } }) => (
  <div>
    <div>
      <RaisedButton label="Add Vehicle" icon={<PlusOneIcon/>} type="submit" style={styles.saveButton} primary={true} onClick={() => fields.push({})}/>
      {touched && error && <span>{error}</span>}
    </div>
    {fields.map((vehicle, index) =>
      <div key={index}>        
        <div className="row">
          <div className="col-xs-12 col-sm-1 col-md-1 col-lg-1 col-md" style={styles.exDivTextStyle}>
              <h1 key={index}>{index + 1}.</h1>
          </div>
          <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4 col-md">
              <Field name={`${vehicle}.regNumber`} component={TextField} label="Registration Number" floatingLabelText="Registration Number" fullWidth={true}/>
          </div>
          <div className="col-xs-12 col-sm-2 col-md-2 col-lg-2 col-md">
              <Field name={`${vehicle}.make`} component={TextField} label="Make" floatingLabelText="Make" fullWidth={true}/>
          </div>
          <div className="col-xs-13 col-sm-2 col-md-2 col-lg-2 col-md">
              <Field name={`${vehicle}.model`} component={TextField} label="Model" floatingLabelText="Model" fullWidth={true}/>
          </div>
           <div className="col-xs-12 col-sm-2 col-md-2 col-lg-2 col-md">
              <Field name={`${vehicle}.color`} component={TextField} label="Colour" floatingLabelText="Colour" fullWidth={true}/>
          </div>
          <div className="col-xs-12 col-sm-1 col-md-1 col-lg-1 col-md" style={styles.exDivIconStyle}>
            <IconButton onClick={() => fields.remove(index)}><DeleteIcon color={red500}/></IconButton>
          </div>
          </div>
      </div>
    )}
  </div>
);
 
const renderPets = ({ fields, meta: { touched, error } }) => (
  <div>
    <div>
      <RaisedButton label="Add Pet" icon={<PlusOneIcon/>} type="submit" style={styles.saveButton} primary={true} onClick={() => fields.push({})}/>
      {touched && error && <span>{error}</span>}
    </div>
    {fields.map((pet, index) =>
      <div key={index}>        
        <div className="row">
          <div className="col-xs-12 col-sm-1 col-md-1 col-lg-1 col-md" style={styles.exDivTextStyle}>
              <h1 key={index}>{index + 1}.</h1>
          </div>
          <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4 col-md">
              <Field name={`${pet}.name`} component={TextField} label="Name" floatingLabelText="Name" fullWidth={true}/>
          </div>
          <div className="col-xs-12 col-sm-2 col-md-2 col-lg-2 col-md">
              <Field name={`${pet}.category`} component={TextField} label="Category" floatingLabelText="Category" fullWidth={true}/>
          </div>
          <div className="col-xs-13 col-sm-2 col-md-2 col-lg-2 col-md">
              <Field name={`${pet}.breed`} component={TextField} label="Breed" floatingLabelText="Breed" fullWidth={true}/>
          </div>
           <div className="col-xs-12 col-sm-2 col-md-2 col-lg-2 col-md">
              <Field name={`${pet}.color`} component={TextField} label="Colour" floatingLabelText="Colour" fullWidth={true}/>
          </div>
          <div className="col-xs-12 col-sm-1 col-md-1 col-lg-1 col-md" style={styles.exDivIconStyle}>
            <IconButton onClick={() => fields.remove(index)}><DeleteIcon color={red500}/></IconButton>
          </div>
          </div>
      </div>
    )}
  </div>
);

 
const renderSecurityQuestions = ({ fields, meta: { touched, error } }) => (
  <div>
    <div>
      <RaisedButton label="Add Security Question" icon={<PlusOneIcon/>} type="submit" style={styles.saveButton} primary={true} onClick={() => fields.push({})}/>
      {touched && error && <span>{error}</span>}
    </div>
    {fields.map((securityQuestion, index) =>
      <div key={index}>        
        <div className="row">
          <div className="col-xs-12 col-sm-1 col-md-1 col-lg-1 col-md" style={styles.exDivTextStyle}>
              <h1 key={index}>{index + 1}.</h1>
          </div>
          <div className="col-xs-12 col-sm-5 col-md-5 col-lg-5 col-md">
              <Field name={`${securityQuestion}.question`} component={TextField} label="Question" floatingLabelText="Question" fullWidth={true}/>
          </div>
          <div className="col-xs-12 col-sm-5 col-md-5 col-lg-5 col-md">
              <Field name={`${securityQuestion}.answer`} component={TextField} label="Answer" floatingLabelText="Answer" fullWidth={true}/>
          </div>
          <div className="col-xs-12 col-sm-1 col-md-1 col-lg-1 col-md" style={styles.exDivIconStyle}>
            <IconButton onClick={() => fields.remove(index)}><DeleteIcon color={red500}/></IconButton>
          </div>
          </div>
      </div>
    )}
  </div>
);

 
const renderAddresses = ({ fields, meta: { touched, error } }) => (
  <div>
    <div>
      <RaisedButton label="Add Address" icon={<PlusOneIcon/>} type="submit" style={styles.saveButton} primary={true} onClick={() => fields.push({})}/>
      {touched && error && <span>{error}</span>}
    </div>
    {fields.map((address, index) =>
      <div key={index}>        
        <div className="row">
          <div className="col-xs-12 col-sm-1 col-md-1 col-lg-1 col-md" style={styles.exDivTextStyle}>
              <h1 key={index}>{index + 1}.</h1>
          </div>
          <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4 col-md">
              <Field name={`${address}.addressline`} component={TextField} label="Address Line" floatingLabelText="Address Line" fullWidth={true}/>
          </div>
          <div className="col-xs-12 col-sm-2 col-md-2 col-lg-2 col-md">
              <Field name={`${address}.city`} component={TextField} label="City" floatingLabelText="City" fullWidth={true}/>
          </div>
          <div className="col-xs-12 col-sm-2 col-md-2 col-lg-2 col-md">
              <Field name={`${address}.state`} component={TextField} label="State" floatingLabelText="State" fullWidth={true}/>
          </div>
          <div className="col-xs-12 col-sm-2 col-md-2 col-lg-2 col-md">
              <Field name={`${address}.pin`} component={TextField} label="PIN" floatingLabelText="PIN" fullWidth={true}/>
          </div>
          <div className="col-xs-12 col-sm-1 col-md-1 col-lg-1 col-md" style={styles.exDivIconStyle}>
            <IconButton onClick={() => fields.remove(index)}><DeleteIcon color={red500}/></IconButton>
          </div>
          </div>
      </div>
    )}
  </div>
);


class ProfileForm extends React.Component {

    componentDidMount() {
        this.refs.profileorPhone            // the Field
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
                    <Field name="phone" component={TextField} ref="profilePhone" withRef hintText="e.g. 98100-12345" floatingLabelText="Phone Number" fullWidth={true}/>
                </div>
                <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6 col-md">
                    <Field name="email" component={TextField} label="Email" hintText="e.g. ram.bahadur@gmail.com" floatingLabelText="Email" fullWidth={true}/>
                </div>
            </div>    
            <div className="row">
                <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6 col-md">
                    <Field name="name" component={TextField} label="Full Name" hintText="e.g. Ram Bahadur" floatingLabelText="Name" fullWidth={true}/>
                </div>
                <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6 col-md">
                    <Field name="password" component={TextField} ref='password' type="password" label="Password" floatingLabelText="Password" fullWidth={true}/>
                </div>
            </div>
            <div className="row">
                <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6 col-md" style={styles.exDivIconStyle}>
                <Field name="gender" component={RadioButtonGroup} defaultSelected="male" style={styles.flexGrid}>
                  <RadioButton value="male" label="Male" />
                  <RadioButton value="female" label="Female"/>
                </Field>
                </div>
                <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6 col-md">
                    <Field name="age" component={TextField} label="Age" hintText="26" floatingLabelText="Age" fullWidth={true}/>
                </div>                
            </div>
            
            <div style={styles.subheading}>Security Questions</div>
            <FieldArray name="contacts.securityquestions" component={renderSecurityQuestions}/>

            <div style={styles.subheading}>Address</div>
            <FieldArray name="contacts.address" component={renderAddresses}/>

            <div style={styles.subheading}>House Hold Members </div>
            <FieldArray name="contacts.members" component={renderMembers}/>
            
            <div style={styles.subheading}>Vehicles</div>
            <FieldArray name="contacts.vehicles" component={renderVehicles}/>
            
            <div style={styles.subheading}>Pets</div>
            <FieldArray name="contacts.pets" component={renderPets}/>
            
            <div style={styles.subheading}>Other Important Information</div>
            <div className="row">
                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-md">
                    <Field name="aboutContact" component={TextField} label="About Myself" floatingLabelText="About Myself" multiLine={true} fullWidth={true}/>
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

ProfileForm.propTypes = {
  fields: PropTypes.array,
  meta: PropTypes.array,
  handleSubmit: PropTypes.func,
  pristine: PropTypes.bool,
  reset: PropTypes.func,
  submitting: PropTypes.bool
};

export default reduxForm({
  form: 'ProfileForm',  // a unique identifier for this form
  validate,
  initialValues: {
    gender: 'male',
  }
})(ProfileForm);