import React from 'react';
import {cyan600, pink600, purple600, orange600} from 'material-ui/styles/colors';
import Assessment from 'material-ui/svg-icons/action/assessment';
import Face from 'material-ui/svg-icons/action/face';
import ThumbUp from 'material-ui/svg-icons/action/thumb-up';
import ShoppingCart from 'material-ui/svg-icons/action/shopping-cart';
import InfoBox from '../components/dashboard/InfoBox';
import VisitorsDailyTraffic from '../components/dashboard/VisitorsDailyTraffic';
import MonthlyVisitors from '../components/dashboard/MonthlyVisitors';
import VisitorsType from '../components/dashboard/VisitorsType';
import RecentVisitors from '../components/dashboard/RecentVisitors';
import globalStyles from '../styles';
import Data from '../data';
import IncidentIcon from 'material-ui/svg-icons/content/report';
import ResidentsIcon from 'material-ui/svg-icons/social/group';
import VisitorIcon from 'material-ui/svg-icons/maps/transfer-within-a-station';
import CommunityIcon from 'material-ui/svg-icons/social/location-city';

const DashboardPage = () => {

  return (
    <div>
      <h3 style={globalStyles.navigation}>Application / Dashboard</h3>

      <div className="row">

        <div className="col-xs-12 col-sm-6 col-md-3 col-lg-3 m-b-15 ">
          <InfoBox Icon={ResidentsIcon}
                   color={pink600}
                   title="Total Residents"
                   value="1500"
          />
        </div>


        <div className="col-xs-12 col-sm-6 col-md-3 col-lg-3 m-b-15 ">
          <InfoBox Icon={VisitorIcon}
                   color={cyan600}
                   title="Monthly Visitors"
                   value="4231"
          />
        </div>

        <div className="col-xs-12 col-sm-6 col-md-3 col-lg-3 m-b-15 ">
          <InfoBox Icon={IncidentIcon}
                   color={purple600}
                   title="Security Incidents"
                   value="460"
          />
        </div>

        <div className="col-xs-12 col-sm-6 col-md-3 col-lg-3 m-b-15 ">
          <InfoBox Icon={Face}
                   color={orange600}
                   title="Total Security Personals"
                   value="248"
          />
        </div>
      </div>

      <div className="row">
        <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6 col-md m-b-15">
          <VisitorsDailyTraffic data={Data.dashBoardPage.newOrders}/>
        </div>

        <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6 m-b-15">
          <MonthlyVisitors data={Data.dashBoardPage.monthlySales}/>
        </div>
      </div>

      <div className="row">
        <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 m-b-15 ">
          <RecentVisitors data={Data.dashBoardPage.recentProducts}/>
        </div>

        <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 m-b-15 ">
          <VisitorsType data={Data.dashBoardPage.browserUsage}/>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
