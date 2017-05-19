import { combineReducers } from 'redux';
import * as types from '../types';

const userData = (
  state = [],
  action
) => {
  switch (action.type) {
    case types.REQUEST_SUCCESS:
    case types.UPDATE_SUCCESS_USER:
      if (action.data) return action.data;
      return state;
    default:
      return state;
  }
};

const isEditing = (
  state = false,
  action
) => {
  switch (action.type) {
    case types.TOGGLE_EMAIL_UPDATE_FIELD:
      return !state;
    default:
      return state;
  }
};

const isWaiting = (
  state = false,
  action
) => {
  switch (action.type) {
    case types.CREATE_REQUEST:
    case types.UPDATE_USER_PROFILE:
      return true;
    case types.REQUEST_SUCCESS:
    case types.UPDATE_SUCCESS_USER:
    case types.UPDATE_ERROR_USER:
      return false;
    default:
      return state;
  }
};

const profileReducer = combineReducers({
  userData,
  isEditing,
  isWaiting
});

export default profileReducer;
