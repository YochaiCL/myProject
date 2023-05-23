import React from 'react';
import Layout from '../../layouts/mainLayout/MainLayout';
import Header from '../../../pageSettings/header/Header';

function About() {
  return (
    <Layout>
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
    </Layout>
  );
}

export default About;
