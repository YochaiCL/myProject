import React, { Component } from 'react';
import Button from '../../../../../commonComponents/button/Button';
import PageLayout from '../../../../layouts/pageLayout/PageLayout';
import Header from '../../../../../commonComponents/header/Header';
import style from '../updateMotherboard/updateMotherboard.module.css';

/**
 * Description - This class update the component data by the user inputs
 */
export default class UpdateCpu extends Component {
  state = {
    products: [{ model: 'Loading data...' }],
    showData: false,
    selectIndex: null,
    model: '',
    cores: '',
    threads: '',
    frequency: '',
    cache: '',
    memory_type: '',
    socket: '',
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
      cores: this.state.products[index].cores,
      threads: this.state.products[index].threads,
      frequency: this.state.products[index].frequency,
      cache: this.state.products[index].cache,
      memory_type: this.state.products[index].memory_type,
      socket: this.state.products[index].socket,
    });
  };

  /**
   * Description - This function get the component data from the server
   */
  async getProducts() {
    const response = await fetch('http://localhost:5000/getComponent/cpu');
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
    // console.log(this.state);
    let newComponent = {
      model: this.state.model,
      cores: this.state.cores,
      threads: this.state.threads,
      frequency: this.state.frequency,
      cache: this.state.cache,
      memory_type: this.state.memory_type,
      socket: this.state.socket,
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
      'http://localhost:5000/updateComponent/cpu',
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
        <Header h1Heading='Update CPU' />
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
                    <p>Cores</p>
                    <input
                      value={this.state.cores}
                      type='text'
                      placeholder={
                        this.state.products[this.state.selectIndex].cores
                      }
                      onChange={e => this.setState({ cores: e.target.value })}
                    />
                    <p>Threads</p>
                    <input
                      value={this.state.threads}
                      type='text'
                      placeholder={
                        this.state.products[this.state.selectIndex].threads
                      }
                      onChange={e =>
                        this.setState({
                          threads: e.target.value,
                        })
                      }
                    />
                    <p>Frequency</p>
                    <input
                      value={this.state.frequency}
                      type='text'
                      placeholder={
                        this.state.products[this.state.selectIndex].frequency
                      }
                      onChange={e =>
                        this.setState({ frequency: e.target.value })
                      }
                    />
                    <p>Cache</p>
                    <input
                      value={this.state.cache}
                      type='text'
                      placeholder={
                        this.state.products[this.state.selectIndex].cache
                      }
                      onChange={e =>
                        this.setState({ frequency: e.target.value })
                      }
                    />
                    <p>Memory Type</p>
                    <input
                      value={this.state.memory_type}
                      type='text'
                      placeholder={
                        this.state.products[this.state.selectIndex].memory_type
                      }
                      onChange={e =>
                        this.setState({ memory_type: e.target.value })
                      }
                    />
                    <p>Socket</p>
                    <input
                      value={this.state.socket}
                      type='text'
                      placeholder={
                        this.state.products[this.state.selectIndex].socket
                      }
                      onChange={e => this.setState({ socket: e.target.value })}
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
