import React from 'react';
import Layout from '../../../../layouts/mainLayout/MainLayout';
import Header from '../../../../../pageSettings/header/Header';
import style from '../../ssd/products/productsSSD.module.css';
import LinkLayout from '../../../../../pageSettings/linkLayout/LinkLayout';

function ProductsSSD() {
  return (
    <Layout>
      <Header h1Heading='SSD Products' />
      <section className={style.container}>
        <LinkLayout toLink='/productsSsdM2' nameLink='product SSD M2' />
        <LinkLayout toLink='/productsSsdSata' nameLink='product SSD Sata' />
      </section>
    </Layout>
  );
}

export default ProductsSSD;
