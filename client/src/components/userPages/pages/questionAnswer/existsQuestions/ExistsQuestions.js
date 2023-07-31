import React, { Component } from 'react';
import PageLayout from '../../../layouts/pageLayout/PageLayout';
import Header from '../../../../commonComponents/header/Header';
import style from './existsQuestions.module.css';
import Button from '../../../../commonComponents/button/Button';

/**
 * Description -
 */
export default class ExistsQuestions extends Component {
  state = {
    questionAnswerData: [],
    showData: false,
    selectIndex: null,
    userId: JSON.parse(localStorage.getItem('user')),
  };

  async getQuestionAnswer() {
    const response = await fetch(
      'http://localhost:5000/userQuestionAnswer/getData',
      {
        method: 'POST',
        crossDomain: true,
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
          'Accept-Control-Allow-Origin': '*',
        },
        body: JSON.stringify({
          userId: this.state.userId._id,
        }),
      }
    );
    const result = await response.json();
    this.setState({ questionAnswerData: result });
  }

  componentDidMount() {
    this.getQuestionAnswer();
  }

  handelClick = index => {
    this.setState({
      showData: true,
      selectIndex: index,
    });
  };

  /**
   * Description - This function delete selected test from the database
   */
  deleteQuestion(questionName) {
    let result = this.state.questionAnswerData.filter(item => {
      return item.questionName !== questionName;
    });
    this.setState({ questionAnswerData: result });

    try {
      fetch('http://localhost:5000/userQuestionAnswer/deleteQuestionAnswer', {
        method: 'POST',
        crossDomain: true,
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
          'Access-Control-Allow-Origin': '*',
        },
        body: JSON.stringify({
          userId: this.state.userId._id,
          questionName: questionName,
        }),
      })
        .then(res => res.json())
        .then(data => {
          if (data.status === 'Question deleted') {
            this.setState({ showResult: 'Test has been deleted' });
            setTimeout(() => {
              this.setState({
                showResult: '',
              });
            }, 1000);
          }
        });
    } catch (error) {
      console.log(error);
    }
  }

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
      'http://localhost:5000/userQuestionAnswer/updateQuestion',
      questionInputData
    );
    const result = await response.json();
    // console.log(result);
    if (result.status === 'true') {
      this.setState({
        showResult: 'The Question has been updated',
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
    const { questionAnswerData, showData, selectIndex } = this.state;
    return (
      <PageLayout>
        <Header h1Heading='Exists Questions/Answers' />
        <section className={style.external}>
          <section className={style.model}>
            <h2>List Of Questions/Answers</h2>
            {questionAnswerData.map((qA, index) => (
              <section key={index}>
                <button
                  onClick={() => {
                    this.handelClick(index);
                  }}
                  className={style.productButton}
                >
                  {qA.questionName}
                </button>
              </section>
            ))}
          </section>
          {showData &&
            selectIndex !== null &&
            selectIndex < questionAnswerData.length && (
              <section className={style.showAllData}>
                <h2 className={style.h2}>Question/Answer Data</h2>
                <div>
                  <h3>
                    Question Name:
                    {questionAnswerData[selectIndex].questionName}
                  </h3>
                  <h3>
                    Question Text:
                    {questionAnswerData[selectIndex].questionText}
                  </h3>
                  <button
                    onClick={() => {
                      const indexToDelete =
                        questionAnswerData[selectIndex].questionName;

                      this.deleteQuestion(indexToDelete);
                    }}
                    className={style.deleteButton}
                  >
                    Delete
                  </button>
                  <section>
                    <form
                      onSubmit={this.handleSubmit.bind(this)}
                      className={style.form}
                    >
                      <textarea
                        className={style.textArea}
                        value={this.state.questionText}
                        name='tarea'
                        rows='6'
                        cols='40'
                        placeholder=' Write text here'
                        required
                        onChange={e =>
                          this.setState({ questionText: e.target.value })
                        }
                      ></textarea>

                      <p className={style.showResult}>
                        {this.state.showResult}
                      </p>

                      <Button type='submit' text='submit' />
                      <p className={style.showResult}>
                        {this.state.showResult}
                      </p>
                    </form>
                  </section>
                </div>
              </section>
            )}
        </section>
      </PageLayout>
    );
  }
}
