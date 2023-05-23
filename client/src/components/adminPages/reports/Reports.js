import React from 'react';
import Layout from '../layout/Layout';
import Header from '../../pageSettings/header/Header';
import LinkLayout from '../../pageSettings/linkLayout/LinkLayout';
import style from './report.module.css';

export default function Reports() {
  return (
    <Layout>
      <Header h1Heading='Reports' />
      <section className={style.container}>
        <LinkLayout toLink='/userReports' nameLink='User Reports' />
        <LinkLayout toLink='/premiumReports' nameLink='Premium Reports' />
      </section>
    </Layout>
  );
}
