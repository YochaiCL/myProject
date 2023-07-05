import React, { Component } from 'react';
import Button from '../../../../../commonComponents/button/Button';
import PageLayout from '../../../../layouts/pageLayout/PageLayout';
import Header from '../../../../../commonComponents/header/Header';
import style from '../addMotherboard/addMotherboard.module.css';

/**
 * Description - This class add Case to the database
 */
export default class AddCase extends Component {
  state = {
    model: '',
    form: '',
    radiator_compatibility: '',
    dimensions: '',
    showResult: '',
  };

  /**
   * Description - This function add case to collection
   * @param {*} e - Case data from Admin
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
      'http://localhost:5000/addComponent/case',
      options
    );
    const result = await response.json();
    if (result.status === 'ok') {
      this.setState({ showResult: 'Component have added' });
      setTimeout(() => {
        this.setState({
          showResult: '',
          model: '',
          form: '',
          radiator_compatibility: '',
          dimensions: '',
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
        <Header h1Heading='Add Case' />
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
              placeholder='Enter Form:'
              required
              onChange={e => this.setState({ form: e.target.value })}
              value={this.state.form}
            />

            <input
              type='text'
              placeholder='Enter Radiator Compatibility:'
              required
              value={this.state.radiator_compatibility}
              onChange={e =>
                this.setState({ radiator_compatibility: e.target.value })
              }
            />

            <input
              type='text'
              placeholder='Enter Dimensions:'
              required
              value={this.state.dimensions}
              onChange={e => this.setState({ dimensions: e.target.value })}
            />

            <Button type='submit' text='submit' />
            <p className={style.showResult}>{this.state.showResult}</p>
          </form>
        </section>
      </PageLayout>
    );
  }
}
