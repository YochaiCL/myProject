import React, { Component } from 'react';
import PageLayout from '../../../../layouts/pageLayout/PageLayout';
import Header from '../../../../../pageSettings/header/Header';
import style from '../../motherboard/products/productsMOTHERBOARD.module.css';

/**
 * Description - This class display the gpu products
 */
export default class productsGPU extends Component {
  state = {
    products: [{ model: 'Loading data...' }],
    showData: false,
    selectIndex: null,
  };

  /**
   * Description - This function get the gpu products
   */
  async getProducts() {
    const response = await fetch('http://localhost:5000/getComponent/gpu');
    const result = await response.json();
    console.log(result);
    this.setState({ products: result });
  }

  /**
   * Description - This function activate the getProducts function when the page upload
   */
  componentDidMount() {
    this.getProducts();
  }

  /**
   * Description - This function open the details of the selected product
   * @param {*} index - Selected product
   */
  handelClick = index => {
    this.setState({
      showData: true,
      selectIndex: index,
    });
  };

  render() {
    return (
      <PageLayout>
        <Header h1Heading='GPU Products' />
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
                  <span className={style.span}>Model:</span>
                  {this.state.products[this.state.selectIndex].model}
                </h3>
                <h3>
                  <span className={style.span}>Bus:</span>
                  {this.state.products[this.state.selectIndex].bus}
                </h3>
                <h3>
                  <span className={style.span}>Memory:</span>{' '}
                  {this.state.products[this.state.selectIndex].memory}
                </h3>
                <h3>
                  <span className={style.span}>Engine Clock:</span>
                  {this.state.products[this.state.selectIndex].engine_clock}
                </h3>
                <h3>
                  <span className={style.span}>Cuda_core:</span>
                  {this.state.products[this.state.selectIndex].cuda_core}
                </h3>
                <h3>
                  <span className={style.span}>Maximum Display:</span>
                  {this.state.products[this.state.selectIndex].maximum_display}
                </h3>
                <h3>
                  <span className={style.span}>Psu:</span>
                  {this.state.products[this.state.selectIndex].psu}
                </h3>
              </div>
            </section>
          )}
        </section>
      </PageLayout>
    );
  }
}
