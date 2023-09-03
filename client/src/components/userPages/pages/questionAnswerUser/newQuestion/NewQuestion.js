import React, { Component } from 'react';
import PageLayout from '../../../layouts/pageLayout/PageLayout';
import Header from '../../../../commonComponents/header/Header';
import style from './newQuestion.module.css';
import Button from '../../../../commonComponents/button/Button';

/**
 * Description - This class add question to the server
 */
export default class NewQuestion extends Component {
  state = {
    questionName: '',
    questionText: '',
    showResult: '',
    questionAnswerText: [],
  };

  /**
   * Description - This function add the question data to the server
   * @param {*} e - Question data
   */
  async handleSubmit(e) {
    const date = new Date();
    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();

    const questionDate = `${day}/${month}/${year}`;

    const userId = JSON.parse(localStorage.getItem('user'));

    const dataToSend = {
      userId: userId._id,
      userEmail: userId.email,
      userFullName: userId.fullName,
      questionName: this.state.questionName,
      questionAnswerText: {
        questionText: this.state.questionText,
        userType: userId.userType,
      },
      answerText: '',
      haveAnAnswer: false,
      selectedStars: 0,
      questionDate,
    };

    e.preventDefault();
    const questionInputData = {
      method: 'POST',
      crossDomain: true,
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        'Accept-Control-Allow-Origin': '*',
      },
      body: JSON.stringify(dataToSend),
    };

    const response = await fetch(
      'http://localhost:5000/userQuestionAnswer/newQuestion',
      questionInputData
    );
    const result = await response.json();
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
