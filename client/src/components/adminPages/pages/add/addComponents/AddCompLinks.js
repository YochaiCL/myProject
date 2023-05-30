import React from 'react';
import PageLayout from '../../../layouts/pageLayout/PageLayout';
import Header from '../../../../pageSettings/header/Header';
import LinkLayout from '../../../../pageSettings/linkLayout/LinkLayout';
import style from './addCompLinks.module.css';

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
          <LinkLayout nameLink='FANS' toLink='/addFans' />
        </section>

        <section className={style.container}>
          <LinkLayout nameLink='CPU COOLER' toLink='/addCpuCooler' />
          <LinkLayout nameLink='Motherboard' toLink='/addMotherboard' />
        </section>
      </div>
    </PageLayout>
  );
}
