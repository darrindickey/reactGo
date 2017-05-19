import { polyfill } from 'es6-promise';
import request from 'axios';
import md5 from 'spark-md5';
import * as types from '../types';

polyfill();

const getMessage = res => res.response && res.response.data && res.response.data.message;


// export function makeUserRequest(method, id, data, api = '/user') {
//   return request[method](api + (id ? ('/' + id) : ''), data);
// }

// export function updateUserError(message) {
//   return {
//     type: types.UPDATE_USER_ERROR,
//     message
//   };
// }

// export function beginUserUpdate() {
//   return { type: types.UPDATE_USER };
// }

// export function updateUserSuccess(message) {
//   return {
//     type: types.UPDATE_USER_SUCCESS,
//     message
//   };
// }

// export function updateProfile(data) {
//   return (dispatch) => {
//     dispatch(beginUserUpdate());

//     return makeUserRequest('post', data, '/user')
//       .then((response) => {
//         if (response.status === 200) {
//           dispatch(updateUserError(response.data.message));
//           dispatch(push('/profile/:username'));
//         } else {
//           dispatch(updateUserError('Oops! Something went wrong'));
//         }
//       })
//       .catch((err) => {
//         dispatch(updateUserError(getMessage(err)));
//       });
//   };
// }


// // export function signUp(data) {
// //   return (dispatch) => {
// //     dispatch(beginSignUp());

// //     return makeUserRequest('post', data, '/signup')
// //       .then((response) => {
// //         if (response.status === 200) {
// //           dispatch(signUpSuccess(response.data.message));
// //           dispatch(push('/'));
// //         } else {
// //           dispatch(signUpError('Oops! Something went wrong'));
// //         }
// //       })
// //       .catch((err) => {
// //         dispatch(signUpError(getMessage(err)));
// //       });
// //   };
// // }
