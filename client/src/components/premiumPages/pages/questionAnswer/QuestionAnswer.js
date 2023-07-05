import React, { Component } from 'react';
import PageLayout from '../../layouts/pageLayout/PageLayout';
import Header from '../../../commonComponents/header/Header';

export default class QuestionAnswer extends Component {
  render() {
    return (
      <PageLayout>
        <Header h1Heading='Question Answer' />
      </PageLayout>
    );
  }
}
