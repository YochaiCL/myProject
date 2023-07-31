import React, { Component } from 'react';
import PageLayout from '../../../layouts/pageLayout/PageLayout';
import Header from '../../../../commonComponents/header/Header';
import style from './newQuestion.module.css';
import Button from '../../../../commonComponents/button/Button';

/**
 * Description -
 */
export default class NewQuestion extends Component {
  state = {
    questionName: '',
    questionText: '',
    showResult: '',
    userId: JSON.parse(localStorage.getItem('user')),
  };

  async handleSubmit(e) {
    e.preventDefault();
    const questionInputData = {
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
      'http://localhost:5000/userQuestionAnswer/newQuestion',
      questionInputData
    );
    const result = await response.json();
    // console.log(result);
    if (result.status === 'ok') {
      this.setState({
        showResult: 'The Question has been added',
      });

      setTimeout(() => {
        this.setState({
          questionName: '',
          questionText: '',
          showResult: '',
        });
      }, 1000);
    } else if (result.status === 'Question already exist') {
      setTimeout(() => {
        this.setState({
          showResult: 'This question name already exist',
        });
      }, 1000);
    }
  }

  render() {
    return (
      <PageLayout>
        <Header h1Heading='New Question' />
        <section>
          <form onSubmit={this.handleSubmit.bind(this)} className={style.form}>
            <input
              className={style.input}
              type='text'
              placeholder='Enter Question Name:'
              value={this.state.questionName}
              required
              onChange={e => this.setState({ questionName: e.target.value })}
            />

            <textarea
            className={style.textArea}
              value={this.state.questionText}
              name='tarea'
              rows='6'
              cols='40'
              placeholder=' Write text here'
              required
              onChange={e => this.setState({ questionText: e.target.value })}
            ></textarea>

            <Button type='submit' text='submit' />
            <p className={style.showResult}>{this.state.showResult}</p>
          </form>
        </section>
      </PageLayout>
    );
  }
}