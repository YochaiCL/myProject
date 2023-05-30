import React from 'react';
import Layout from '../../layouts/mainLayout/MainLayout';
import Header from '../../../pageSettings/header/Header';
import LinkLayout from '../../../pageSettings/linkLayout/LinkLayout';
import style from './premium.module.css';

function Premium() {
  return (
    <Layout>
      <Header h1Heading='Premium' />
      <section className={style.container}>
        <LinkLayout toLink='/newQuestion' nameLink='New Question' />
        <LinkLayout toLink='/existsQuestions' nameLink='Exists Questions' />
      </section>
    </Layout>
  );
}

export default Premium;
