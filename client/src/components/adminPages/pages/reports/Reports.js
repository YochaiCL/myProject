import React from 'react';
import PageLayout from '../../layouts/pageLayout/PageLayout';
import Header from '../../../commonComponents/header/Header';
import LinkLayout from '../../../commonComponents/linkLayout/LinkLayout';
import style from './report.module.css';

/**
 * Description -
 * @returns
 */
export default function Reports() {
  return (
    <PageLayout>
      <Header h1Heading='Reports' />
      <section className={style.container}>
        <LinkLayout
          toLink='/questionsAnswersReport'
          nameLink='Questions Answers Report'
        />
        <LinkLayout toLink='/usersDataReport' nameLink='Users Data Report' />

        <LinkLayout
          toLink='/learnedDataReport'
          nameLink='Most Learned Component'
        />
      </section>
    </PageLayout>
  );
}
