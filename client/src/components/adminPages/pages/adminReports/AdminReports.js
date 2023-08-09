import React from 'react';
import PageLayout from '../../layouts/pageLayout/PageLayout';
import Header from '../../../commonComponents/header/Header';
import LinkLayout from '../../../commonComponents/linkLayout/LinkLayout';
import style from './adminReports.module.css';

/**
 * Description - This function shows the reports links
 * @returns - Reports links
 */
export default function AdminReports() {
  return (
    <PageLayout>
      <Header h1Heading='Reports' />
      <section className={style.container}>
        <LinkLayout
          toLink='/questionsAnswersReportAdmin'
          nameLink='Questions Answers Report'
        />
        <LinkLayout toLink='/usersDataReportAdmin' nameLink='Users Data Report' />

        <LinkLayout
          toLink='/learnedDataReport'
          nameLink='Most Learned Component'
        />
      </section>
    </PageLayout>
  );
}
