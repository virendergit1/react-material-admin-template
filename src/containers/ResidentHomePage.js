import React from 'react';
import {cyan600, pink600, purple600, orange600} from 'material-ui/styles/colors';
import CommunityCard from '../components/dashboard/CommunityCard';
import CommunityUpdates from '../components/dashboard/CommunityUpdates';
import CommunityIncidents from '../components/dashboard/CommunityIncidents';
import CommunityCalendar from '../components/dashboard/CommunityCalendar';
import globalStyles from '../styles';
import Data from '../data';
import events from '../events';
import IncidentIcon from 'material-ui/svg-icons/content/report';
import ResidentsIcon from 'material-ui/svg-icons/social/group';
import VisitorIcon from 'material-ui/svg-icons/maps/transfer-within-a-station';
import ResidentsDirectory from '../components/ResidentsDirectory';

var data = [
  { id: '1', firstName: 'John', lastName: 'Bobson'},
  { id: '2', firstName: 'Bob', lastName: 'Mclaren'}
]
var columns = [
  { name: 'firstName'},
  { name: 'lastName'}
]

const ResidentHomePage = () => {

  return (
    <div>
      <h3 style={globalStyles.navigation}>Application / Dashboard</h3>
      <div className="row">
        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 m-b-15 ">
            <ResidentsDirectory data ={data} columns={columns} />
        </div>
      </div>
      
      <div className="row">
        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 m-b-15 ">
            <CommunityCard/>
        </div>
      </div> 
       
    </div>
  );
};

export default ResidentHomePage;
