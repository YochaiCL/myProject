import React, { Component } from 'react';
import Footer from '../../../pageSettings/footer/Footer';
import Header from '../../../pageSettings/header/Header';
import Navbar from '../../navbar/Navbar';
import style from './adminHome.module.css';
import MainPageLayout from '../../layout/mainPageLayout/MainPageLayout';

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
      <div className={style.adminHome}>
        <Navbar />
        <Header h1Heading='PC BUILDER ADMIN' />

        <section className={style.section}>
          <MainPageLayout
            h2='Amount of users'
            text={this.state.amountOfUsers}
          />
          <MainPageLayout
            h2='Amount open questions'
            text={this.state.amountOfOpenQuestions}
          />
          <MainPageLayout
            h2='Amount close questions'
            text={this.state.amountOfClosedQuestions}
          />
          <MainPageLayout
            h2='Professional Data'
            text={this.state.professionalData}
          />
          <MainPageLayout h2='Overall user satisfaction' text='*****' />
        </section>

        <Footer />
      </div>
    );
  }
}
