import React, { Component } from 'react';
import PageLayout from '../../../../layouts/pageLayout/PageLayout';
import Header from '../../../../../pageSettings/header/Header';
import LinkLayout from '../../../../../pageSettings/linkLayout/LinkLayout';
import style from './updateCpuCooler.module.css'

export default class UpdateCpuCooler extends Component {
  render() {
    return (
      <PageLayout>
        <Header h1Heading='Update Cpu Cooler' />
        <section className={style.containerAddCpuCooler}>
          <LinkLayout toLink='/updateCpuCoolerFan' nameLink='Update Cpu Cooler Fan' />
          <LinkLayout
            toLink='/updateCpuCoolerLiquid'
            nameLink='Update Cpu Cooler Liquid'
          />
        </section>
      </PageLayout>
    );
  }
}
