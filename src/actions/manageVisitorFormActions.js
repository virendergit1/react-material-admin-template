import * as types from './actionTypes';
import manageVisitorApi from '../api/mockManageVisitorApi';
import {beginAjaxCall, ajaxCallError} from './ajaxStatusActions';

export function loadManageVisitorsSuccess(manageVisitors){
  return {type: types.LOAD_MANAGEVISITORS_SUCCESS, manageVisitors};
}

export function createManageVisitorSuccess(manageVisitor){
  return {type: types.CREATE_MANAGEVISITORS_SUCCESS, manageVisitor};
}

export function updateManageVisitorSuccess(manageVisitor){
  return {type: types.UPDATE_MANAGEVISITORS_SUCCESS, manageVisitor};
}


export function loadManageVisitors(){
  return function(dispatch){

    dispatch(beginAjaxCall());

    return manageVisitorApi.getAllManageVisitors().then(manageVisitors => {
      dispatch(loadManageVisitorsSuccess(manageVisitors));
    }).catch(error => {
      throw(error);
    });
  };
}

export function saveManageVisitor(manageVisitor){
  return function(dispatch, getState){

    dispatch(beginAjaxCall());

    return manageVisitorApi.saveManageVisitor(manageVisitor).then(savedManageVisitor => {
      manageVisitor.id ? dispatch(updateManageVisitorSuccess(savedManageVisitor)) : dispatch(createManageVisitorSuccess(savedManageVisitor));
    }).catch(error => {
      dispatch(ajaxCallError(error));
      throw(error);
    });
  };
}
