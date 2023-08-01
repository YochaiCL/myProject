import React from 'react';
import PageLayout from '../../layouts/pageLayout/PageLayout';
import Header from '../../../commonComponents/header/Header';
import LinkLayout from '../../../commonComponents/linkLayout/LinkLayout';
import style from './questionAnswerUser.module.css';

/**
 * Description -
 * @returns
 */
function QuestionAnswerUser() {
  return (
    <PageLayout>
      <Header h1Heading='Question/Answer' />
      <section className={style.container}>
        <LinkLayout toLink='/newQuestion' nameLink='New Question' />
        <LinkLayout toLink='/existsQuestionsUser' nameLink='Exists Questions' />
      </section>
    </PageLayout>
  );
}

export default QuestionAnswerUser;
