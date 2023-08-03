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
      console.log(user, this.state.users);
      if (!this.state.users.includes(user.userEmail)) {
        this.state.users.push(user.userEmail);
      }
    }
  }

  componentDidMount() {
    this.getQuestionAnswer();
  }

  // componentDidUpdate(){
  //   if(this.state.selectIndex < this.state.questions.length){
  //     this.setState({selectIndex : this.state.selectIndex})
  //   } else {
  //     this.setState({selectIndex : 0})
  //   }
  // }

  handelClick = index => {
    console.log(index, this.state.questions.length);
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
      console.log(1245);
    }
  };

  handelClickQuestion = (qA, index) => {
    this.setState({ questions: [] });
    if (this.state.selectIndex) this.setState({ selectIndex: 0 });
    let array = [];
    for (let data of this.state.questionAnswerData) {
      if (data.userEmail === qA) {
        console.log(qA, data);
        array.push(data);
        this.setState(prevState => ({
          showQuestionsNames: true,
          // questionIndex: index,
        }));
      }
    }
    this.setState({ questions: array });
    console.log(this.state.questions, this.state.showQuestionsNames);
  };
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
            {/* {showQuestionsNames &&
              questionIndex !== null &&
              questionIndex < questionAnswerData.length && (
                <section className={style.showAllData}>
                  <button
                    className={style.h2}
                    onClick={() => {
                      this.handelClick(questionIndex);
                    }}
                  >
                    {questionAnswerData[questionIndex].questionName}
                  </button>
                </section>
              )} */}
            {console.log(this.state.questions, showQuestionsNames)}
            {showQuestionsNames ? (
              <div>
                {this.state.questions.map((qA, index) => {
                  console.log(qA);
                  return (
                    <section className={style.showAllData} key={qA._id}>
                      <button
                        className={style.h2}
                        onClick={() => {
                          this.handelClick(index);
                        }}
                      >
                        {qA.questionName}
                      </button>
                    </section>
                  );
                })}
              </div>
            ) : (
              ''
            )}
            {/* {showQuestionsNames &&
              this.state.questions.length > 0 &&
              this.state.questions.map((qA, index) => {
                <section className={style.showAllData}>
                  <button
                    className={style.h2}
                    onClick={() => {
                      this.handelClick(index);
                    }}
                  >
                    {qA.questionName}
                  </button>
                </section>;
              })} */}
          </section>

          {showData &&
            selectIndex !== null &&
            selectIndex < this.state.questions.length && (
              <section className={style.showAllData}>
                <h2 className={style.h2}>Question/Answer Data</h2>
                <div>
                  <h3>
                    Question Name:
                    {this.state.questions[selectIndex].questionName}
                  </h3>
                  <h3>
                    Question Text:
                    {this.state.questions[selectIndex].questionText}
                  </h3>

                  <h3>
                    Question Answer:
                    {this.state.questions[selectIndex].answerText}
                  </h3>

                  <section>
                    <form
                      // onSubmit={this.handleSubmit.bind(this)}
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

                      {/* {questionAnswerData[selectIndex].haveAnAnswer && (
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
                      )} */}
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
