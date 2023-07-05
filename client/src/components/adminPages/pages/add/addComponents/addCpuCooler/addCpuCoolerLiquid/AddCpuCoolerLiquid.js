import React, { Component } from 'react';
import Button from '../../../../../../commonComponents/button/Button';
import PageLayout from '../../../../../layouts/pageLayout/PageLayout';
import Header from '../../../../../../commonComponents/header/Header';
import style from '../../addMotherboard/addMotherboard.module.css';

/**
 * Description - This class add Cpu Cooler Liquid to the database
 */
export default class AddCpuCoolerLiquid extends Component {
  state = {
    model: '',
    socket_support: '',
    radiator_size: '',
    showResult: '',
  };

  /**
   * Description - This function add cpu Cooler Liquid to collection
   * @param {*} e - cpu Cooler Liquid data from Admin
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
      'http://localhost:5000/addComponent/cpuCoolerLiquid',
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
          radiator_size: '',
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
        <Header h1Heading='Add Cpu Cooler Liquid' />
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
              placeholder='Enter Radiator Size:'
              required
              value={this.state.radiator_size}
              onChange={e => this.setState({ radiator_size: e.target.value })}
            />

            <Button type='submit' text='submit' />
            <p className={style.showResult}>{this.state.showResult}</p>
          </form>
        </section>
      </PageLayout>
    );
  }
}
