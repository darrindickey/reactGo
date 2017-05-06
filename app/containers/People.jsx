import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import classNames from 'classnames/bind';
import styles from '../css/components/users';
import UserSummary from '../components/UserSummary';

const cx = classNames.bind(styles);

class People extends Component {
  render() {
    const { userList } = this.props;

    return (
      <div className={cx('user')}>
        <ul>
          <UserSummary userList={userList} />
        </ul>
      </div>
    );
  }
}

People.propTypes = {
  userList: PropTypes.object
};

function mapStateToProps(state) {
  return {
    userList: state.userList.userList[0]
  };
}

export default connect(mapStateToProps, { })(People);
