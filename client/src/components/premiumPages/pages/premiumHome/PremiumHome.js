import React, { Component } from 'react';
import Header from '../../../pageSettings/header/Header';
import style from './premiumHome.module.css';
import PageLayout from '../../layouts/pageLayout/PageLayout';

export default class PremiumHome extends Component {
  render() {
    return (
      <PageLayout>
        <div className={style.adminHome}>
          <Header h1Heading='PC BUILDER PREMIUM' />
        </div>
      </PageLayout>
    );
  }
}
