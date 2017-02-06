import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function manageVisitorReducer(state = initialState.manageVisitors, action){
  switch(action.type){
    case types.LOAD_MANAGEVISITORS_SUCCESS:
      return action.manageVisitors;

    case types.CREATE_MANAGEVISITORS_SUCCESS:
      return [
        ...state,
        Object.assign({}, action.manageVisitor)
      ];

    case types.UPDATE_MANAGEVISITORS_SUCCESS:
      return [
        ...state.filter(manageVisitor => manageVisitor.id !== action.manageVisitor.id), Object.assign({}, action.manageVisitor)
      ];

    default:
      return state;
  }
}
