import React, { Component } from 'react';
import PageLayout from '../../../layouts/pageLayout/PageLayout';
import Header from '../../../../commonComponents/header/Header';
import style from './existsTests.module.css';

/**
 * Description -
 */
export default class ExistsTests extends Component {
  state = {
    tests: [{ testName: 'Loading data...' }],
    showData: false,
    selectIndex: null,
  };

  /**
   * Description
   */
  async getProducts() {
    const response = await fetch('http://localhost:5000/existsTests/getTests');
    const result = await response.json();
    // console.log(result);
    this.setState({ tests: result });
  }

  /**
   * Description
   */
  componentDidMount() {
    this.getProducts();
  }

  /**
   * Description
   * @param {*} index
   */
  handelClick = index => {
    this.setState({
      showData: true,
      selectIndex: index,
    });
  };

  /**
   * Description - This function delete selected assembly from the database
   */
  deleteTest(testName) {
    // Remove the deleted test from the state
    let result = this.state.tests.filter(item => {
      return item.testName !== testName;
    });
    this.setState({ tests: result });

    // Now, call the backend API to delete the test from the database
    try {
      fetch('http://localhost:5000/existsTests/deleteTest', {
        // Setting headers for the HTTP request
        method: 'POST',
        crossDomain: true,
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
          'Access-Control-Allow-Origin': '*',
        },
        body: JSON.stringify({
          testName: testName,
        }),
      })
        // Parsing the response as JSON
        .then(res => res.json())
        // Handling the response data
        .then(data => {
          if (data.status === 'Component deleted') {
            this.setState({ showResult: 'Test has been deleted' });
            setTimeout(() => {
              this.setState({
                showResult: '',
              });
            }, 1000);
          }
        });
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    return (
      <PageLayout>
        <Header h1Heading='Exists Test' />
        <section className={style.external}>
          <section className={style.model}>
            <h2>List Of Tests</h2>
            {this.state.tests.map((test, index) => (
              <section key={index}>
                <button
                  onClick={() => {
                    this.handelClick(index);
                  }}
                  className={style.productButton}
                >
                  {test.testName}
                </button>
                <button
                  onClick={() => {
                    this.deleteTest(test.testName);
                  }}
                  className={style.deleteButton}
                >
                  Delete
                </button>
              </section>
            ))}
          </section>
          {this.state.showData && this.state.selectIndex !== null && (
            <section className={style.showAllData}>
              <h2 className={style.h2}>Test Data</h2>
              <div>
                <h3>
                  <span className={style.span}>Test Name:</span>
                  {this.state.tests[this.state.selectIndex].testName}
                </h3>
                <h3>
                  <span className={style.span}> Model Motherboard :</span>

                  {this.state.tests[this.state.selectIndex].modelMotherboard}
                </h3>
                <h3>
                  <span className={style.span}> Model CPU :</span>
                  {this.state.tests[this.state.selectIndex].modelCPU}
                </h3>
                <h3>
                  <span className={style.span}> Model CPU Cooler:</span>

                  {this.state.tests[this.state.selectIndex].modelCPUCooler}
                </h3>
                <h3>
                  <span className={style.span}> Model GPU:</span>

                  {this.state.tests[this.state.selectIndex].modelGPU}
                </h3>
                <h3>
                  <span className={style.span}> Model PSU:</span>

                  {this.state.tests[this.state.selectIndex].modelPSU}
                </h3>
                <h3>
                  <span className={style.span}> Model RAM:</span>

                  {this.state.tests[this.state.selectIndex].modelRAM}
                </h3>
                <h3>
                  <span className={style.span}> Model SSD :</span>
                  {this.state.tests[this.state.selectIndex].modelSSD}
                </h3>
                <h3>
                  <span className={style.span}> Model Case :</span>

                  {this.state.tests[this.state.selectIndex].modelCase}
                </h3>
              </div>
            </section>
          )}
        </section>
      </PageLayout>
    );
  }
}
