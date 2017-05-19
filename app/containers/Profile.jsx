import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import classNames from 'classnames/bind';
import styles from '../css/components/users';
// import UserSummary from '../components/UserSummary';

const cx = classNames.bind(styles);

class Profile extends Component {
  render() {
    const { userData } = this.props;

    return (
      <div className={cx('user')}>
        <p>Profile stuff here.</p>
      </div>
    );
  }
}

Profile.propTypes = {
  userData: PropTypes.object
};

function mapStateToProps(state) {
  return {
    userData: state.profileReducer.userData
  };
}

export default connect(mapStateToProps, {})(Profile);
