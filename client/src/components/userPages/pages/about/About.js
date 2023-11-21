import React from 'react';
import PageLayout from '../../layouts/pageLayout/PageLayout';
import Header from '../../../commonComponents/header/Header';
import style from './about.module.css';

/**
 * Description - This function display the about page
 * @returns - About page
 */
function About() {
  return (
    <PageLayout>
      <Header h1Heading='About' />
      <article>
        <p className={style.p}>
          Most of the population does not know how to choose the right hardware
          for them and how to assemble a computer themselves. The same
          population relies on sales and marketing people to give them the
          answers to these questions, but sometimes those sales people have an
          interest in selling items based on excess inventory or sales
          promotions that are not always suitable or limit the consumer in the
          future to improve the computer as he wishes.
        </p>
        <p className={style.p}>
          Also, there is also a considerable part of the population that is not
          sure what our requirements are for buying a computer due to little
          knowledge on the subject, therefore learning this will answer the
          population and provide the knowledge required to understand the
          hardware and self-build the computer.
        </p>
        <h3 className={style.h3}>Interactions</h3>
        <ul className={style.ul}>
          <li>
            Learn the hardware - In "First Steps" you can study the components
            of the computer
          </li>
          <li>
            Learn how to assembly - In "Assembly" you can study how to create
            working assembly
          </li>
          <li>
            Test it - In "Test Your Self' you can create assembly and test if it
            work{' '}
          </li>
          <li>For any questions you can connect our "Question / Answer"</li>
        </ul>
      </article>
    </PageLayout>
  );
}

export default About;
