import React from 'react';
import PageLayout from '../../layouts/pageLayout/PageLayout';
import Header from '../../../commonComponents/header/Header';
import LinkLayout from '../../../commonComponents/linkLayout/LinkLayout';
import style from './questionAnswer.module.css';

/**
 * Description -
 * @returns
 */
function QuestionAnswer() {
  return (
    <PageLayout>
      <Header h1Heading='Question/Answer' />
      <section className={style.container}>
        <LinkLayout toLink='/newQuestion' nameLink='New Question' />
        <LinkLayout toLink='/existsQuestions' nameLink='Exists Questions' />
      </section>
    </PageLayout>
  );
}

export default QuestionAnswer;
