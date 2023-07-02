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
    this.setState({
      model: this.state.products[index].model,
    });
    this.setState({
      cpu_socket_support: this.state.products[index].cpu_socket_support,
    });
    this.setState({
      chipset: this.state.products[index].chipset,
    });
    this.setState({
      memory: this.state.products[index].memory,
    });
    this.setState({
      form_factor: this.state.products[index].form_factor,
    });
    this.setState({
      expansion_slots: this.state.products[index].expansion_slots,
    });
    this.setState({
      M2Slot: this.state.products[index].M2Slot,
    });
  };
  async getProducts() {
    const response = await fetch(
      'http://localhost:5000/getComponent/motherboard'
    );
    const result = await response.json();
    console.log(result);
    this.setState({ products: result });
  }

  async handleSubmit(e) {
    // Preventing the default form submission behavior
    e.preventDefault();
    console.log(this.state.model);
    let newComponent = {
      model: this.state.model,
      cpu_socket_support: this.state.cpu_socket_support,
      chipset: this.state.chipset,
      memory: this.state.memory,
      form_factor: this.state.form_factor,
      expansion_slots: this.state.expansion_slots,
      M2Slot: this.state.M2Slot,
    };
    console.log(newComponent);
    const options = {
      method: 'POST',
      crossDomain: true,
      // Setting headers for the HTTP request
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        'Accept-Control-Allow-Origin': '*',
      },
      // Converting the state object to JSON and setting it as the request body
      body: JSON.stringify({
        model: this.state.model,
        newComponent,
      }),
    };
    const response = await fetch(
      'http://localhost:5000/updateComponent/motherboard',
      options
    );
    // Parsing the response as JSON
    const result = await response.json();
    console.log(result);
    // Checking if the request was successful
    if (result.status === 'ok') {
      this.setState({
        showResult: 'The Assembly has been added',
      });
    } else if (result.status === 'Assembly already exist') {
      this.setState({
        showResult: 'This assembly already  exist',
      });
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
                     
                      readOnly
                    />

                    <input
                      type='text'
                      placeholder={
                        this.state.products[this.state.selectIndex]
                          .cpu_socket_support
                      }
                      onChange={e =>
                        this.setState({ cpu_socket_support: e.target.value })
                      }
                    />

                    <input
                      type='text'
                      placeholder={
                        this.state.products[this.state.selectIndex].chipset
                      }
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
                      onChange={e =>
                        this.setState({
                          memory: e.target.value,
                        })
                      }
                    />

                    <input
                      type='text'
                      placeholder={
                        this.state.products[this.state.selectIndex].form_factor
                      }
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
