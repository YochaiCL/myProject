import React from 'react'
import PageLayout from '../../layouts/pageLayout/PageLayout';
import Header from '../../../commonComponents/header/Header';
import LinkLayout from '../../../commonComponents/linkLayout/LinkLayout';
import style from './update.module.css';

export default function Update() {
  return (
    <PageLayout>
      <Header h1Heading='Update' />
      <section className={style.container}>
        <LinkLayout toLink='/updateAssemblies' nameLink='Update Assemblies' />
        <LinkLayout toLink='/updateCompLinks' nameLink='Update Components' />
      </section>
    </PageLayout>
  );
}
