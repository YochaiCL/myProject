import React, { Component } from 'react';
import Button from '../../../../../../pageSettings/button/Button';
import PageLayout from '../../../../../layouts/pageLayout/PageLayout';
import Header from '../../../../../../pageSettings/header/Header';
import style from '../../addMotherboard/addMotherboard.module.css';

/**
 * Description - This class add Cpu Cooler fan to the database
 */
export default class AddCpuCoolerFan extends Component {
  state = {
    model: '',
    socket_support: '',
    fan_diameter: '',
    showResult: '',
  };

  /**
   * Description - This function add cpu Cooler Fan to collection
   * @param {*} e - Cpu Cooler Fan data from Admin
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
      'http://localhost:5000/addComponent/cpuCoolerFan',
      options
    );
    const result = await response.json();
    if (result.status === 'ok') {
      this.setState({ showResult: 'Component have added' });
      setTimeout(() => {
        this.setState({
          showResult: '',
          model: '',
          socket_support: '',
          fan_diameter: '',
        });
      }, 1000);
    } else if (result.status === 'Model already exist') {
      this.setState({ showResult: 'Component already exist' });
      setTimeout(() => {
        this.setState({
          showResult: '',
        });
      }, 1000);
    }
  }
  render() {
    return (
      <PageLayout>
        <Header h1Heading='Add Cpu Cooler Fan' />
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
              placeholder='Enter Socket Support:'
              required
              value={this.state.socket_support}
              onChange={e => this.setState({ socket_support: e.target.value })}
            />

            <input
              className={style.input}
              type='text'
              placeholder='Enter Fan Diameter:'
              required
              value={this.state.fan_diameter}
              onChange={e => this.setState({ fan_diameter: e.target.value })}
            />

            <Button type='submit' text='submit' />
            <p className={style.showResult}>{this.state.showResult}</p>
          </form>
        </section>
      </PageLayout>
    );
  }
}
