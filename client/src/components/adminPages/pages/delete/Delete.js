import React from 'react';
import PageLayout from '../../layouts/pageLayout/PageLayout';
import Header from '../../../commonComponents/header/Header';
import LinkLayout from '../../../commonComponents/linkLayout/LinkLayout';
import style from './delete.module.css';

/**
 * Description - This function organize the delete links in some order
 */
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
