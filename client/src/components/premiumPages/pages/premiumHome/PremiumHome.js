import React, { Component } from 'react';
import Header from '../../../commonComponents/header/Header';
import style from './premiumHome.module.css';
import PageLayout from '../../layouts/pageLayout/PageLayout';
import DiagnosticInformationLayout from '../../../adminPages/layouts/diagnosticInformationLayout/DiagnosticInformationLayout';

/**
 * Description -
 */
export default class PremiumHome extends Component {
  state = {
    usersData: [],
    amountOfUsers: 0,
    questionAnswerData: [],
    openQuestions: 0,
    closedQuestions: 0,
    overallUsersRate: 0,
  
  };

  /**
   * Description - This function activate functions when the page is uploaded
   */
  async componentDidMount() {
    await this.getQuestionAnswer();
    this.showQuestionAnswerData();
    this.calculateRate();
    await this.getUsersData();
    this.showAmountOfUser();
   
  }

  /**
   * Description - This function checks if the usersData and questionAnswerData state have changed since the previous update. If they have, it triggers the necessary functions to update the related data and calculations.
   * @param {*} prevState - previous state of the functions
   */
  async componentDidUpdate(prevProps, prevState) {
    if (prevState.usersData !== this.state.usersData) {
      this.showAmountOfUser();
    }

    if (prevState.questionAnswerData !== this.state.questionAnswerData) {
      this.showQuestionAnswerData();
      this.calculateRate();
    }

    if (prevState.learnedData !== this.state.learnedData) {
      this.calculateMostLearnedComponent();
    }
  }

  /**
   * Description - This function get all the data about the users from the server
   */
  async getUsersData() {
    try {
      const response = await fetch(
        'http://localhost:5000/adminReports/getUsersData',
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
      this.setState({
        usersData: result,
      });
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }

  /**
   * Description - This function calculate the amount of "User" have sign up
   */
  showAmountOfUser() {
    const usersData = this.state.usersData;
    // console.log(usersData)
    let amountOfUsers = 0;

    for (let index = 0; index < usersData.length; index++) {
      if (usersData[index].userType === 'User') {
        amountOfUsers = amountOfUsers + 1;
      }
    }

    this.setState({
      amountOfUsers: amountOfUsers,
    });
  }

  /**
   * Description - This function get all the data of Question / Answer from the server
   */
  async getQuestionAnswer() {
    try {
      const response = await fetch(
        'http://localhost:5000/adminReports/getQuestionAnswerData',
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

      this.setState({
        questionAnswerData: result,
      });
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }

  /**
   * Description - This function show the amount of open and closed questions
   */
  showQuestionAnswerData() {
    const questionAnswerData = this.state.questionAnswerData;
    let openQuestions = 0;
    let closedQuestions = 0;

    for (let index = 0; index < questionAnswerData.length; index++) {
      if (!questionAnswerData[index].haveAnAnswer) {
        openQuestions++;
      } else {
        closedQuestions++;
      }
    }

    this.setState({
      openQuestions: openQuestions,
      closedQuestions: closedQuestions,
    });
  }

  /**
   * Description - This function show the average rate given by the users
   */
  calculateRate() {
    const questionAnswerData = this.state.questionAnswerData;
    let rate = 0;
    let users = 0;
    let index = 0;
    for (; index < questionAnswerData.length; index++) {
      if (
        questionAnswerData[index].haveAnAnswer &&
        questionAnswerData[index].selectedStars > 0
      ) {
        rate = rate + questionAnswerData[index].selectedStars;
        users = users + 1;
      }
    }

    if (users > 0) {
      const overallRate = rate / users;
      this.setState({
        overallUsersRate: overallRate,
      });
    }
  }

  
  render() {
    return (
      <PageLayout>
        <Header h1Heading='PC BUILDER Premium' />
        <div className={style.premiumHome}>
          <section className={style.section}>
            <DiagnosticInformationLayout
              h2='Open Questions'
              text={this.state.openQuestions}
              to='/questionsAnswersReportPremium'
              name='More Info'
            />
            <DiagnosticInformationLayout
              h2='Close Questions'
              text={this.state.closedQuestions}
              to='/questionsAnswersReportPremium'
              name='More Info'
            />

            <DiagnosticInformationLayout
              h2='Overall Users Rate'
              text={Array.from(
                { length: this.state.overallUsersRate },
                (_, index) => (
                  <span key={index}>★</span>
                )
              )}
              to='/questionsAnswersReportPremium'
              name='More Info'
            />

            <DiagnosticInformationLayout
              h2='Amount Of Users'
              text={this.state.amountOfUsers}
              to='/usersDataReportPremium'
              name='More Info'
            />
          </section>
        </div>
      </PageLayout>
    );
  }
}
