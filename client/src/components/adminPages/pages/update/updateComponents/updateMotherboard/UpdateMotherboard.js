import React, { Component } from 'react';
import Button from '../../../../../commonComponents/button/Button';
import PageLayout from '../../../../layouts/pageLayout/PageLayout';
import Header from '../../../../../commonComponents/header/Header';
import style from './updateMotherboard.module.css';

/**
 * Description - This class update the component data by the user inputs
 */
export default class UpdateMotherboard extends Component {
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
      cpu_socket_support: this.state.products[index].cpu_socket_support,
      chipset: this.state.products[index].chipset,
      memory: this.state.products[index].memory,
      form_factor: this.state.products[index].form_factor,
      expansion_slots: this.state.products[index].expansion_slots,
      M2Slot: this.state.products[index].M2Slot,
    });
  };

  /**
   * Description - This function get the component data from the server
   */
  async getProducts() {
    const response = await fetch(
      'http://localhost:5000/getComponent/motherboard'
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
    // console.log(this.state.model);
    let newComponent = {
      model: this.state.model,
      cpu_socket_support: this.state.cpu_socket_support,
      chipset: this.state.chipset,
      memory: this.state.memory,
      form_factor: this.state.form_factor,
      expansion_slots: this.state.expansion_slots,
      M2Slot: this.state.M2Slot,
    };
    // console.log(newComponent);
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
      'http://localhost:5000/updateComponent/motherboard',
      options
    );
    const result = await response.json();
    // console.log(result);
    if (result.status === 'true') {
      this.setState({
        showResult: 'The component has been update',
      });
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
                    <p>
                      Model
                      <span className={style.span}> - Read Only</span>
                    </p>
                    <input
                      className={style.input}
                      type='text'
                      placeholder={
                        this.state.products[this.state.selectIndex].model
                      }
                      value={this.state.model}
                      readOnly
                    />
                    <p>CPU Socket Support</p>
                    <input
                      value={this.state.cpu_socket_support}
                      className={style.input}
                      type='text'
                      placeholder={
                        this.state.products[this.state.selectIndex]
                          .cpu_socket_support
                      }
                      onChange={e =>
                        this.setState({ cpu_socket_support: e.target.value })
                      }
                    />
                    <p>ChipSet</p>
                    <input
                      value={this.state.chipset}
                      className={style.input}
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
                    <p>Memory</p>
                    <input
                      value={this.state.memory}
                      className={style.input}
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
                    <p>Form Factory</p>
                    <input
                      value={this.state.form_factor}
                      className={style.input}
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
                    <p>Expansion Slots</p>
                    <input
                      value={this.state.expansion_slots}
                      className={style.input}
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
                    <p>M2 Slots</p>
                    <input
                      value={this.state.M2Slot}
                      className={style.input}
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
