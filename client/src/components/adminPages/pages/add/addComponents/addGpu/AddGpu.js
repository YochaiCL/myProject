import React, { Component } from 'react';
import Button from '../../../../../commonComponents/button/Button';
import PageLayout from '../../../../layouts/pageLayout/PageLayout';
import Header from '../../../../../commonComponents/header/Header';
import style from '../addMotherboard/addMotherboard.module.css';

/**
 * Description - This class add Gpu to the database
 */
export default class AddGpu extends Component {
  state = {
    model: '',
    bus: '',
    memory: '',
    engine_clock: '',
    cuda_core: '',
    maximum_display: '',
    psu: '',
    showResult: '',
    modelsArray: [],
  };

  /**
   * Description - This function get all models names from the server and set them on array
   */
  async getModels() {
    const response = await fetch('http://localhost:5000/getComponentsModels');
    const result = await response.json();
    // console.log(result);
    let allModels = [];
    for (let key in result) {
      // console.log(result[key]);
      for (let model of result[key]) allModels.push(model);
    }
    // console.log(allModels);
    this.setState({ modelsArray: allModels });
  }

  /**
   * Description - This function activate the getModels function when the page is upload
   */
  componentDidMount() {
    this.getModels();
  }
  /**
   * Description - This function add gpu to collection
   * @param {*} e - gpu data from Admin
   */
  async handleSubmit(e) {
    e.preventDefault();
    for (let model of this.state.modelsArray) {
      if (model === this.state.model) {
        this.setState({ showResult: 'This model name already exists' });
        return;
      }
    }
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
      'http://localhost:5000/addComponent/gpu',
      options
    );
    const result = await response.json();
    if (result.status === 'ok') {
      this.setState({ showResult: 'Component have added' });
      setTimeout(() => {
        this.setState({
          showResult: '',
          model: '',
          bus: '',
          memory: '',
          engine_clock: '',
          cuda_core: '',
          maximum_display: '',
          psu: '',
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
        <Header h1Heading='Add GPU' />
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
              placeholder='Enter Bus:'
              required
              value={this.state.bus}
              onChange={e => this.setState({ bus: e.target.value })}
            />

            <input
              className={style.input}
              type='text'
              placeholder='Enter Memory:'
              required
              value={this.state.memory}
              onChange={e => this.setState({ memory: e.target.value })}
            />

            <input
              className={style.input}
              type='text'
              placeholder='Enter Engine Clock:'
              required
              value={this.state.engine_clock}
              onChange={e => this.setState({ engine_clock: e.target.value })}
            />

            <input
              className={style.input}
              type='text'
              placeholder='Enter Cuda Core:'
              required
              value={this.state.cuda_core}
              onChange={e => this.setState({ cuda_core: e.target.value })}
            />

            <input
              className={style.input}
              type='text'
              placeholder='Enter Maximum Displays:'
              required
              value={this.state.maximum_display}
              onChange={e => this.setState({ maximum_display: e.target.value })}
            />

            <input
              className={style.input}
              type='text'
              placeholder='Enter PSU:'
              required
              value={this.state.psu}
              onChange={e => this.setState({ psu: e.target.value })}
            />

            <Button type='submit' text='submit' />
            <p className={style.showResult}>{this.state.showResult}</p>
          </form>
        </section>
      </PageLayout>
    );
  }
}
