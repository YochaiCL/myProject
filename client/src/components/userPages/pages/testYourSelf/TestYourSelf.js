import React from 'react';
import PageLayout from '../../layouts/pageLayout/PageLayout';
import Header from '../../../pageSettings/header/Header';
import LinkLayout from '../../../pageSettings/linkLayout/LinkLayout';
import style from './testYourSelf.module.css';
function TestYourSelf() {
  return (
    <PageLayout>
      <Header h1Heading='Test Your Self' />
      <section className={style.container}>
        <LinkLayout toLink='/testWithHelp' nameLink='Test With Help' />
        <LinkLayout toLink='/testWithoutHelp' nameLink='Test Without Help' />
        <LinkLayout toLink='/existsTests' nameLink='Exists Tests' />
      </section>
    </PageLayout>
  );
}

export default TestYourSelf;