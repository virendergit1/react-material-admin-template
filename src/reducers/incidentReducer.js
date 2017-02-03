import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function incidentReducer(state = initialState.incidents, action){
  switch(action.type){
    case types.LOAD_INCIDENTS_SUCCESS:
      return action.incidents;

    case types.CREATE_INCIDENTS_SUCCESS:
      return [
        ...state,
        Object.assign({}, action.incident)
      ];

    case types.UPDATE_INCIDENTS_SUCCESS:
      return [
        ...state.filter(incident => incident.id !== action.incident.id), Object.assign({}, action.incident)
      ];

    default:
      return state;
  }
}
