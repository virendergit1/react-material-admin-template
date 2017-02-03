import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import CommunityCard from '../components/dashboard/CommunityCard';
import CommunityUpdates from '../components/dashboard/CommunityUpdates';
import CommunityIncidents from '../components/dashboard/CommunityIncidents';
import CommunityCalendar from '../components/dashboard/CommunityCalendar';
import globalStyles from '../styles';
import Data from '../data';
import events from '../events';
import * as incidentActions from '../actions/incidentFormActions';

export class CommunityHomePage extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
          incidents: Object.assign([], this.props.incidents)          
        };
    }
    
    componentWillReceiveProps(nextProps){
      if(this.props.incident.id != nextProps.incident.id){
        this.setState({incident: Object.assign({}, nextProps.incident)});
      }
    }
  
    render() {
        return (
          <div>
            <h3 style={globalStyles.navigation}>Application / Dashboard</h3>

            <div className="row">
              <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 m-b-15 ">
                  <CommunityCard/>
              </div>
            </div>
            <div className="row">
              <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6 m-b-15 ">
                  <CommunityUpdates data={Data.dashBoardPage.communityUpdates}/>
              </div>
              <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6 m-b-15 ">
                  <CommunityIncidents incidents={this.state.incidents}/>
              </div>
            </div>
            <div className="row">
              <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 m-b-15 ">
                  <CommunityCalendar events={events}/>
              </div>
            </div>

          </div>
        );
    }
}

const showResults = (values) =>
  new Promise(resolve => {
    setTimeout(() => {  // simulate server latency
      window.alert(`You submitted:\n\n${JSON.stringify(values, null, 2)}`);
      resolve();
    }, 500);
  });
  
  const mapStateToProps = function(state){
  return {
    incidents: state.incidents
  };
};

const mapDispatchToProps = function (dispatch) {
  return {
        actions: bindActionCreators(incidentActions, dispatch)
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(CommunityHomePage);