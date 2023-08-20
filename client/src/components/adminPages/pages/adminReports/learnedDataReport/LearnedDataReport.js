import React, { Component } from 'react';
import PageLayout from '../../../layouts/pageLayout/PageLayout';
import Header from '../../../../commonComponents/header/Header';
import style from './learnedDataReport.module.css';

/**
 * Description - This class define the amount components that have learned by the users
 */
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
        'http://localhost:5000/reports/getLearnedData',
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
      const updatedComponentSums = {
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
      };

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
    // Convert componentSums object into an array of key-value pairs
    const componentSumsArray = Object.entries(this.state.componentSums);

    // Sort the array by values in descending order
    componentSumsArray.sort((a, b) => b[1] - a[1]);

    // Create a new object using the sorted array
    const sortedComponentSums = Object.fromEntries(componentSumsArray);

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
            {Object.keys(sortedComponentSums).map(component => (
              <tr key={component}>
                <td>{component}</td>
                <td>{sortedComponentSums[component]}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </PageLayout>
    );
  }
}
