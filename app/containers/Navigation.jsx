import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import classNames from 'classnames/bind';
import { logOut } from '../actions/auth';
import styles from '../css/components/navigation';

const cx = classNames.bind(styles);

const Navigation = ({ user, logOut }) => {
  let peopleLink;
  let profileLink;
  if (user.authenticated) {
    peopleLink = <Link className={cx('item')} to="/people">People</Link>
    profileLink = <Link className={cx('item')} to="/profile/darrindickey">Profile</Link>
  }
  return (
    <nav className={cx('navigation')} role="navigation">
      <Link
        to="/"
        className={cx('item', 'logo')}
        activeClassName={cx('active')}>Smok'd</Link>
        { user.authenticated ? (
          <Link
            onClick={logOut}
            className={cx('item')} to="/">Logout</Link>
        ) : (
          <Link className={cx('item')} to="/login">Log in</Link>
        )}
      {peopleLink}
      {profileLink}
      <Link className={cx('item')} to="/dashboard">Dashboard</Link>
      <Link to="/about" className={cx('item')} activeClassName={cx('active')}>About</Link>
    </nav>
  );
};

Navigation.propTypes = {
  user: PropTypes.object,
  logOut: PropTypes.func.isRequired
};

function mapStateToProps(state) {
  return {
    user: state.user
  };
}

export default connect(mapStateToProps, { logOut })(Navigation);
