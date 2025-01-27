import React, { Component } from 'react';
import PageLayout from '../../../layouts/pageLayout/PageLayout';
import Header from '../../../../commonComponents/header/Header';
import style from './usersDataReportsAdmin.module.css';

/**
 * Description - This class show the users information report
 */
export default class UsersDataReportsAdmin extends Component {
  state = {
    usersData: [],
    amountOfUsers: 0,
  };

  /**
   * Description - This function activate the getUsersData() function when the page is uploaded
   */
  async componentDidMount() {
    await this.getUsersData();
  }

  /**
   * Description - this function get all the users data from the server
   */
  async getUsersData() {
    try {
      const response = await fetch(
        'http://localhost:5000/reports/getUsersData',
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
