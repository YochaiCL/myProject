import React from 'react'
import PageLayout from '../../layouts/pageLayout/PageLayout';
import Header from '../../../pageSettings/header/Header';
import LinkLayout from '../../../pageSettings/linkLayout/LinkLayout';
import style from './update.module.css';

export default function Update() {
  return (
    <PageLayout>
      <Header h1Heading='Update' />
      <section className={style.container}>
        <LinkLayout toLink='/updateAssemblies' nameLink='Update Assemblies' />
        <LinkLayout toLink='/updateComponents' nameLink='Update Components' />
      </section>
    </PageLayout>
  );
}
