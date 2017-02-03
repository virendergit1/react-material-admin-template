import * as types from './actionTypes';
import communityApi from '../api/mockCommunityApi';
import {beginAjaxCall, ajaxCallError} from './ajaxStatusActions';

export function loadCommunitiesSuccess(communities){
  return {type: types.LOAD_COMMUNITIES_SUCCESS, communities};
}

export function createCommunitySuccess(community){    
  return {type: types.CREATE_COMMUNITIES_SUCCESS, community};
}

export function updateCommunitySuccess(community){
  return {type: types.UPDATE_COMMUNITIES_SUCCESS, community};
}


export function loadCommunities(){
  return function(dispatch){

    dispatch(beginAjaxCall());

    return communityApi.getAllCommunities().then(communities => {
      dispatch(loadCommunitiesSuccess(communities));
    }).catch(error => {
      throw(error);
    });
  };
}

export function saveCommunity(community){
  return function(dispatch, getState){
    dispatch(beginAjaxCall());
    return communityApi.saveCommunity(community).then(savedCommunity => {
      dispatch(createCommunitySuccess(savedCommunity));
    }).catch(error => {
      dispatch(ajaxCallError(error));
      throw(error);
    });
  };
}
