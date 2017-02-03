import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function visitReducer(state = initialState.visits, action){
  switch(action.type){
    case types.LOAD_VISITS_SUCCESS:
      return action.visits;

    case types.CREATE_VISITS_SUCCESS:
      return [
        ...state,
        Object.assign({}, action.visit)
      ];

    case types.UPDATE_VISITS_SUCCESS:
      return [
        ...state.filter(visit => visit.id !== action.visit.id), Object.assign({}, action.visit)
      ];

    default:
      return state;
  }
}
