import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './containers/App';
import NotFoundPage from './containers/NotFoundPage.js';
import LoginPage from './containers/LoginPage';
import FormPage from './containers/FormPage';
import NewVisitFormPage from './containers/NewVisitFormPage';
import NewIncidentFormPage from './containers/NewIncidentFormPage';
import CommunityHomePage from './containers/CommunityHomePage';
import ResidentHomePage from './containers/ResidentHomePage';
import ResidentsDirectory from './components/ResidentsDirectory';
import SiteAdminHomePage from './containers/SiteAdminHomePage';
import NewCommunityFormPage from './containers/NewCommunityFormPage';

import TablePage from './containers/TablePage';
import Dashboard from './containers/DashboardPage';

export default (
  <Route>
    <Route path="login" component={LoginPage}/>
    <Route path="/" component={App}>
      <IndexRoute component={Dashboard}/>
      <Route path="dashboard" component={Dashboard}/>
      <Route path="community" component={CommunityHomePage}/>
            <Route path="residents" component={ResidentsDirectory}/>

        <Route path="resident" component={ResidentHomePage}/>
                     <Route path="newvisit" component={NewVisitFormPage}/>
                     <Route path="newincident" component={NewIncidentFormPage}/>

       <Route path="siteAdminHome" component={SiteAdminHomePage}>
             <Route path="newcommunity" component={NewCommunityFormPage}/>
        </Route>     
        <Route path="form" component={FormPage}/>
      <Route path="table" component={TablePage}/>
      <Route path="*" component={NotFoundPage}/>
    </Route>
  </Route>
);
