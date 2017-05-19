import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import classNames from 'classnames/bind';
import { field, reduxForm } from 'redux-form';
import _ from 'lodash';
import { updateProfile, toggleEmailUpdateField } from '../actions/profileEdit';
import styles from '../css/components/profile-edit';
import hourGlassSvg from '../images/hourglass.svg';
// import UserSummary from '../components/UserSummary';

const cx = classNames.bind(styles);

@reduxForm({ form: 'ProfileEdit' })

class ProfileEdit extends Component {
  constructor(props) {
    super(props);
    this.handleOnChange = this.handleOnChange.bind(this);
    this.handleOnSubmit = this.handleOnSubmit.bind(this);
  }

  handleOnSubmit = (values) => {
    event.preventDefault();

    const { updateProfile } = this.props;
    const targetValue = values.target;
    const options = {
      email: targetValue.email.value,
      username: targetValue.username.value,
      first_name: targetValue.first_name.value,
      last_name: targetValue.last_name.value,
      display_name: targetValue.display_name.value,
      user_facebook: targetValue.user_facebook.value,
      user_twitter: targetValue.user_twitter.value,
      user_instagram: targetValue.user_instagram.value,
      user_foursquare: targetValue.user_foursquare.value,
      user_google_plus: targetValue.user_google_plus.value
    };
    updateProfile(options);
  }

  handleOnChange = (event) => {
    event.preventDefault();

    // const target = event.target;
    // const value = target.value;
    // const name = target.name;

    // this.setState({
    //   [name]: value
    // });
  }

  showEmailUpdateForm = (e) => {
    toggleEmailUpdateField();
    const { isEditing } = this.props.isEditing;
    if (isEditing) {
      updateEmail({ email });
    } else {
      return null
    }
  };

  render() {
    let emailField;
    const { userData, isEditing, toggleEmailUpdateField } = this.props;

    const email = userData.email ? userData.email : undefined;
    const username = userData.profile ? userData.profile.username : this.props.params.username;
    const firstName = userData.profile ? userData.profile.first_name : undefined;
    const lastName = userData.profile ? userData.profile.last_name : undefined;
    const displayName = userData.profile ? userData.profile.display_name : undefined;
    const userFacebook = userData.profile ? userData.profile.user_facebook : undefined;
    const userTwitter = userData.profile ? userData.profile.user_twitter : undefined;
    const userInstagram = userData.profile ? userData.profile.user_instagram : undefined;
    const userFoursquare = userData.profile ? userData.profile.user_foursquare : undefined;
    const userGooglePlus = userData.profile ? userData.profile.user_google_plus : undefined;
    const emailClass = isEditing ? 'input show' : 'input hide';

    if (!isEditing) {
      emailField = (
        <div className={cx('input-section')}>
          <div className={cx('email-static')}>{email}</div>
          <a className={cx('toggle-edit')} onClick={toggleEmailUpdateField}>Click to change</a>
        </div>
      );
    } else {
      emailField = (
        <div className={cx('input-section')}>
          <input
            className={cx('input')}
            type="email"
            placeholder="E-mail"
            name="email"
            defaultValue={email}
            onChange={this.handleOnChange}
          />
          <a className={cx('toggle-edit')} onClick={toggleEmailUpdateField}>Cancel</a>
        </div>
      );
    }

    if (!_.isEmpty(userData)) {
      return (
        <div className={cx('profile-form-wrapper')}>
          <div className={cx('profile-edit-form')}>
            <form onSubmit={this.handleOnSubmit}>
              <div className={cx('profile-form-section')}>
                <div className={cx('label-section')}>
                  <span className={cx('form-section-label')}>
                    Account Information
                  </span>
                </div>
                <div className={cx('input-section')}>
                  {emailField}
                </div>
              </div>
              <div className={cx('profile-form-section')}>
                <div className={cx('label-section')}>
                  <span className={cx('form-section-label')}>
                    Profile Information
                  </span>
                </div>
                <div className={cx('input-section')}>
                  <input
                    className={cx('input')}
                    type="username"
                    placeholder="Choose a Unique Username"
                    name="username"
                    defaultValue={username}
                    onChange={this.handleOnChange}
                  />
                  <input
                    className={cx('input')}
                    type="firstName"
                    placeholder="First Name"
                    name="first_name"
                    defaultValue={firstName}
                    onChange={this.handleOnChange}
                  />
                  <input
                    className={cx('input')}
                    type="lastName"
                    placeholder="Last Name"
                    name="last_name"
                    defaultValue={lastName}
                    onChange={this.handleOnChange}
                  />
                  <input
                    className={cx('input')}
                    type="displayName"
                    placeholder="Display Name"
                    name="display_name"
                    defaultValue={displayName}
                    onChange={this.handleOnChange}
                  />
                </div>
              </div>
              <div className={cx('profile-form-section')}>
                <div className={cx('label-section')}>
                  <span className={cx('form-section-label')}>
                    Be Social
                  </span>
                </div>
                <div className={cx('input-section')}>
                  <div className={cx('input-row')}>
                    <span className={cx('social-url')}>
                      www.facebook.com/
                    </span>
                    <input
                      className={cx('social-input')}
                      type="userFacebook"
                      placeholder="Facebook Address"
                      name="user_facebook"
                      defaultValue={userFacebook}
                      onChange={this.handleOnChange}
                    />
                  </div>
                  <div className={cx('input-row')}>
                    <span className={cx('social-url')}>
                      www.twitter.com/
                    </span>
                    <input
                      className={cx('social-input')}
                      type="userTwiiter"
                      placeholder="Twitter Address"
                      name="user_twitter"
                      defaultValue={userTwitter}
                      onChange={this.handleOnChange}
                    />
                  </div>
                  <div className={cx('input-row')}>
                    <span className={cx('social-url')}>
                      www.instagram.com/
                    </span>
                    <input
                      className={cx('social-input')}
                      type="userInstagram"
                      placeholder="Instagram Address"
                      name="user_instagram"
                      defaultValue={userInstagram}
                      onChange={this.handleOnChange}
                    />
                  </div>
                  <div className={cx('input-row')}>
                    <span className={cx('social-url')}>
                      www.swarmapp.com/
                    </span>
                    <input
                      className={cx('social-input')}
                      type="userFoursquare"
                      placeholder="Foursquare Address"
                      name="user_foursquare"
                      defaultValue={userFoursquare}
                      onChange={this.handleOnChange}
                    />
                  </div>
                  <div className={cx('input-row')}>
                    <span className={cx('social-url')}>
                      plus.google.com/+
                    </span>
                    <input
                      className={cx('social-input')}
                      type="userGooglePlus"
                      placeholder="Google Plus Address"
                      name="user_google_plus"
                      defaultValue={userGooglePlus}
                      onChange={this.handleOnChange}
                    />
                  </div>
                </div>
              </div>
              <button
                className={cx('button')}
                type="submit"
              >Update
              </button>
            </form>
          </div>
        </div>
      );
    } else {
      return (
        <img className={cx('loading')} alt="loading" src={hourGlassSvg} />
      );
    }
  }
}

ProfileEdit.propTypes = {
  updateProfile: PropTypes.func.isRequired,
  toggleEmailUpdateField: PropTypes.func.isRequired
};

function mapStateToProps(state) {
  return {
    userData: state.profileReducer.userData,
    isEditing: state.profileReducer.isEditing
  };
}

export default connect(mapStateToProps, { updateProfile, toggleEmailUpdateField })(ProfileEdit);
