import React, { Component } from 'react';
import Button from '../../../../pageSettings/button/Button';
import Layout from '../../../layout/pageLayout/PageLayout';
import Header from '../../../../pageSettings/header/Header';
import style from '../addMotherboard/addMotherboard.module.css';

export default class AddCpu extends Component {
  state = {
    model: '',
    cores: '',
    threads: '',
    frequency: '',
    cache: '',
    memory_type: '',
    socket: '',
    message : ""
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
    const response = await fetch('http://localhost:5000/insert/cpu', options);
    const result = await response.json();
    console.log(result);
    if (result.status === 'Model already exist') {
      this.setState({ message: 'Model already exist' });
      // alert('Model already exist');
      return;
    }
    if (result.status === 'ok') {
      this.setState({ message: 'Component have added' });
    
    }
  }
  render() {
    return (
      <Layout>
        <Header h1Heading='Add CPU' />
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
              placeholder='Enter Cors:'
              required
              onChange={e => this.setState({ cores: e.target.value })}
            />

            <input
              type='text'
              placeholder='Enter Threads:'
              required
              onChange={e => this.setState({ threads: e.target.value })}
            />

            <input
              type='text'
              placeholder='Enter Frequency:'
              required
              onChange={e => this.setState({ frequency: e.target.value })}
            />

            <input
              type='text'
              placeholder='Enter Cache:'
              required
              onChange={e => this.setState({ cache: e.target.value })}
            />

            <input
              type='text'
              placeholder='Enter Type:'
              required
              onChange={e => this.setState({ memory_type: e.target.value })}
            />

            <input
              type='text'
              placeholder='Enter Socket Type:'
              required
              onChange={e => this.setState({ socket: e.target.value })}
            />

            <Button type='submit' text='submit' />
            {this.state.message !== '' ? <h3>{this.state.message}</h3> : <></>}
          </form>
        </section>
      </Layout>
    );
  }
}
