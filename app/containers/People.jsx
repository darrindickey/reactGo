import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import classNames from 'classnames/bind';
import _ from 'lodash';
import styles from '../css/components/users';
import UserSummary from '../components/UserSummary';

const cx = classNames.bind(styles);

class People extends Component {
  render() {
    const { userList } = this.props;
    const eachUser = _.map(userList, (user, index) => {
      return <UserSummary key={index} user={user} />;
    });

    return (
      <div className={cx('user')}>
        <ul>
          {eachUser}
        </ul>
      </div>
    );
  }
}

People.propTypes = {
  userList: PropTypes.array
};

function mapStateToProps(state) {
  return {
    userList: state.userList.userList
  };
}

export default connect(mapStateToProps, { })(People);
