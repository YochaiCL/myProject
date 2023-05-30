import React from 'react';
import Layout from '../../../../layouts/mainLayout/MainLayout';
import Header from '../../../../../pageSettings/header/Header';
import style from '../../ssd/products/productsSSD.module.css';
import LinkLayout from '../../../../../pageSettings/linkLayout/LinkLayout';

function ProductsCPUCOOLER() {
  return (
    <Layout>
      <Header h1Heading='SSD Products' />
      <section className={style.container}>
        <LinkLayout
          toLink='/productsCpuCoolerFan'
          nameLink='product Cpu Cooler Fan'
        />
        <LinkLayout
          toLink='/productsCpuCoolerLiquid'
          nameLink='product Cpu Cooler Liquid'
        />
      </section>
    </Layout>
  );
}

export default ProductsCPUCOOLER;
