import * as types from './actionTypes';
import incidentApi from '../api/mockIncidentApi';
import {beginAjaxCall, ajaxCallError} from './ajaxStatusActions';

export function loadIncidentsSuccess(incidents){
  return {type: types.LOAD_INCIDENTS_SUCCESS, incidents};
}

export function createIncidentSuccess(incident){
  return {type: types.CREATE_INCIDENTS_SUCCESS, incident};
}

export function updateIncidentSuccess(incident){
  return {type: types.UPDATE_INCIDENTS_SUCCESS, incident};
}


export function loadIncidents(){
  return function(dispatch){

    dispatch(beginAjaxCall());

    return incidentApi.getAllIncidents().then(incidents => {
      dispatch(loadIncidentsSuccess(incidents));
    }).catch(error => {
      throw(error);
    });
  };
}

export function saveIncident(incident){

  return function(dispatch, getState){

    dispatch(beginAjaxCall());

    return incidentApi.saveIncident(incident).then(savedIncident => {
      incident.id ? dispatch(updateIncidentSuccess(savedIncident)) : dispatch(createIncidentSuccess(savedIncident));
    }).catch(error => {
      dispatch(ajaxCallError(error));
      throw(error);
    });
  };
}
