import React, { Component } from 'react';
import Page from '../pages/Page';
import PeopleContainer from '../containers/People';

class People extends Component {
  getMetaData() {
    return {
      title: this.pageTitle(),
      meta: this.pageMeta(),
      link: this.pageLink()
    };
  }

  pageTitle = () => {
    return 'People';
  };

  pageMeta = () => {
    return [
      { name: 'description', content: 'A list of users on a page' }
    ];
  };

  pageLink = () => {
    return [];
  };

  render() {
    return (
      <Page {...this.getMetaData()}>
        <PeopleContainer {...this.props} />
      </Page>
    );
  }
}

export default People;

