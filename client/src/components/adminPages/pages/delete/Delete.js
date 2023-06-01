import React from 'react'
import PageLayout from '../../layouts/pageLayout/PageLayout';
import Header from '../../../pageSettings/header/Header';
import LinkLayout from '../../../pageSettings/linkLayout/LinkLayout';
import style from './delete.module.css';

export default function Delete() {
  return (
    <PageLayout>
      <Header h1Heading='Delete' />
      <section className={style.container}>
        <LinkLayout toLink='/deleteAssemblies' nameLink='Delete Assemblies' />
        <LinkLayout toLink='/deleteComponents' nameLink='Delete Components' />
      </section>
    </PageLayout>
  );
}
