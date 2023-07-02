import React, { Component } from 'react';
import Button from '../../../../../pageSettings/button/Button';
import PageLayout from '../../../../layouts/pageLayout/PageLayout';
import Header from '../../../../../pageSettings/header/Header';
import style from '../addMotherboard/addMotherboard.module.css';

/**
 * Description - This class add Gpu to the database
 */
export default class AddGpu extends Component {
  state = {
    model: '',
    bus: '',
    memory: '',
    engine_clock: '',
    cuda_core: '',
    maximum_display: '',
    psu: '',
    showResult: '',
  };

  /**
   * Description - This function add gpu to collection
   * @param {*} e - gpu data from Admin
   */
  async handleSubmit(e) {
    e.preventDefault();
    const options = {
      method: 'POST',
      crossDomain: true,
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        'Accept-Control-Allow-Origin': '*',
      },
      body: JSON.stringify(this.state),
    };
    const response = await fetch(
      'http://localhost:5000/addComponent/gpu',
      options
    );
    const result = await response.json();
    if (result.status === 'ok') {
      this.setState({ showResult: 'Component have added' });
    } else if (result.status === 'Model already exist') {
      this.setState({ showResult: 'Component already exist' });
    } else if (result.status === 'Error !! check your details') {
    }
  }
  render() {
    return (
      <PageLayout>
        <Header h1Heading='Add GPU' />
        <section>
          <form onSubmit={this.handleSubmit.bind(this)} className={style.form}>
            <input
              className={style.input}
              type='text'
              placeholder='Enter Model:'
              value={this.state.model}
              required
              onChange={e => this.setState({ model: e.target.value })}
            />

            <input
              className={style.input}
              type='text'
              placeholder='Enter Bus:'
              required
              onChange={e => this.setState({ bus: e.target.value })}
            />

            <input
              className={style.input}
              type='text'
              placeholder='Enter Memory:'
              required
              onChange={e => this.setState({ memory: e.target.value })}
            />

            <input
              className={style.input}
              type='text'
              placeholder='Enter Engine Clock:'
              required
              onChange={e => this.setState({ engine_clock: e.target.value })}
            />

            <input
              className={style.input}
              type='text'
              placeholder='Enter Cuda Core:'
              required
              onChange={e => this.setState({ cuda_core: e.target.value })}
            />

            <input
              className={style.input}
              type='text'
              placeholder='Enter Maximum Displays:'
              required
              onChange={e => this.setState({ maximum_display: e.target.value })}
            />

            <input
              className={style.input}
              type='text'
              placeholder='Enter PSU:'
              required
              onChange={e => this.setState({ psu: e.target.value })}
            />

            <Button type='submit' text='submit' />
            <p className={style.showResult}>{this.state.showResult}</p>
          </form>
        </section>
      </PageLayout>
    );
  }
}
