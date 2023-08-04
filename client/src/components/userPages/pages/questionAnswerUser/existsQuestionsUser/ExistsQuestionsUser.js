import React, { Component } from 'react';
import PageLayout from '../../../layouts/pageLayout/PageLayout';
import Header from '../../../../commonComponents/header/Header';
import style from './existsQuestionsUser.module.css';
import Button from '../../../../commonComponents/button/Button';

/**
 * Description - This class show the question/answer data
 */
export default class ExistsQuestionsUser extends Component {
  state = {
    questionAnswerData: [],
    showData: false,
    selectIndex: null,
    questionText: '',
    questionText2: '',
    userId: JSON.parse(localStorage.getItem('user'))._id,
    selectedStars: 0,
  };

  /**
   * Description - This function get all the question/answer from the server
   */
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
          userId: this.state.userId,
        }),
      }
    );
    const result = await response.json();
    result.sort((a, b) => a.questionName.localeCompare(b.questionName));
    this.setState({ questionAnswerData: result });
  }

  /**
   * Description - This function activate the getQuestionAnswer function when the page is uploaded
   */
  componentDidMount() {
    this.getQuestionAnswer();
  }

  /**
   * Description - This function show the question/answer data
   * @param {*} index
   */
  handelClick = index => {
    this.setState({
      questionText2: this.state.questionAnswerData[index].questionText,
    });
    this.setState({
      showData: true,
      selectIndex: index,
    });
  };

  /**
   * Description - This function delete selected Question from the database if the question have no answer
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
          userId: this.state.userId,
          questionName: questionName,
        }),
      })
        .then(res => res.json())
        .then(data => {
          if (data.status === 'Question deleted') {
            this.setState({ showResult: 'Test has been deleted' });
            this.setState({ showData: false });
            setTimeout(() => {
              this.setState({
                showResult: '',
              });
            }, 2000);
          }
        });
    } catch (error) {
      console.log(error);
    }
  }

  handleStarClick = selectedStarCount => {
    this.setState({ selectedStars: selectedStarCount });
  };

  /**
   * Description - This function update the question text in the server
   * @param {*} e - Question text value
   */
  async handleSubmit(e) {
    e.preventDefault();
    let dataToSend = {
      userId: this.state.userId,
      questionText:
        this.state.questionAnswerData[this.state.selectIndex].questionText +
        ' ? ' +
        this.state.questionText,
      questionName:
        this.state.questionAnswerData[this.state.selectIndex].questionName,
    };

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
      'http://localhost:5000/userQuestionAnswer/updateQuestion',
      questionInputData
    );
    const result = await response.json();
    // console.log(result);
    if (result.status === 'true') {
      this.setState({
        showResult: 'The Question has been updated',
      });
      this.setState({
        questionText2:
          this.state.questionAnswerData[this.state.selectIndex].questionText +
          ' ? ' +
          this.state.questionText,
      });

      setTimeout(() => {
        this.setState({
          showResult: '',
        });
      }, 1000);
    }
  }
  render() {
    const { questionAnswerData, showData, selectIndex, selectedStars } =
      this.state;
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
                  <h3 className={style.h3}>
                    <span className={style.span}> Question Name:</span>
                    {questionAnswerData[selectIndex].questionName}
                  </h3>
                  <h3 className={style.h3}>
                    <span className={style.span}> Question Text:</span>
                    {this.state.questionText2
                      .split('?')
                      .map((part, index, array) => (
                        <span key={index}>
                          {part}
                          {index !== array.length - 1 && (
                            <span style={{ color: 'red' }}>?</span>
                          )}
                        </span>
                      ))}
                  </h3>
                  {!questionAnswerData[selectIndex].haveAnAnswer && (
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
                  )}

                  <h3 className={style.h3}>
                    <span className={style.span}>Question Answer:</span>
                    {questionAnswerData[selectIndex].answerText
                      .split('|')
                      .map((part, index, array) => (
                        <span key={index}>
                          {part}
                          {index !== array.length - 1 && (
                            <span style={{ color: 'red' }}>|</span>
                          )}
                        </span>
                      ))}
                  </h3>
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

                      <Button type='submit' text='submit' />

                      {questionAnswerData[selectIndex].haveAnAnswer && (
                        <section className={style.starsLocation}>
                          {[1, 2, 3, 4, 5].map(star => (
                            <span
                              key={star}
                              style={{
                                cursor: 'pointer',
                                color:
                                  star <= selectedStars ? 'orange' : 'grey',
                                fontSize: `60px`, // Set the font size to control the star size
                              }}
                              onClick={() => this.handleStarClick(star)}
                            >
                              ★
                            </span>
                          ))}
                        </section>
                      )}
                    </form>
                  </section>
                </div>
              </section>
            )}
        </section>
        <p className={style.showResult}>{this.state.showResult}</p>
      </PageLayout>
    );
  }
}
