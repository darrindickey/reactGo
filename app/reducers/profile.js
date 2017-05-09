import { combineReducers } from 'redux';
import * as types from '../types';

const userData = (
  state = [],
  action
) => {
  switch (action.type) {
    case types.REQUEST_SUCCESS:
      if (action.data) return action.data;
      return state;
    default:
      return state;
  }
};

const profileReducer = combineReducers({
  userData
});

export default profileReducer;
