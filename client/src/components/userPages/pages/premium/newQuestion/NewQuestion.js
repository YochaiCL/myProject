import React, { Component } from 'react';
import PageLayout from '../../../layouts/pageLayout/PageLayout';
import Header from '../../../../pageSettings/header/Header';
import style from './newQuestion.module.css';
import Button from '../../../../pageSettings/button/Button';

export default class NewQuestion extends Component {
  state = {
    questionName: '',
    questionText: '',
    questionSend: '',
  };
  // Asynchronous function to handle form submission
  async handleSubmit(e) {
    e.preventDefault();
    let user = JSON.parse(localStorage.getItem('user'));
    // Preventing the default form submission behavior
    fetch('http://localhost:5000/userQuestionAnswer', {
      method: 'POST',
      crossDomain: true,
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
      body: JSON.stringify({
        userId: user._id,
        questionName: this.state.questionName,
        questionText: this.state.questionText,
        questionSend: 'Question Have Sended',
      }),
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);
      });
  }

  render() {
    return (
      <PageLayout>
        <Header h1Heading='New Question' />
        <section>
          <form onSubmit={this.handleSubmit.bind(this)} className={style.form}>
            <input
              type='text'
              placeholder='Enter Question Name:'
              value={this.state.questionName}
              required
              onChange={e => this.setState({ questionName: e.target.value })}
            />

            <textarea
              name='tarea'
              rows='6'
              cols='40'
              placeholder=' Write text here'
              required
              onChange={e => this.setState({ questionText: e.target.value })}
            ></textarea>

            <Button type='submit' text='submit' />
            <p>{this.state.questionSend}</p>
          </form>
        </section>
      </PageLayout>
    );
  }
}
