import React, { Component } from 'react';
import Button from '../../../../../pageSettings/button/Button';
import PageLayout from '../../../../layouts/pageLayout/PageLayout';
import Header from '../../../../../pageSettings/header/Header';
import style from './addMotherboard.module.css';

/**
 * Description - This class add Motherboard to the database
 */
export default class AddMotherboard extends Component {
  state = {
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
   * Description - This function add motherboard to collection
   * @param {*} e - motherboard data from Admin
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
      'http://localhost:5000/addComponent/motherboard',
      options
    );
    const result = await response.json();
    if (result.status === 'ok') {
      this.setState({ showResult: 'Component have added' });
      setTimeout(() => {
        this.setState({
          showResult: '',
          model: '',
          cpu_socket_support: '',
          chipset: '',
          memory: '',
          form_factor: '',
          expansion_slots: '',
          M2Slot: '',
        });
      }, 1000);
    } else if (result.status === 'Model already exist') {
      this.setState({ showResult: 'Component already exist' });
      setTimeout(() => {
        this.setState({
          showResult: '',
        });
      }, 1000);
    }
  }

  render() {
    return (
      <PageLayout>
        <Header h1Heading='Add Motherboard' />
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
              placeholder='Enter Cpu Socket:'
              required
              value={this.state.cpu_socket_support}
              onChange={e =>
                this.setState({ cpu_socket_support: e.target.value })
              }
            />

            <input
              className={style.input}
              type='text'
              placeholder='Enter Chip set:'
              required
              value={this.state.chipset}
              onChange={e => this.setState({ chipset: e.target.value })}
            />

            <input
              className={style.input}
              type='text'
              placeholder='Enter Memory:'
              required
              value={this.state.memory}
              onChange={e => this.setState({ memory: e.target.value })}
            />

            <input
              className={style.input}
              type='text'
              placeholder='Enter Form Factor:'
              required
              value={this.state.form_factor}
              onChange={e => this.setState({ form_factor: e.target.value })}
            />

            <input
              className={style.input}
              type='text'
              placeholder='Enter Expansion Slots:'
              required
              value={this.state.expansion_slots}
              onChange={e => this.setState({ expansion_slots: e.target.value })}
            />

            <input
              className={style.input}
              type='text'
              placeholder='Enter M.2 slot:'
              required
              value={this.state.M2Slot}
              onChange={e => this.setState({ M2Slot: e.target.value })}
            />

            <Button type='submit' text='submit' />
            <p className={style.showResult}>{this.state.showResult}</p>
          </form>
        </section>
      </PageLayout>
    );
  }
}
