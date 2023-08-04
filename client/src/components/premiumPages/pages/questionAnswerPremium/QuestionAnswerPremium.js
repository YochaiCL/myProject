import React, { Component } from 'react';
import PageLayout from '../../layouts/pageLayout/PageLayout';
import Header from '../../../commonComponents/header/Header';
import style from './questionAnswerPremium.module.css';
import Button from '../../../commonComponents/button/Button';

/**
 * Description -
 */
export default class QuestionAnswerPremium extends Component {
  state = {
    questionAnswerData: [],
    questions: [],
    users: [],
    showData: false,
    answerText: '',
    answerText2: '',
    selectIndex: null,
    showQuestionsNames: false,
    questionIndex: null,
  };

  async getQuestionAnswer() {
    const response = await fetch(
      'http://localhost:5000/premiumQuestionAnswer/getData',
      {
        method: 'POST',
        crossDomain: true,
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
          'Accept-Control-Allow-Origin': '*',
        },
      }
    );
    const result = await response.json();
    this.setState({ questionAnswerData: result });
    for (let user of result) {
      // console.log(user, this.state.users);
      if (!this.state.users.includes(user.userEmail)) {
        this.state.users.push(user.userEmail);
      }
    }
  }

  componentDidMount() {
    this.getQuestionAnswer();
  }

  handelClick = index => {
    // console.log(index, this.state.questions.length);
    this.setState({
      answerText2: this.state.questionAnswerData[index].answerText,
    });
    if (index >= this.state.questions.length) {
      this.setState({
        showData: true,
        selectIndex: 0,
      });
    } else {
      this.setState({
        showData: true,
        selectIndex: index,
      });
    }
  };

  handelClickQuestion = (qA, index) => {
    this.setState({ questions: [] });
    if (this.state.selectIndex) this.setState({ selectIndex: 0 });
    let array = [];
    for (let data of this.state.questionAnswerData) {
      if (data.userEmail === qA) {
        // console.log(qA, data);
        array.push(data);
        this.setState(prevState => ({
          showQuestionsNames: true,
          // questionIndex: index,
        }));
      }
    }
    this.setState({ questions: array });
    // console.log(this.state.questions, this.state.showQuestionsNames);
  };

  async handleSubmit(e) {
    e.preventDefault();

    console.log(
      this.state.questionAnswerData[this.state.selectIndex].haveAnAnswer
    );

    let dataToSend;
    if (!this.state.questionAnswerData[this.state.selectIndex].haveAnAnswer) {
      dataToSend = {
        userId: this.state.questionAnswerData[this.state.selectIndex].userId,
        answerText: this.state.answerText,
        questionName:
          this.state.questionAnswerData[this.state.selectIndex].questionName,
      };
    } else {
      dataToSend = {
        userId: this.state.questionAnswerData[this.state.selectIndex].userId,
        answerText:
          this.state.questionAnswerData[this.state.selectIndex].answerText +
          ' | ' +
          this.state.answerText,
        questionName:
          this.state.questionAnswerData[this.state.selectIndex].questionName,
      };
    }
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
      'http://localhost:5000/premiumQuestionAnswer/updateAnswer',
      questionInputData
    );
    const result = await response.json();
    // console.log(result);
    if (result.status === 'true') {
      this.setState({
        answerText: this.state.answerText,
        showResult: 'The Answer has been updated',
      });

      this.setState({
        answerText2:
          this.state.questionAnswerData[this.state.selectIndex].answerText +
          ' | ' +
          this.state.answerText,
      });

      setTimeout(() => {
        this.setState({
          showResult: '',
        });
      }, 1000);
      this.getQuestionAnswer();
    }
  }
  render() {
    const { showData, selectIndex, showQuestionsNames } = this.state;
    return (
      <PageLayout>
        <Header h1Heading='Question Answer' />
        <section className={style.external}>
          <section className={style.model}>
            <h2>List Of Questions/Answers</h2>
            {this.state.users.map((qA, index) => (
              <section key={index}>
                <button
                  onClick={() => {
                    this.handelClickQuestion(qA, index);
                  }}
                  className={style.productButton}
                >
                  {qA}
                </button>
              </section>
            ))}

            {showQuestionsNames ? (
              <section className={style.questions}>
                {this.state.questions.map((qA, index) => {
                  // console.log(qA);
                  return (
                    <section key={qA._id}>
                      <button
                        className={style.btn}
                        onClick={() => {
                          this.handelClick(index);
                        }}
                      >
                        {qA.questionName}
                      </button>
                    </section>
                  );
                })}
              </section>
            ) : (
              ''
            )}
          </section>

          {showData &&
            selectIndex !== null &&
            selectIndex < this.state.questions.length && (
              <section className={style.showAllData}>
                <h2 className={style.h2}>Question/Answer Data</h2>
                <div>
                  <h3 className={style.h3}>
                    <span className={style.span}> Question Name:</span>

                    {this.state.questions[selectIndex].questionName}
                  </h3>
                  <h3 className={style.h3}>
                    <span className={style.span}> Question Text:</span>
                    {this.state.questions[selectIndex].questionText
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

                  <h3 className={style.h3}>
                    <span className={style.span}>Question Answer:</span>

                    {this.state.answerText2
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
                        value={this.state.answerText}
                        name='tarea'
                        rows='6'
                        cols='40'
                        placeholder=' Write text here'
                        required
                        onChange={e =>
                          this.setState({ answerText: e.target.value })
                        }
                      ></textarea>

                      <Button type='submit' text='submit' />
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
