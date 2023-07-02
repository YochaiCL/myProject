import React, { Component } from 'react';
import Button from '../../../../../pageSettings/button/Button';
import PageLayout from '../../../../layouts/pageLayout/PageLayout';
import Header from '../../../../../pageSettings/header/Header';
import style from '../addMotherboard/addMotherboard.module.css';

/**
 * Description - This class add Ram to the database
 */
export default class AddRam extends Component {
  state = {
    model: '',
    memory_series: '',
    memory_size: '',
    latency: '',
    speed: '',
    showResult: '',
  };

  /**
   * Description - This function add ram to collection
   * @param {*} e - ram data from Admin
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
      'http://localhost:5000/addComponent/ram',
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
        <Header h1Heading='Add RAM' />
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
              placeholder='Enter Memory Series:'
              required
              onChange={e => this.setState({ memory_series: e.target.value })}
            />

            <input
              className={style.input}
              type='text'
              placeholder='Enter Memory size:'
              required
              onChange={e => this.setState({ memory_size: e.target.value })}
            />

            <input
              className={style.input}
              type='text'
              placeholder='Enter Latency:'
              required
              onChange={e => this.setState({ latency: e.target.value })}
            />

            <input
              className={style.input}
              type='text'
              placeholder='Enter Speed:'
              required
              onChange={e => this.setState({ speed: e.target.value })}
            />

            <Button type='submit' text='submit' />
            <p className={style.showResult}>{this.state.showResult}</p>
          </form>
        </section>
      </PageLayout>
    );
  }
}
