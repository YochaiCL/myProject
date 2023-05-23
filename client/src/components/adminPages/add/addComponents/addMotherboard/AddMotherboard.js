import React, { Component } from 'react';
import Button from '../../../../pageSettings/button/Button';
import Layout from '../../../layout/Layout';
import Header from '../../../../pageSettings/header/Header';
import style from './addMotherboard.module.css';

export default class AddMotherboard extends Component {
  state = {
    model: '',
    cpu_socket_support: '',
    chipset: '',
    memory: '',
    form_factor: '',
    expansion_slots: '',
    M2Slot: '',
  };

  async handleSubmit(e) {
    e.preventDefault();
    //  const { model, cpu_socket_support, chipset, form_factor } = this.state;
    console.log(this.state);
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
      'http://localhost:5000/insert/motherboard',
      options
    );
    const result = await response.json();
    console.log(result);
    if (result.status === 'ok') {
      alert('Component have added');
    }
  }

  render() {
    return (
      <Layout>
        <Header h1Heading='Add Motherboard' />
        <section>
          <form onSubmit={this.handleSubmit.bind(this)} className={style.form}>
            <input
              type='text'
              placeholder='Enter Model:'
              value={this.state.model}
              required
              onChange={e => this.setState({ model: e.target.value })}
            />

            <input
              type='text'
              placeholder='Enter Cpu Socket:'
              required
              onChange={e =>
                this.setState({ cpu_socket_support: e.target.value })
              }
            />

            <input
              type='text'
              placeholder='Enter Chip set:'
              required
              onChange={e => this.setState({ chipset: e.target.value })}
            />

            <input
              type='text'
              placeholder='Enter Memory:'
              required
              onChange={e => this.setState({ memory: e.target.value })}
            />

            <input
              type='text'
              placeholder='Enter Form Factor:'
              required
              onChange={e => this.setState({ form_factor: e.target.value })}
            />

            <input
              type='text'
              placeholder='Enter Expansion Slots:'
              required
              onChange={e => this.setState({ expansion_slots: e.target.value })}
            />

            <input
              type='text'
              placeholder='Enter M.2 slot:'
              required
              onChange={e => this.setState({ M2Slot: e.target.value })}
            />

            <Button type='submit' text='submit' />
          </form>
        </section>
      </Layout>
    );
  }
}
