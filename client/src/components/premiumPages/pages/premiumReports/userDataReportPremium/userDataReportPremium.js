import React, { Component } from 'react'
import PageLayout from '../../../layouts/pageLayout/PageLayout';
import Header from '../../../../commonComponents/header/Header';
import style from './userDataReportPremium.module.css';

export default class userDataReportPremium extends Component {
  state = {
    usersData: [],
    amountOfUsers: 0,
  };

  async componentDidMount() {
    await this.getUsersData();
  }

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

      // Filter users of type 'user'
      const usersOfTypeUser = result.filter(data => data.userType === 'User');

      this.setState({
        usersData: usersOfTypeUser,
      });
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }
  render() {
    return (
      <PageLayout>
        <Header h1Heading='Users Data Reports' />
        <table className={style.table}>
          <thead>
            <tr className={style.tr}>
              <th>User Type</th>
              <th>User Full Name</th>
              <th>User Email</th>
            </tr>
          </thead>
          <tbody>
            {this.state.usersData.map(data => (
              <tr key={data._id}>
                <td>{data.userType}</td>
                <td>{data.fullName}</td>
                <td>{data.email}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </PageLayout>
    );
  }
}
