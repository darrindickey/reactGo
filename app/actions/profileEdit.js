import { polyfill } from 'es6-promise';
import request from 'axios';
import { push } from 'react-router-redux';

import * as types from '../types';

polyfill();

const getMessage = res => res.response && res.response.data && res.response.data.message;

function makeUserRequestForProfile(method, data, api = '/user') {
  return request[method](api, data);
}

// Profile Update Action Creators
export function beginProfileUpdate() {
  return { type: types.UPDATE_USER_PROFILE };
}

export function updateProfileSuccess(message, userId) {
  return {
    type: types.UPDATE_SUCCESS_USER,
    message,
    userId
  };
}

export function updateError(message) {
  return {
    type: types.UPDATE_ERROR_USER,
    message
  };
}

export function updateProfile(data) {
  const username = data.username;

  return (dispatch) => {
    dispatch(beginProfileUpdate());

    return makeUserRequestForProfile('put', data, `/user/${username}`)
      .then((response) => {
        if (response.status === 200) {
          dispatch(updateProfileSuccess(response.data.message));
          dispatch(push(`/profile/${username}/edit`));
        } else {
          dispatch(updateError('Oops! Something went wrong'));
        }
      })
      .catch((err) => {
        console.info('err', err)
        dispatch(updateError(getMessage(err)));
      });
  };
}

export function toggleEmailUpdateField() {
  return { type: types.TOGGLE_EMAIL_UPDATE_FIELD };
}
