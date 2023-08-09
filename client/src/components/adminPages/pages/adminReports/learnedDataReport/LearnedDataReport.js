import React, { Component } from 'react';
import PageLayout from '../../../layouts/pageLayout/PageLayout';
import Header from '../../../../commonComponents/header/Header';
import style from './learnedDataReport.module.css';

export default class LearnedDataReport extends Component {
  state = {
    mostLearnedComp: '',
    learnedData: [],
    componentSums: {
      motherboard: 0,
      cpu: 0,
      cpuCooler: 0,
      gpu: 0,
      psu: 0,
      ram: 0,
      ssd: 0,
      dvd: 0,
      cables: 0,
      case: 0,
      fans: 0,
      hd: 0,
    },
  };

  /**
   * Description - This function activate functions when the page is uploaded
   */
  async componentDidMount() {
    await this.getLearnedData();
  }

  /**
   * Description - This function get all the data about the learned components from the server
   */
  async getLearnedData() {
    try {
      const response = await fetch(
        'http://localhost:5000/adminReports/getLearnedData',
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

      // Create a new object to hold the updated componentSums
      const updatedComponentSums = { ...this.state.componentSums };

      result.forEach(data => {
        Object.keys(updatedComponentSums).forEach(component => {
          if (data[component] && data[component].haveLearned === true) {
            updatedComponentSums[component]++;
          }
        });
      });

      this.setState({
        learnedData: result,
        componentSums: updatedComponentSums, // Update the state with the new object
      });
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }
  render() {
    return (
      <PageLayout>
        <Header h1Heading='Learned Data Report' />
        <table className={style.table}>
          <thead>
            <tr className={style.tr}>
              <th>Component</th>
              <th>Sum of haveLearned</th>
            </tr>
          </thead>
          <tbody>
            {Object.keys(this.state.componentSums).map(component => (
              <tr key={component}>
                <td>{component}</td>
                <td>{this.state.componentSums[component]}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </PageLayout>
    );
  }
}
