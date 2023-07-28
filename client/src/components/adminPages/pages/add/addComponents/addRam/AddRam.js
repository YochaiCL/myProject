import React, { Component } from 'react';
import Button from '../../../../../commonComponents/button/Button';
import PageLayout from '../../../../layouts/pageLayout/PageLayout';
import Header from '../../../../../commonComponents/header/Header';
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
   * Description - This function add ram to collection
   * @param {*} e - ram data from Admin
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
      'http://localhost:5000/addComponent/ram',
      options
    );
    const result = await response.json();
    if (result.status === 'ok') {
      this.setState({ showResult: 'Component have added' });
      setTimeout(() => {
        this.setState({
          showResult: '',
          model: '',
          memory_series: '',
          memory_size: '',
          latency: '',
          speed: '',
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
              value={this.state.memory_series}
              required
              onChange={e => this.setState({ memory_series: e.target.value })}
            />

            <input
              className={style.input}
              type='text'
              placeholder='Enter Memory size:'
              value={this.state.memory_size}
              required
              onChange={e => this.setState({ memory_size: e.target.value })}
            />

            <input
              className={style.input}
              type='text'
              placeholder='Enter Latency:'
              value={this.state.latency}
              required
              onChange={e => this.setState({ latency: e.target.value })}
            />

            <input
              className={style.input}
              type='text'
              placeholder='Enter Speed:'
              value={this.state.speed}
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
