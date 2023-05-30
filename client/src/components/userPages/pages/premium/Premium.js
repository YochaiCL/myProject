import React from 'react';
import PageLayout from '../../layouts/pageLayout/PageLayout';
import Header from '../../../pageSettings/header/Header';
import LinkLayout from '../../../pageSettings/linkLayout/LinkLayout';
import style from './premium.module.css';

function Premium() {
  return (
    <PageLayout>
      <Header h1Heading='Premium' />
      <section className={style.container}>
        <LinkLayout toLink='/newQuestion' nameLink='New Question' />
        <LinkLayout toLink='/existsQuestions' nameLink='Exists Questions' />
      </section>
    </PageLayout>
  );
}

export default Premium;
