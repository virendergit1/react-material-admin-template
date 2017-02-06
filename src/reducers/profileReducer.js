import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function profileReducer(state = initialState.profiles, action){
  switch(action.type){
    case types.LOAD_PROFILES_SUCCESS:
      return action.profiles;

    case types.CREATE_PROFILES_SUCCESS:
      return [
        ...state,
        Object.assign({}, action.profile)
      ];

    case types.UPDATE_PROFILES_SUCCESS:
      return [
        ...state.filter(profile => profile.id !== action.profile.id), Object.assign({}, action.profile)
      ];

    default:
      return state;
  }
}
