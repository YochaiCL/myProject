import React, { Component } from 'react';
import Button from '../../../../../../commonComponents/button/Button';
import PageLayout from '../../../../../layouts/pageLayout/PageLayout';
import Header from '../../../../../../commonComponents/header/Header';
import style from '../../updateMotherboard/updateMotherboard.module.css';

/**
 * Description - This class update the component data by the user inputs
 */
export default class UpdateCpuCoolerLiquid extends Component {
  state = {
    products: [{ model: 'Loading data...' }],
    showData: false,
    selectIndex: null,
    model: '',
    socket_support: '',
    radiator_size: '',
    showResult: '',
  };

  /**
   * Description - This function activate the getProducts function when the wab is upload
   */
  componentDidMount() {
    this.getProducts();
  }

  /**
   * Description - This function set the value of the inputs when we click on the selected component and show his data
   * @param {*} index - Selected component
   */
  handelClick = index => {
    this.setState({
      showData: true,
      selectIndex: index,
      model: this.state.products[index].model,
      socket_support: this.state.products[index].socket_support,
      radiator_size: this.state.products[index].radiator_size,
    });
  };

  /**
   * Description - This function get the component data from the server
   */
  async getProducts() {
    const response = await fetch(
      'http://localhost:5000/getComponent/cpuCoolerLiquid'
    );
    const result = await response.json();
     result.sort((a, b) => a.model.localeCompare(b.model));
    // console.log(result);
    this.setState({ products: result });
  }

  /**
   * Description - This function update the component data in the server
   * @param {*} e  - inputs to prevent from the page to refresh
   */
  async handleSubmit(e) {
    e.preventDefault();
    let newComponent = {
      model: this.state.model,
      socket_support: this.state.socket_support,
      radiator_size: this.state.radiator_size,
    };
    const options = {
      method: 'POST',
      crossDomain: true,
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        'Accept-Control-Allow-Origin': '*',
      },
      body: JSON.stringify({
        model: this.state.model,
        newComponent,
      }),
    };
    const response = await fetch(
      'http://localhost:5000/updateComponent/cpuCoolerLiquid',
      options
    );
    const result = await response.json();
    if (result.status === 'true') {
      this.setState({ showResult: 'The component has been update' });
      setTimeout(() => {
        this.setState({
          showResult: '',
        });
      }, 1000);
      this.getProducts();
    }
  }
  render() {
    return (
      <PageLayout>
        <Header h1Heading='Update Cpu Cooler Liquid' />
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
                <section>
                  <form
                    onSubmit={this.handleSubmit.bind(this)}
                    className={`${style.form} ${style.smallForm}`}
                  >
                    <p>
                      Model
                      <span className={style.span}> - Read Only</span>
                    </p>
                    <input
                      readOnly
                      type='text'
                      placeholder={
                        this.state.products[this.state.selectIndex].model
                      }
                      value={this.state.model}
                      onChange={e => this.setState({ model: e.target.value })}
                    />
                    <p>Socket Support</p>
                    <input
                      value={this.state.socket_support}
                      type='text'
                      placeholder={
                        this.state.products[this.state.selectIndex]
                          .socket_support
                      }
                      onChange={e =>
                        this.setState({ socket_support: e.target.value })
                      }
                    />
                    <p>Radiator Size</p>
                    <input
                      value={this.state.radiator_size}
                      type='text'
                      placeholder={
                        this.state.products[this.state.selectIndex]
                          .radiator_size
                      }
                      onChange={e =>
                        this.setState({
                          radiator_size: e.target.value,
                        })
                      }
                    />

                    <div className={style.btn}>
                      <Button type='submit' text='submit' />
                    </div>
                    <p className={style.showResult}>{this.state.showResult}</p>
                  </form>
                </section>
              </div>
            </section>
          )}
        </section>
      </PageLayout>
    );
  }
}
