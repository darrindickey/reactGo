import React, { Component } from 'react';
import Page from '../pages/Page';
import ProfileEditContainer from '../containers/ProfileEdit';

class ProfileEdit extends Component {
  getMetaData() {
    return {
      title: this.pageTitle(),
      meta: this.pageMeta(),
      link: this.pageLink()
    };
  }

  pageTitle = () => {
    return 'Profile';
  };

  pageMeta = () => {
    return [
      { name: 'description', content: 'Edit your profile...' }
    ];
  };

  pageLink = () => {
    return [];
  };

  render() {
    return (
      <Page {...this.getMetaData()}>
        <ProfileEditContainer {...this.props} />
      </Page>
    );
  }
}

export default ProfileEdit;
