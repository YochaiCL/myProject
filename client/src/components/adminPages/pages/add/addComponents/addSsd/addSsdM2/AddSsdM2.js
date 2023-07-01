import React, { Component } from 'react';
import Button from '../../../../../../pageSettings/button/Button';
import PageLayout from '../../../../../layouts/pageLayout/PageLayout';
import Header from '../../../../../../pageSettings/header/Header';
import style from '../../addMotherboard/addMotherboard.module.css';

/**
 * Description - This class add Ssd M2 to the database
 */
export default class AddSsdM2 extends Component {
  state = {
    model: '',
    capacity: '',
    type: '',
    showResult: '',
  };

  /**
   * Description - This function add ssdM2 to collection
   * @param {*} e - ssdM2 data from Admin
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
      'http://localhost:5000/addComponent/ssdM2',
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
        <Header h1Heading='Add SSD M2' />
        <section>
          <form
            onSubmit={this.handleSubmit.bind(this)}
            className={`${style.form} ${style.smallForm}`}
          >
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
              placeholder='Enter Capacity:'
              required
              onChange={e => this.setState({ capacity: e.target.value })}
            />
            <input
              className={style.input}
              type='text'
              placeholder='Enter Type:'
              required
              onChange={e => this.setState({ type: e.target.value })}
            />

            <Button type='submit' text='submit' />
            <p>{this.state.showResult}</p>
          </form>
        </section>
      </PageLayout>
    );
  }
}
