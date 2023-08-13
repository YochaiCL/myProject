import React, { Component } from 'react';
import PageLayout from '../../layouts/pageLayout/PageLayout';
import Header from '../../../commonComponents/header/Header';
import style from './questionAnswerPremium.module.css';
import Button from '../../../commonComponents/button/Button';

/**
 * Description - This class show all question from the users and this class answering those questions
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

  /**
   * Description - This function get all the data from the server
   */
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
      if (!this.state.users.includes(user.userEmail)) {
        this.state.users.push(user.userEmail);
      }
    }
  }

  /**
   * Description - This function activate the getQuestionAnswer function when the page is uploaded
   */
  componentDidMount() {
    this.getQuestionAnswer();
  }

  /**
   * Description - This function show all the data by click on selected item
   * @param {*} index  - Selected item
   */
  handelClick = index => {
    this.setState({
      answerText2: this.state.questions[index].answerText,
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

  /**
   *Description  - This function show all the question of the selected user
   * @param {*} qA - Selsected user
   */
  handelClickQuestion = qA => {
    this.setState({ questions: [] });
    if (this.state.selectIndex) {
      this.setState({ selectIndex: 0 });
    }
    let array = [];
    for (let data of this.state.questionAnswerData) {
      if (data.userEmail === qA) {
        array.push(data);
        this.setState(prevState => ({
          showQuestionsNames: true,
        }));
      }
    }
    this.setState({ questions: array });
  };

  /**
   * Description - This function update an answer to the selected question
   * @param {*} e - Selected question
   */
  async handleSubmit(e) {
    e.preventDefault();

    let dataToSend;
    console.log(this.state.questions[this.state.selectIndex]);
    if (!this.state.questions[this.state.selectIndex].haveAnAnswer) {
      dataToSend = {
        userId: this.state.questions[this.state.selectIndex].userId,
        userEmail: this.state.questions[this.state.selectIndex].userEmail,
        answerText: this.state.answerText,
        questionName: this.state.questions[this.state.selectIndex].questionName,
      };
    } else {
      dataToSend = {
        userId: this.state.questions[this.state.selectIndex].userId,
        answerText:
          this.state.questions[this.state.selectIndex].answerText +
          ' | ' +
          this.state.answerText,
        userEmail: this.state.questions[this.state.selectIndex].userEmail,
        questionName: this.state.questions[this.state.selectIndex].questionName,
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
    console.log(result);
    if (result.status === 'Email send') {
      this.setState({
        answerText: this.state.answerText,
        showResult: 'The Answer has been updated',
      });

      this.setState({
        answerText2:
          this.state.questions[this.state.selectIndex].answerText +
          ' | ' +
          this.state.answerText,
      });
      console.log(
        this.state.questions[this.state.selectIndex].answerText +
          ' | ' +
          this.state.answerText
      );
      console.log(this.state.answerText2);
      this.setState({ answerText: '' });
      setTimeout(() => {
        this.setState({
          showResult: '',
        });
      }, 2000);
      this.getQuestionAnswer();
    }
  }

  /**
   * Description - This function check if the all question of the user get an answer
   * @param {*} userEmail  - User data
   * @returns - True if all question are answered and false otherwise
   */
  checkUserAllHaveAnswers(userEmail) {
    let array = [];
    for (let data of this.state.questionAnswerData) {
      if (data.userEmail === userEmail) {
        array.push(data);
      }
    }
    return array.every(
      data => data.userEmail === userEmail && data.haveAnAnswer
    );
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
                  className={`${style.productButton} ${
                    this.checkUserAllHaveAnswers(qA)
                      ? style.greenBackground
                      : style.redBackground
                  }`}
                >
                  {qA}
                </button>
              </section>
            ))}

            {showQuestionsNames ? (
              <section className={style.questions}>
                {this.state.questions.map((qA, index) => {
                  const hasAnswer = this.state.questionAnswerData.find(
                    data => data._id === qA._id
                  ).haveAnAnswer;

                  return (
                    <section key={qA._id}>
                      <button
                        className={`${style.btn} ${
                          hasAnswer
                            ? style.greenBackground
                            : style.redBackground
                        }`}
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
                    <span className={style.span}> Question Date:</span>
                    {this.state.questions[selectIndex].questionDate}
                  </h3>
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
