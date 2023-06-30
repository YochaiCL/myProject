import React, { Component } from 'react';
import Button from '../../../../../../pageSettings/button/Button';
import PageLayout from '../../../../../layouts/pageLayout/PageLayout';
import Header from '../../../../../../pageSettings/header/Header';
import style from '../../updateMotherboard/updateMotherboard.module.css';

export default class UpdateCpuCoolerFan extends Component {
  // Initializing state variables for component properties
  state = {
    products: [{ model: 'Loading data...' }],
    showData: false,
    selectIndex: null,
    model: '',
    socket_support: '',
    fan_diameter: '',
    showResult: '',
  };

  componentDidMount() {
    this.getProducts();
  }

  handelClick = index => {
    this.setState({
      showData: true,
      selectIndex: index,
    });
  };
  async getProducts() {
    const response = await fetch(
      'http://localhost:5000/getComponent/cpuCoolerFan'
    );
    const result = await response.json();
    console.log(result);
    this.setState({ products: result });
  }

  // Asynchronous function to handle form submission
  async handleSubmit(e) {
    // Preventing the default form submission behavior
    e.preventDefault();

    const options = {
      // Setting headers for the HTTP request
      method: 'POST',
      crossDomain: true,
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        'Accept-Control-Allow-Origin': '*',
      },
      // Converting the state object to JSON and setting it as the request body
      body: JSON.stringify(this.state),
    };
    // Sending the POST request with options
    const response = await fetch(
      'http://localhost:5000/addComponent/cpuCooleFan',
      options
    );
    // Parsing the response as JSON
    const result = await response.json();

    // Checking the status of the response

    // Updating the state to display a success message
    if (result.status === 'ok') {
      this.setState({ showResult: 'Component have added' });
    } // Handling different response statuses
    else if (result.status === 'Model already exist') {
      this.setState({ showResult: 'Component already exist' });
    } else if (result.status === 'Error !! check your details') {
    }
  }
  render() {
    return (
      <PageLayout>
        <Header h1Heading='Update Cpu Cooler Fan' />
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
                    <input
                      type='text'
                      placeholder={
                        this.state.products[this.state.selectIndex].model
                      }
                      value={this.state.model}
                      required
                      onChange={e => this.setState({ model: e.target.value })}
                    />

                    <input
                      type='text'
                      placeholder={
                        this.state.products[this.state.selectIndex]
                          .socket_support
                      }
                      required
                      onChange={e =>
                        this.setState({ socket_support: e.target.value })
                      }
                    />

                    <input
                      type='text'
                      placeholder={
                        this.state.products[this.state.selectIndex].fan_diameter
                      }
                      required
                      onChange={e =>
                        this.setState({
                          fan_diameter: e.target.value,
                        })
                      }
                    />

                    <Button type='submit' text='submit' />
                    <p>{this.state.showResult}</p>
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
