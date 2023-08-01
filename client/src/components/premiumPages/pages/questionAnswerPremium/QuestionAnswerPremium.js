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
    showData: false,
    selectIndex: null,
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
  render() {
    const { questionAnswerData, showData, selectIndex } = this.state;
    return (
      <PageLayout>
        <Header h1Heading='Question Answer' />
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
