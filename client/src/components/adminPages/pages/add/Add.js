import React from 'react';
import PageLayout from '../../layouts/pageLayout/PageLayout';
import Header from '../../../commonComponents/header/Header';
import LinkLayout from '../../../commonComponents/linkLayout/LinkLayout';
import style from './add.module.css';

/**
 * Description - This function organize the add links in order
 * @returns
 */
export default function Add() {
  return (
    <PageLayout>
      <Header h1Heading='Add' />
      <section className={style.container}>
        <LinkLayout toLink='/addAssemblies' nameLink='Add Assemblies' />
        <LinkLayout toLink='/addComponents' nameLink='Add Components' />
      </section>
    </PageLayout>
  );
}
