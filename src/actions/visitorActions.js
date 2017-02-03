import * as types from './actionTypes';
import visitorApi from '../api/mockVisitorApi';
import {beginAjaxCall, ajaxCallError} from './ajaxStatusActions';

export function loadVisitorsSuccess(visitors){
  return {type: types.LOAD_VISITORS_SUCCESS, visitors};
}

export function createVisitorSuccess(visitor){
  return {type: types.CREATE_VISITORS_SUCCESS, visitor};
}

export function updateVisitorSuccess(visitor){
  return {type: types.UPDATE_VISITORS_SUCCESS, visitor};
}


export function loadVisitors(){
  return function(dispatch){

    dispatch(beginAjaxCall());

    return visitorApi.getAllVisitors().then(visitors => {
      dispatch(loadVisitorsSuccess(visitors));
    }).catch(error => {
      throw(error);
    });
  };
}

export function saveVisitor(visitor){
  return function(dispatch, getState){

    dispatch(beginAjaxCall());

    return visitorApi.saveVisitor(visitor).then(savedVisitor => {
      visitor.id ? dispatch(updateVisitorSuccess(savedVisitor)) : dispatch(createVisitorSuccess(savedVisitor));
    }).catch(error => {
      dispatch(ajaxCallError(error));
      throw(error);
    });
  };
}
