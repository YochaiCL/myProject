import React, { Component } from 'react';
import Layout from '../../../../layout/pageLayout/PageLayout';
import Header from '../../../../../pageSettings/header/Header';
import LinkLayout from '../../../../../pageSettings/linkLayout/LinkLayout';
import style from './addCpuCooler.module.css'

export default class AddCpuCooler extends Component {
  render() {
    return (
      <Layout>
        <Header h1Heading='Add Cpu Cooler' />
        <section className={style.containerAddCpuCooler}>
          <LinkLayout toLink='/addCpuCoolerFan' nameLink='Add Cpu Cooler Fan' />
          <LinkLayout
            toLink='/addCpuCoolerLiquid'
            nameLink='Add Cpu Cooler Liquid'
          />
        </section>
      </Layout>
    );
  }
}
