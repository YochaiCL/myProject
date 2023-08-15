import React from 'react';
import PageLayout from '../../../layouts/pageLayout/PageLayout';
import Header from '../../../../commonComponents/header/Header';
import LinkLayout from '../../../../commonComponents/linkLayout/LinkLayout';
import style from './addCompLinks.module.css';

/**
 * Description - This function organize all component's links in some order
 * @returns - components links
 */
export default function AddCompLinks() {
  return (
    <PageLayout>
      <Header h1Heading='Choose Component Type' />
      <div className={style.all}>
        <section className={style.container}>
          <LinkLayout nameLink='SSD' toLink='/addSsd' />

          <LinkLayout nameLink='CPU' toLink='/addCpu' />

          <LinkLayout nameLink='GPU' toLink='/addGpu' />

          <LinkLayout nameLink='PSU' toLink='/addPsu' />
        </section>

        <section className={style.container}>
          <LinkLayout nameLink='CASE' toLink='/addCase' />
          <LinkLayout nameLink='RAM' toLink='/addRam' />
        </section>

        <section className={style.container}>
          <LinkLayout nameLink='CPU COOLER' toLink='/addCpuCooler' />
          <LinkLayout nameLink='Motherboard' toLink='/addMotherboard' />
        </section>
      </div>
    </PageLayout>
  );
}
