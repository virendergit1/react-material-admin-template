import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function vacationNotificationReducer(state = initialState.vacationNotifications, action){
  switch(action.type){
    case types.LOAD_VACATION_NOTIFICATIONS_SUCCESS:
      return action.vacationNotifications;

    case types.CREATE_VACATION_NOTIFICATIONS_SUCCESS:
      return [
        ...state,
        Object.assign({}, action.vacationNotification)
      ];

    case types.UPDATE_VACATION_NOTIFICATIONS_SUCCESS:
      return [
        ...state.filter(vacationNotification => vacationNotification.id !== action.vacationNotification.id), Object.assign({}, action.vacationNotification)
      ];

    default:
      return state;
  }
}
