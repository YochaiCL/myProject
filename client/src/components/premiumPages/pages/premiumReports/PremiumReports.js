import React from 'react';
import PageLayout from '../../layouts/pageLayout/PageLayout';
import Header from '../../../commonComponents/header/Header';
import LinkLayout from '../../../commonComponents/linkLayout/LinkLayout';
import style from './premiumReports.module.css';

export default function PremiumReports() {
  return (
    <PageLayout>
      <Header h1Heading='Reports' />
      <section className={style.container}>
        <LinkLayout
          toLink='/questionsAnswersReportPremium'
          nameLink='Questions Answers Report'
        />
        <LinkLayout toLink='/usersDataReportPremium' nameLink='Users Data Report' />
      </section>
    </PageLayout>
  );
}
