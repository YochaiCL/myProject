import React, { Component } from 'react';
import PageLayout from '../../../../../layouts/pageLayout/PageLayout';
import Header from '../../../../../../commonComponents/header/Header';
import style from '../../../motherboard/products/productsMOTHERBOARD.module.css';

/**
 * Description - This class display the cpu cooler fan products
 */
export default class ProductsCpuCoolerFan extends Component {
  state = {
    products: [{ model: 'Loading data...' }],
    showData: false,
    selectIndex: null,
  };

  /**
   * Description - This function get the cpu cooler fan products
   */
  async getProducts() {
    const response = await fetch(
      'http://localhost:5000/getComponent/cpuCoolerFan'
    );
    const result = await response.json();
    result.sort((a, b) => a.model.localeCompare(b.model));
    // console.log(result);
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
        <Header h1Heading='Cpu Cooler Liquid Fan Products' />
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
                  <span className={style.span}> Socket Support:</span>

                  {this.state.products[this.state.selectIndex].socket_support}
                </h3>

                <h3>
                  <span className={style.span}>Fan Diameter:</span>

                  {this.state.products[this.state.selectIndex].fan_diameter}
                </h3>
              </div>
            </section>
          )}
        </section>
      </PageLayout>
    );
  }
}
