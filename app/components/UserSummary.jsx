import React from 'react';
// import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from '../css/components/user-summary.css';

const cx = classNames.bind(styles);

const UserSummary = ({ userList }) => {
  let id;
  let email;
  if (userList) {
    id = userList.id;
    email = userList.email;
  }
  // const {id, email} = userList;

  return (
    <li className={cx('user-summary')} key={id}>
      <span className={cx('user')} data-id={id}>{email}</span>
    </li>
  );
};

export default UserSummary;
