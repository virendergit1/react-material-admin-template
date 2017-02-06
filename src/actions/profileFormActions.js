import * as types from './actionTypes';
import profileApi from '../api/mockProfileApi';
import {beginAjaxCall, ajaxCallError} from './ajaxStatusActions';

export function loadProfilesSuccess(profiles){
  return {type: types.LOAD_PROFILES_SUCCESS, profiles};
}

export function createProfileSuccess(profile){
  return {type: types.CREATE_PROFILES_SUCCESS, profile};
}

export function updateProfileSuccess(profile){
  return {type: types.UPDATE_PROFILES_SUCCESS, profile};
}


export function loadProfiles(){
  return function(dispatch){

    dispatch(beginAjaxCall());

    return profileApi.getAllProfiles().then(profiles => {
      dispatch(loadProfilesSuccess(profiles));
    }).catch(error => {
      throw(error);
    });
  };
}

export function saveProfile(profile){
  return function(dispatch, getState){

    dispatch(beginAjaxCall());

    return profileApi.saveProfile(profile).then(savedProfile => {
      profile.id ? dispatch(updateProfileSuccess(savedProfile)) : dispatch(createProfileSuccess(savedProfile));
    }).catch(error => {
      dispatch(ajaxCallError(error));
      throw(error);
    });
  };
}
