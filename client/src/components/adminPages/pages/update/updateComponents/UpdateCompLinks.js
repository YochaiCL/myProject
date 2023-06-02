import React, { Component } from 'react';
import PageLayout from '../../../layouts/pageLayout/PageLayout';
import Header from '../../../../pageSettings/header/Header';
import LinkLayout from '../../../../pageSettings/linkLayout/LinkLayout';
import style from './updtateCompLinks.module.css';

export default class UpdateCompLinks extends Component {
  render() {
    return (
      <PageLayout>
        <Header h1Heading='Update Components' />
        <div className={style.all}>
          <section className={style.container}>
            <LinkLayout nameLink='SSD' toLink='/updateSsd' />

            <LinkLayout nameLink='CPU' toLink='/updateCpu' />

            <LinkLayout nameLink='GPU' toLink='/updateGpu' />

            <LinkLayout nameLink='PSU' toLink='/updatePsu' />
          </section>

          <section className={style.container}>
            <LinkLayout nameLink='CASE' toLink='/updateCase' />
            <LinkLayout nameLink='RAM' toLink='/updateRam' />
            <LinkLayout nameLink='FANS' toLink='/updateFans' />
          </section>

          <section className={style.container}>
            <LinkLayout nameLink='CPU COOLER' toLink='/updateCpuCooler' />
            <LinkLayout nameLink='Motherboard' toLink='/updateMotherboard' />
          </section>
        </div>
      </PageLayout>
    );
  }
}
