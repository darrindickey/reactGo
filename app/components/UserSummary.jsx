import React from 'react';
// import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from '../css/components/user-summary.css';

const cx = classNames.bind(styles);

const UserSummary = ({ user }) => {
  let id;
  let email;
  let username;

  if (user) {
    id = user.id;
    email = user.email;
    username = user.profile.username;
  }
  // const {id, email} = userList;

  return (
    <li className={cx('user-summary')} key={id}>
      <span className={cx('user')} data-id={id}>{username}</span>
    </li>
  );
};

export default UserSummary;
