import React, { Component } from 'react';
import PageLayout from '../../../../layouts/pageLayout/PageLayout';
import Header from '../../../../../commonComponents/header/Header';
import LinkLayout from '../../../../../commonComponents/linkLayout/LinkLayout';
import style from './updateCpuCooler.module.css';

/**
 * Description - This class show the links layout of the update cpu cooler
 */
export default class UpdateCpuCooler extends Component {
  render() {
    return (
      <PageLayout>
        <Header h1Heading='Update Cpu Cooler' />
        <section className={style.containerAddCpuCooler}>
          <LinkLayout
            toLink='/updateCpuCoolerFan'
            nameLink='Update Cpu Cooler Fan'
          />
          <LinkLayout
            toLink='/updateCpuCoolerLiquid'
            nameLink='Update Cpu Cooler Liquid'
          />
        </section>
      </PageLayout>
    );
  }
}
