import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as manageVisitorActions from '../actions/manageVisitorFormActions';
import ManageVisitorForm from '../components/ManageVisitorForm';
import {authorsFormattedForDropdown} from '../selectors/selectors'; //eslint-disable-line import/no-named-as-default
import toastr from 'toastr'; //eslint-disable-line import/no-named-as-default
import PageBase from '../components/PageBase';

export class ManageVisitorFormPage extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
          manageVisitor: Object.assign({}, this.props.manageVisitor),
          errors:{},
          saving: false
        };

        this.updateManageVisitorState = this.updateManageVisitorState.bind(this);
        this.saveManageVisitor = this.saveManageVisitor.bind(this);
    }

    componentWillReceiveProps(nextProps){
      if(this.props.manageVisitor.id != nextProps.manageVisitor.id){
        this.setState({manageVisitor: Object.assign({}, nextProps.manageVisitor)});
      }
    }

    updateManageVisitorState(event){
      const field = event.target.name;
      let manageVisitor = this.state.manageVisitor;
      manageVisitor[field] = event.target.value;
      return this.setState({manageVisitor:manageVisitor});
    }

    manageVisitorFormIsValid(){
      let formIsValid = true;
      let errors = {};

      if(this.state.manageVisitor.title.length < 5){
        errors.title = 'Title must be at least 5 characters.';
        formIsValid = false;
      }

      this.setState({errors: errors});
      return formIsValid;
  }

    saveManageVisitor(event){
      event.preventDefault();

      if(!this.manageVisitorFormIsValid()){
        return;
      }

      this.setState({saving: true});

      this.props.actions.saveManageVisitor(this.state.manageVisitor)
        .then(() => this.redirect())
        .catch(error => {
          toastr.error(error);
          this.setState({saving: false});
        });
    }

    redirect(){
      this.setState({saving: false});
      toastr.success('ManageVisitor Saved');
      this.context.router.push('/manageVisitor');
    }
    
  render() {
        return (
        <PageBase title="Manage My Visitors" navigation="Application / Manage Visitors">
          <ManageVisitorForm onSubmit={handleSubmit}/>          
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

ManageVisitorFormPage.propTypes = {
  manageVisitor: PropTypes.object.isRequired  
};

ManageVisitorFormPage.contextTypes = {
  router: PropTypes.object
};

function getManageVisitorById(manageVisitors, id){
  const manageVisitor = manageVisitors.filter(manageVisitor => manageVisitor.id==id);
  if(manageVisitor) return manageVisitor[0];
  return null;
}

function mapStateToProps(state, ownProps) {
  const manageVisitorId = ownProps.params.id;

  let manageVisitor = {id: '', watchHref: '', title: '', authorId: '', length: '', category: ''};
  
  if(manageVisitorId && state.manageVisitors.length > 0){
    manageVisitor = getManageVisitorById(state.manageVisitors, manageVisitorId);
  }

  return {
    manageVisitor: manageVisitor
  };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(manageVisitorActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(ManageVisitorFormPage);
