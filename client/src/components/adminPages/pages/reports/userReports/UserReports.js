import React, { Component } from 'react';
import PageLayout from '../../../layouts/pageLayout/PageLayout';
import Header from '../../../../commonComponents/header/Header';
export default class UserReports extends Component {
  render() {
    return (
      <PageLayout>
        <Header h1Heading='User Reports' />
      </PageLayout>
    );
  }
}
