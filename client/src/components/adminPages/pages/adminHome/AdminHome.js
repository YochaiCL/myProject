import React, { Component } from 'react';
import Header from '../../../pageSettings/header/Header';
import style from './adminHome.module.css';
import DiagnosticInformationLayout from '../../layouts/diagnosticInformationLayout/DiagnosticInformationLayout';
import PageLayout from '../../layouts/pageLayout/PageLayout';

export default class AdminHome extends Component {
  // Initializing state variables for component properties
  state = {
    amountOfUsers: 0,
    amountOfOpenQuestions: 0,
    amountOfClosedQuestions: 0,
    overallUserSatisfaction: 0,
    professionalData: 'professional data',
  };
  render() {
    return (
      <PageLayout>
        <Header h1Heading='PC BUILDER ADMIN' />
        <div className={style.adminHome}>
          <section className={style.section}>
            <DiagnosticInformationLayout
              h2='Amount of users'
              text={this.state.amountOfUsers}
            />
            <DiagnosticInformationLayout
              h2='Amount open questions'
              text={this.state.amountOfOpenQuestions}
            />
            <DiagnosticInformationLayout
              h2='Amount close questions'
              text={this.state.amountOfClosedQuestions}
            />
            <DiagnosticInformationLayout
              h2='Professional Data'
              text={this.state.professionalData}
            />
            <DiagnosticInformationLayout
              h2='Overall user satisfaction'
              text='*****'
            />
          </section>
        </div>
      </PageLayout>
    );
  }
}
