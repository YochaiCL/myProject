import React, { Component } from 'react';
import Button from '../../../../pageSettings/button/Button';
import Layout from '../../../layout/pageLayout/PageLayout';
import Header from '../../../../pageSettings/header/Header';
import style from '../addMotherboard/addMotherboard.module.css';

export default class AddGpu extends Component {
  // Initializing state variables for component properties
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
    const response = await fetch('http://localhost:5000/insert/gpu', options);
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
      <Layout>
        <Header h1Heading='Add GPU' />
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
              placeholder='Enter Bus:'
              required
              onChange={e => this.setState({ bus: e.target.value })}
            />

            <input
              type='text'
              placeholder='Enter Memory:'
              required
              onChange={e => this.setState({ memory: e.target.value })}
            />

            <input
              type='text'
              placeholder='Enter Engine Clock:'
              required
              onChange={e => this.setState({ engine_clock: e.target.value })}
            />

            <input
              type='text'
              placeholder='Enter Cuda Core:'
              required
              onChange={e => this.setState({ cuda_core: e.target.value })}
            />

            <input
              type='text'
              placeholder='Enter Maximum Displays:'
              required
              onChange={e => this.setState({ maximum_display: e.target.value })}
            />

            <input
              type='text'
              placeholder='Enter PSU:'
              required
              onChange={e => this.setState({ psu: e.target.value })}
            />

            <Button type='submit' text='submit' />
            <p>{this.state.showResult}</p>
          </form>
        </section>
      </Layout>
    );
  }
}
