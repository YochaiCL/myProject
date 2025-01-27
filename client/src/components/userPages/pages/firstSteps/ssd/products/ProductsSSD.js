import React from 'react';
import PageLayout from '../../../../layouts/pageLayout/PageLayout';
import Header from '../../../../../commonComponents/header/Header';
import style from '../../ssd/products/productsSSD.module.css';
import LinkLayout from '../../../../../commonComponents/linkLayout/LinkLayout';

/**
 * Description - This function organize the ssd buttons layout
 * @returns - The ssd buttons layout
 */
function ProductsSSD() {
  return (
    <PageLayout>
      <Header h1Heading='SSD Products' />
      <section className={style.container}>
        <LinkLayout toLink='/productsSsdM2' nameLink='product SSD M2' />
        <LinkLayout toLink='/productsSsdSata' nameLink='product SSD Sata' />
      </section>
    </PageLayout>
  );
}

export default ProductsSSD;
