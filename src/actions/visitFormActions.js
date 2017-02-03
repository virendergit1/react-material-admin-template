import * as types from './actionTypes';
import visitApi from '../api/mockVisitApi';
import {beginAjaxCall, ajaxCallError} from './ajaxStatusActions';

export function loadVisitsSuccess(visits){
  return {type: types.LOAD_VISITS_SUCCESS, visits};
}

export function createVisitSuccess(visit){
  return {type: types.CREATE_VISITS_SUCCESS, visit};
}

export function updateVisitSuccess(visit){
  return {type: types.UPDATE_VISITS_SUCCESS, visit};
}


export function loadVisits(){
  return function(dispatch){

    dispatch(beginAjaxCall());

    return visitApi.getAllVisits().then(visits => {
      dispatch(loadVisitsSuccess(visits));
    }).catch(error => {
      throw(error);
    });
  };
}

export function saveVisit(visit){
  return function(dispatch, getState){

    dispatch(beginAjaxCall());

    return visitApi.saveVisit(visit).then(savedVisit => {
      visit.id ? dispatch(updateVisitSuccess(savedVisit)) : dispatch(createVisitSuccess(savedVisit));
    }).catch(error => {
      dispatch(ajaxCallError(error));
      throw(error);
    });
  };
}
