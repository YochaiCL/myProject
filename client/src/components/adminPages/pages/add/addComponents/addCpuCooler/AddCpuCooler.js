import React, { Component } from 'react';
import PageLayout from '../../../../layouts/pageLayout/PageLayout';
import Header from '../../../../../pageSettings/header/Header';
import LinkLayout from '../../../../../pageSettings/linkLayout/LinkLayout';
import style from './addCpuCooler.module.css'

export default class AddCpuCooler extends Component {
  render() {
    return (
      <PageLayout>
        <Header h1Heading='Add Cpu Cooler' />
        <section className={style.containerAddCpuCooler}>
          <LinkLayout toLink='/addCpuCoolerFan' nameLink='Add Cpu Cooler Fan' />
          <LinkLayout
            toLink='/addCpuCoolerLiquid'
            nameLink='Add Cpu Cooler Liquid'
          />
        </section>
      </PageLayout>
    );
  }
}
