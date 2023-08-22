import React from 'react';
import PageLayout from '../../layouts/pageLayout/PageLayout';
import Header from '../../../commonComponents/header/Header';
import LinkLayout from '../../../commonComponents/linkLayout/LinkLayout';
import style from './update.module.css';

/**
 * Description - This function display the links update of assembly and components
 * @returns - Updates links
 */
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
