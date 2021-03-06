import {combineReducers} from 'redux';
import courses from './courseReducer';
import authors from './authorReducer';
import visitors from './visitorReducer';
import visits from './visitReducer';
import incidents from './incidentReducer';
import manageVisitors from './manageVisitorReducer';
import vacationNotifications from './vacationNotificationReducer';
import profiles from './profileReducer';
import ajaxCallsInProgress from './ajaxStatusReducer';
import { reducer as formReducer  } from 'redux-form';

const rootReducer = combineReducers({
  form: formReducer,
  visitors,
  visits,
  incidents,
  courses,
  authors,
  ajaxCallsInProgress
});

export default rootReducer;
