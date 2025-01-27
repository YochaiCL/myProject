import React, { Component } from 'react';
import PageLayout from '../../../layouts/pageLayout/PageLayout';
import Header from '../../../../commonComponents/header/Header';
import LinkLayout from '../../../../commonComponents/linkLayout/LinkLayout';
import style from './updtateCompLinks.module.css';

/**
 * Description - This function show the links layout of update components
 */
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
