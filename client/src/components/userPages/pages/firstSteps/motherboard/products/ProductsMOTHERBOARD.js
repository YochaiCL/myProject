import React, { Component } from 'react';
import PageLayout from '../../../../layouts/pageLayout/PageLayout';
import Header from '../../../../../pageSettings/header/Header';
import style from './productsMOTHERBOARD.module.css';

export default class ProductsMOTHERBOARD extends Component {
  state = {
    products: [{ model: 'Loading data...' }],
    showData: false,
    selectedIndex: null,
  };

  async getProducts() {
    const response = await fetch('http://localhost:5000/getData/motherboard');
    const result = await response.json();
    console.log(result);
    this.setState({ products: result });
  }

  componentDidMount() {
    this.getProducts();
  }

  handleClick = index => {
    this.setState({
      showData: true,
      selectedIndex: index,
    });
  };

  render() {
    return (
      <PageLayout>
        <Header h1Heading='Motherboard Products' />
        <section className={style.external}>
          <section className={style.model}>
            <h2>List Of Products</h2>
            {this.state.products.map((product, index) => (
              <section key={index}>
                <button
                  onClick={() => {
                    this.handleClick(index);
                  }}
                  className={style.productButton}
                >
                  {product.model}
                </button>
              </section>
            ))}
          </section>
          {this.state.showData && this.state.selectedIndex !== null && (
            <section className={style.showAllData}>
              <h2 className={style.h2}>Product Data</h2>
              <div>
                <h3>
                  Model: {this.state.products[this.state.selectedIndex].model}
                </h3>
                <h3>
                  CPU Socket Support:{' '}
                  {
                    this.state.products[this.state.selectedIndex]
                      .cpu_socket_support
                  }
                </h3>
                <h3>
                  Chipset:{' '}
                  {this.state.products[this.state.selectedIndex].chipset}
                </h3>
                <h3>
                  Memory: {this.state.products[this.state.selectedIndex].memory}
                </h3>
                <h3>
                  Form Factor:{' '}
                  {this.state.products[this.state.selectedIndex].form_factor}
                </h3>
                <h3>
                  Product Expansion Slots:{' '}
                  {
                    this.state.products[this.state.selectedIndex]
                      .expansion_slots
                  }
                </h3>
                <h3>
                  M2 Slot:{' '}
                  {this.state.products[this.state.selectedIndex].M2Slot}
                </h3>
              </div>
            </section>
          )}
        </section>
      </PageLayout>
    );
  }
}
