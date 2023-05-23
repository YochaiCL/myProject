import React, { Component } from 'react';
import Button from '../../../../pageSettings/button/Button';
import Layout from '../../../layout/Layout';
import Header from '../../../../pageSettings/header/Header';
import style from '../addMotherboard/addMotherboard.module.css';
/////
export default class AddCase extends Component {
  state = {
    model: '',
    form: '',
    radiator_compatibility: '',
    dimensions: '',
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
      'http://localhost:5000/insert/case',
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
        <Header h1Heading='Add Case' />
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
              placeholder='Enter Form:'
              required
              onChange={e => this.setState({ form: e.target.value })}
            />

            <input
              type='text'
              placeholder='Enter Radiator Compatibility:'
              required
              onChange={e =>
                this.setState({ radiator_compatibility: e.target.value })
              }
            />

            <input
              type='text'
              placeholder='Enter Dimensions:'
              require
              onChange={e => this.setState({ dimensions: e.target.value })}
            />

            <Button type='submit' text='submit' />
          </form>
        </section>
      </Layout>
    );
  }
}
