import React, { Component } from 'react';
import Button from '../../../../../pageSettings/button/Button';
import Layout from '../../../../layout/pageLayout/PageLayout';
import Header from '../../../../../pageSettings/header/Header';
import style from '../../addMotherboard/addMotherboard.module.css';

export default class AddSsdSata extends Component {
  // Initializing state variables for component properties
  state = {
    model: '',
    capacity: '',
    type: '',
    showResult: '',
  };

  // Asynchronous function to handle form submission
  async handleSubmit(e) {
    // Preventing the default form submission behavior
    e.preventDefault();

    const options = {
      method: 'POST',
      crossDomain: true,
      headers: {
        // Setting headers for the HTTP request
        'Content-Type': 'application/json',
        Accept: 'application/json',
        'Accept-Control-Allow-Origin': '*',
      },
      // Converting the state object to JSON and setting it as the request body
      body: JSON.stringify(this.state),
    };
    // Sending the POST request with options
    const response = await fetch(
      'http://localhost:5000/insert/ssdSata',
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
      <Layout>
        <Header h1Heading='Add SSD SATA' />
        <section>
          <form
            onSubmit={this.handleSubmit.bind(this)}
            className={`${style.form} ${style.smallForm}`}
          >
            <input
              type='text'
              placeholder='Enter Model:'
              value={this.state.model}
              required
              onChange={e => this.setState({ model: e.target.value })}
            />

            <input
              type='text'
              placeholder='Enter Capacity:'
              required
              onChange={e => this.setState({ capacity: e.target.value })}
            />

            <input
              type='text'
              placeholder='Enter Type:'
              required
              onChange={e => this.setState({ type: e.target.value })}
            />

            <Button type='submit' text='submit' />
            <p>{this.state.showResult}</p>
          </form>
        </section>
      </Layout>
    );
  }
}
