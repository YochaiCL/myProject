import React, { Component } from 'react';
import Button from '../../../../../pageSettings/button/Button';
import PageLayout from '../../../../layouts/pageLayout/PageLayout';
import Header from '../../../../../pageSettings/header/Header';
import style from './updateMotherboard.module.css';

export default class UpdateMotherboard extends Component {
  // Initializing state variables for component properties
  state = {
    products: [{ model: 'Loading data...' }],
    showData: false,
    selectIndex: null,
    model: '',
    cpu_socket_support: '',
    chipset: '',
    memory: '',
    form_factor: '',
    expansion_slots: '',
    M2Slot: '',
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
    const response = await fetch('http://localhost:5000/getData/motherboard');
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
      'http://localhost:5000/insert/motherboard',
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
        <Header h1Heading='Update Motherboard' />
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
                          .cpu_socket_support
                      }
                      required
                      onChange={e =>
                        this.setState({ cpu_socket_support: e.target.value })
                      }
                    />

                    <input
                      type='text'
                      placeholder={
                        this.state.products[this.state.selectIndex].chipset
                      }
                      required
                      onChange={e =>
                        this.setState({
                          chipset: e.target.value,
                        })
                      }
                    />

                    <input
                      type='text'
                      placeholder={
                        this.state.products[this.state.selectIndex].memory
                      }
                      required
                      onChange={e =>
                        this.setState({
                          memory: e.target.value,
                        })
                      }
                    />

                    <input
                      type='text'
                      placeholder={
                        this.state.products[this.state.selectIndex]
                          .form_factor
                      }
                      required
                      onChange={e =>
                        this.setState({
                          form_factor: e.target.value,
                        })
                      }
                    />

                    <input
                      type='text'
                      placeholder={
                        this.state.products[this.state.selectIndex]
                          .expansion_slots
                      }
                      required
                      onChange={e =>
                        this.setState({
                          expansion_slots: e.target.value,
                        })
                      }
                    />

                    <input
                      type='text'
                      placeholder={
                        this.state.products[this.state.selectIndex].M2Slot
                      }
                      required
                      onChange={e =>
                        this.setState({
                          M2Slot: e.target.value,
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
