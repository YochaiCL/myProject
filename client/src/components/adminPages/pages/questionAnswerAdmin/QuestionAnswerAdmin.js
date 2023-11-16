import React from 'react';
import PageLayout from '../../layouts/pageLayout/PageLayout';
import Header from '../../../commonComponents/header/Header';
import LinkLayout from '../../../commonComponents/linkLayout/LinkLayout';
import style from './questionAnswerAdmin.module.css';

/**
 * Description - This function define the links of premium & admin Questions
 * @returns - Question links
 */
function QuestionAnswerAdmin() {
  return (
    <PageLayout>
      <Header h1Heading='Question/Answer' />
      <section className={style.container}>
        <LinkLayout toLink='/premiumQuestions' nameLink='PremiumQuestions' />
        <LinkLayout toLink='/adminQuestions' nameLink='AdminQuestions' />
      </section>
    </PageLayout>
  );
}

export default QuestionAnswerAdmin;
