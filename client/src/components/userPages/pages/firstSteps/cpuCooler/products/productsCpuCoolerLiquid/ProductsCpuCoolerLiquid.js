import React, { Component } from 'react';
import PageLayout from '../../../../../layouts/pageLayout/PageLayout';
import Header from '../../../../../../pageSettings/header/Header';
import style from '../../../motherboard/products/productsMOTHERBOARD.module.css';

export default class ProductsCpuCoolerLiquid extends Component {
  state = {
    products: [{ model: 'Loading data...' }],
    showData: false,
    selectIndex: null,
  };

  async getProducts() {
    const response = await fetch(
      'http://localhost:5000/getData/cpuCoolerLiquid'
    );
    const result = await response.json();
    console.log(result);
    this.setState({ products: result });
  }

  componentDidMount() {
    this.getProducts();
  }

  handelClick = index => {
    this.setState({
      showData: true,
      selectIndex: index,
    });
  };
  render() {
    return (
      <PageLayout>
        <Header h1Heading='Cpu Cooler Liquid Products' />
        <section className={style.external}>
          <section className={style.model}>
            <h2>List Of Products</h2>
            {this.state.products.map((product, index) => (
              <section key={index}>
                <button
                  onClick={() => {
                    this.handelClick(index);
                  }}
                  className={style.productButton}
                >
                  {product.model}
                </button>
              </section>
            ))}
          </section>
          {this.state.showData && this.state.selectIndex !== null && (
            <section className={style.showAllData}>
              <h2 className={style.h2}>Product Data</h2>
              <div>
                <h3>
                  <span className={style.span}> Model:</span>
                  {this.state.products[this.state.selectIndex].model}
                </h3>
                <h3>
                  <span className={style.span}>Socket_Support:</span>

                  {this.state.products[this.state.selectIndex].socket_support}
                </h3>
                <h3>
                  <span className={style.span}>Radiator Size:</span>

                  {this.state.products[this.state.selectIndex].radiator_size}
                </h3>
              </div>
            </section>
          )}
        </section>
      </PageLayout>
    );
  }
}
