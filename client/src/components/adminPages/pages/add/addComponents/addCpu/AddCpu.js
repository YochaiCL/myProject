import React, { Component } from 'react';
import Button from '../../../../../pageSettings/button/Button';
import PageLayout from '../../../../layouts/pageLayout/PageLayout';
import Header from '../../../../../pageSettings/header/Header';
import style from '../addMotherboard/addMotherboard.module.css';

/**
 * Description - This class add Cpu to the database
 */
export default class AddCpu extends Component {
  state = {
    model: '',
    cores: '',
    threads: '',
    frequency: '',
    cache: '',
    memory_type: '',
    socket: '',
    showResult: '',
  };

  /**
   * Description - This function add cpu to collection
   * @param {*} e - Cpu data from Admin
   */
  async handleSubmit(e) {
    e.preventDefault();
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
      'http://localhost:5000/addComponent/cpu',
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
        <Header h1Heading='Add CPU' />
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
            <p className={style.showResult}>{this.state.showResult}</p>
          </form>
        </section>
      </PageLayout>
    );
  }
}
