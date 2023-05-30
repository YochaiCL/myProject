import React, { Component } from 'react';
import PageLayout from '../../../../layouts/pageLayout/PageLayout';
import Header from '../../../../../pageSettings/header/Header';
import style from '../../motherboard/products/productsMOTHERBOARD.module.css';

export default class ProductsRAM extends Component {
  state = {
    products: [{ model: 'Loading data...' }],
    showData: false,
    selectIndex: null,
  };

  async getProducts() {
    const response = await fetch('http://localhost:5000/getData/ram');
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
        <Header h1Heading='RAM Products' />
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
                  Model: {this.state.products[this.state.selectIndex].model}
                </h3>
                <h3>
                  Memory Series:
                  {this.state.products[this.state.selectIndex].memory_series}
                </h3>
                <h3>
                  Memory Size:
                  {this.state.products[this.state.selectIndex].memory_size}
                </h3>
                <h3>
                  Latency:
                  {this.state.products[this.state.selectIndex].latency}
                </h3>
                <h3>
                  Speed:
                  {this.state.products[this.state.selectIndex].speed}
                </h3>
              </div>
            </section>
          )}
        </section>
      </PageLayout>
    );
  }
}
