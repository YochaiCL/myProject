import React, { Component } from 'react';
import PageLayout from '../../../layouts/pageLayout/PageLayout';
import Header from '../../../../commonComponents/header/Header';
import style from './questionsAnswersReportAdmin.module.css';

/**
 * Description - This class display the question/answer report
 */
export default class QuestionsAnswersReport extends Component {
  state = {
    questionAnswerData: [],
    openQuestions: 0,
    closedQuestions: 0,
  };

  /**
   * Description - This function activate the function getQuestionAnswer when the page is uploaded
   */
  async componentDidMount() {
    this.getQuestionAnswer();
  }

  /**
   * Description - This function get all the data of the question/answer from the server
   */
  async getQuestionAnswer() {
    try {
      const response = await fetch(
        'http://localhost:5000/reports/getQuestionAnswerData',
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

      console.log(result);

      this.setState({
        questionAnswerData: result,
      });
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }
  render() {
    return (
      <PageLayout>
        <Header h1Heading='Question Answer Reports' />
        <table className={style.table}>
          <thead>
            <tr className={style.tr}>
              <th>User Name</th>
              <th>User Email</th>
              <th>Question Name</th>
              <th>Question Text</th>
              <th>Answer Text</th>
              <th>Have an Answer</th>
              <th>Selected Stars</th>
              <th>Question Date</th>
            </tr>
          </thead>
          <tbody>
            {this.state.questionAnswerData.map(data => (
              <tr key={data._id}>
                <td>{data.userFullName}</td>
                <td>{data.userEmail}</td>
                <td>{data.questionName}</td>
                <td>
                  {
                    data.questionAnswerText[data.questionAnswerText.length - 2]
                      .questionText
                  }
                </td>
                <td>
                  {
                    data.questionAnswerText[data.questionAnswerText.length - 1]
                      .questionText
                  }
                </td>
                <td>{data.haveAnAnswer ? 'Yes' : 'No'}</td>
                <td>{data.selectedStars}</td>
                <td>{data.questionDate}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </PageLayout>
    );
  }
}
