import React, { Component } from 'react';
import Layout from '../../layout/Layout';
import Header from '../../../pageSettings/header/Header';
import Button from '../../../pageSettings/button/Button';

import style from './addAssemblies.module.css';

export default class AddAssemblies extends Component {
  state = {
    assemblyName: '',
    modelCase: '',
    modelMotherboard: '',
    modelCPU: '',
    modelCPUCooler: '',
    modelGPU: '',
    modelPSU: '',
    modelRAM: '',
    modelSSD: '',
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
      'http://localhost:5000/addAssemblies',
      options
    );
    const result = await response.json();
    console.log(result);
    if (result.status === 'ok') {
      alert('Assembly have added');
    }
  }
  render() {
    return (
      <Layout>
        <Header h1Heading='Add Assembly' />
        <section>
          <form onSubmit={this.handleSubmit.bind(this)} className={style.form}>
            <input
              type='text'
              placeholder='Enter Assembly Name:'
              value={this.state.assemblyName}
              required
              onChange={e => this.setState({ assemblyName: e.target.value })}
            />
            <input
              type='text'
              placeholder='Enter Model Case:'
              required
              onChange={e => this.setState({ modelCase: e.target.value })}
            />

            <input
              type='text'
              placeholder='Enter Model Motherboard:'
              required
              onChange={e =>
                this.setState({ modelMotherboard: e.target.value })
              }
            />

            <input
              type='text'
              placeholder='Enter Model CPU:'
              required
              onChange={e => this.setState({ modelCPU: e.target.value })}
            />

            <input
              type='text'
              placeholder='Enter Model CPU Cooler:'
              required
              onChange={e => this.setState({ modelCPUCooler: e.target.value })}
            />

            <input
              type='text'
              placeholder='Enter Model GPU Cooler:'
              required
              onChange={e => this.setState({ modelGPU: e.target.value })}
            />

            <input
              type='text'
              placeholder='Enter Model PSU Cooler:'
              required
              onChange={e => this.setState({ modelPSU: e.target.value })}
            />

            <input
              type='text'
              placeholder='Enter Model RAM Cooler:'
              required
              onChange={e => this.setState({ modelRAM: e.target.value })}
            />

            <input
              type='text'
              placeholder='Enter Model SSD Cooler:'
              required
              onChange={e => this.setState({ modelSSD: e.target.value })}
            />

            <Button type='submit' text='submit' />
          </form>
        </section>
      </Layout>
    );
  }
}
