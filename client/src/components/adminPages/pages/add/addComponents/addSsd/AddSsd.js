import React, { Component } from 'react';
import PageLayout from '../../../../layouts/pageLayout/PageLayout';
import Header from '../../../../../pageSettings/header/Header';
import style from './addSsd.module.css';
import LinkLayout from '../../../../../pageSettings/linkLayout/LinkLayout';

export default class AddSsd extends Component {
  render() {
    return (
      <PageLayout>
        <Header h1Heading='Add SSD' />
        <section className={style.container}>
          <LinkLayout toLink='/addSsdM2' nameLink='Add SSD M2' />
          <LinkLayout toLink='/addSsdSata' nameLink='Add SSD Sata' />
        </section>
      </PageLayout>
    );
  }
}
