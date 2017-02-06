import * as types from './actionTypes';
import vacationNotificationApi from '../api/mockVacationNotificationApi';
import {beginAjaxCall, ajaxCallError} from './ajaxStatusActions';

export function loadVacationNotificationsSuccess(vacationNotifications){
  return {type: types.LOAD_VACATION_NOTIFICATIONS_SUCCESS, vacationNotifications};
}

export function createVacationNotificationSuccess(vacationNotification){
  return {type: types.CREATE_VACATION_NOTIFICATIONS_SUCCESS, vacationNotification};
}

export function updateVacationNotificationSuccess(vacationNotification){
  return {type: types.UPDATE_VACATION_NOTIFICATIONS_SUCCESS, vacationNotification};
}


export function loadVacationNotifications(){
  return function(dispatch){

    dispatch(beginAjaxCall());

    return vacationNotificationApi.getAllVacationNotifications().then(vacationNotifications => {
      dispatch(loadVacationNotificationsSuccess(vacationNotifications));
    }).catch(error => {
      throw(error);
    });
  };
}

export function saveVacationNotification(vacationNotification){
  return function(dispatch, getState){

    dispatch(beginAjaxCall());

    return vacationNotificationApi.saveVacationNotification(vacationNotification).then(savedVacationNotification => {
      vacationNotification.id ? dispatch(updateVacationNotificationSuccess(savedVacationNotification)) : dispatch(createVacationNotificationSuccess(savedVacationNotification));
    }).catch(error => {
      dispatch(ajaxCallError(error));
      throw(error);
    });
  };
}
