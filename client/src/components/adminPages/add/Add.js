import React from 'react';
import Layout from '../layout/pageLayout/PageLayout';
import Header from '../../pageSettings/header/Header';
import LinkLayout from '../../pageSettings/linkLayout/LinkLayout';
import style from './add.module.css';

export default function Add() {
  return (
    <Layout>
      <Header h1Heading='Add' />
      <section className={style.container}>
        <LinkLayout toLink='/addAssemblies' nameLink='Add Assemblies' />
        <LinkLayout toLink='/addComponents' nameLink='Add Components' />
      </section>
    </Layout>
  );
}
