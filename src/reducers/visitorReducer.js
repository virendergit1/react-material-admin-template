import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function visitorReducer(state = initialState.visitors, action){
  switch(action.type){
    case types.LOAD_VISITORS_SUCCESS:
      return action.visitors;

    case types.CREATE_VISITORS_SUCCESS:
      return [
        ...state,
        Object.assign({}, action.visitor)
      ];

    case types.UPDATE_VISITORS_SUCCESS:
      return [
        ...state.filter(visitor => visitor.id !== action.visitor.id), Object.assign({}, action.visitor)
      ];

    default:
      return state;
  }
}
