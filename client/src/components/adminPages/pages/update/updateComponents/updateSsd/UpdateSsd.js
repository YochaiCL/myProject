import React, { Component } from 'react';
import PageLayout from '../../../../layouts/pageLayout/PageLayout';
import Header from '../../../../../commonComponents/header/Header';
import style from './updateSsd.module.css';
import LinkLayout from '../../../../../commonComponents/linkLayout/LinkLayout';

export default class UpdateSsd extends Component {
  render() {
    return (
      <PageLayout>
        <Header h1Heading='Update SSD' />
        <section className={style.container}>
          <LinkLayout toLink='/updateSsdM2' nameLink='Update SSD M2' />
          <LinkLayout toLink='/updateSsdSata' nameLink='Update SSD Sata' />
        </section>
      </PageLayout>
    );
  }
}
