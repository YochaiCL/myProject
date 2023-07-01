import React from 'react';
import PageLayout from '../../layouts/pageLayout/PageLayout';
import Header from '../../../pageSettings/header/Header';

/**
 * Description - This function display the about page
 * @returns - About page
 */
function About() {
  return (
    <PageLayout>
      <Header h1Heading='About' />
      <article>
        <p>
          This system comes to give those populations the ability to deal with
          difficulties of understanding the hardware of the computer, its
          components and the possibility of assembling it, including the ability
          to compare different components until finding the optimal computer
          that meets their requirement.
        </p>
      </article>
    </PageLayout>
  );
}

export default About;
