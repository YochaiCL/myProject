import React, { Component } from 'react';
import Button from '../../../../../pageSettings/button/Button';
import PageLayout from '../../../../layouts/pageLayout/PageLayout';
import Header from '../../../../../pageSettings/header/Header';
import style from './addMotherboard.module.css';

export default class AddMotherboard extends Component {
  // Initializing state variables for component properties
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
    const response = await fetch(
      'http://localhost:5000/insert/motherboard',
      options
    );
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
      <PageLayout>
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
            <p>{this.state.showResult}</p>
          </form>
        </section>
      </PageLayout>
    );
  }
}
