import React, { Component } from 'react';
import Layout from '../layout/Layout';
import Header from '../../pageSettings/header/Header';

export default class QuestionAnswer extends Component {
  render() {
    return (
      <Layout>
        <Header h1Heading='Question Answer' />
      </Layout>
    );
  }
}
