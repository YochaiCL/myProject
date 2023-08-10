import React, { Component } from 'react';
import PageLayout from '../../../layouts/pageLayout/PageLayout';
import Header from '../../../../commonComponents/header/Header';
import style from './existsTests.module.css';
import { CSVLink } from 'react-csv';

/**
 * Description - This class show the exists tests and can delete them
 */
export default class ExistsTests extends Component {
  state = {
    tests: [],
    showData: false,
    selectIndex: null,
    userId: JSON.parse(localStorage.getItem('user')),
  };

  /**
   * Description - This Function get all the tests from the server
   */
  async getTest() {
    const response = await fetch('http://localhost:5000/existsTests/getTests', {
      method: 'POST',
      crossDomain: true,
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        'Accept-Control-Allow-Origin': '*',
      },
      body: JSON.stringify({
        userId: this.state.userId._id,
      }),
    });
    const result = await response.json();
    this.setState({ tests: result });
  }

  /**
   * Description - This function activate the getTest function When the page is uploaded
   */
  componentDidMount() {
    this.getTest();
  }

  /**
   * Description - This function open the data of the selected test
   * @param {*} index
   */
  handelClick = index => {
    this.setState({
      showData: true,
      selectIndex: index,
    });
  };

  /**
   * Description - This function delete selected test from the database
   */
  deleteTest(testName) {
    let result = this.state.tests.filter(item => {
      return item.testName !== testName;
    });
    this.setState({ tests: result });

    try {
      fetch('http://localhost:5000/existsTests/deleteTest', {
        method: 'POST',
        crossDomain: true,
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
          'Access-Control-Allow-Origin': '*',
        },
        body: JSON.stringify({
          userId: this.state.userId._id,
          testName: testName,
        }),
      })
        .then(res => res.json())
        .then(data => {
          if (data.status === 'Test deleted') {
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

  exportByEmail(testData) {
    try {
      fetch('http://localhost:5000/existsTests/sendByEmail', {
        method: 'POST',
        crossDomain: true,
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
          'Access-Control-Allow-Origin': '*',
        },
        body: JSON.stringify({
          userEmail: this.state.userId.email,
          testData: testData,
        }),
      })
        .then(res => res.json())
        .then(data => {
          if (data.status === 'Email send') {
            this.setState({ showResult: 'Email has been sended' });
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
    const { tests, showData, selectIndex, showResult } = this.state;
    return (
      <PageLayout>
        <Header h1Heading='Exists Test' />
        <section className={style.external}>
          <section className={style.model}>
            <h2>List Of Tests</h2>
            {tests.map((test, index) => (
              <section key={index}>
                <button
                  onClick={() => {
                    this.handelClick(index);
                  }}
                  className={style.productButton}
                >
                  {test.testName}
                </button>
              </section>
            ))}
          </section>
          {showData && selectIndex !== null && selectIndex < tests.length && (
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

                <button
                  onClick={() => {
                    const indexToDelete =
                      this.state.tests[this.state.selectIndex].testName;

                    this.deleteTest(indexToDelete);
                  }}
                  className={style.deleteButton}
                >
                  Delete
                </button>
                <button
                  className={style.deleteButton}
                  onClick={() => {
                    this.exportByEmail(
                      this.state.tests[this.state.selectIndex]
                    );
                  }}
                >
                  Export To Email
                </button>
                <CSVLink
                  data={[this.state.tests[this.state.selectIndex]]}
                  filename={`test_data_${
                    this.state.tests[this.state.selectIndex].testName
                  }.csv`}
                  className={style.exportButton}
                >
                  Export To Excel
                </CSVLink>
              </div>
              {this.state.tests.length >= 1 && (
                <p className={style.showResult}>{showResult}</p>
              )}
            </section>
          )}
        </section>
        {this.state.tests.length === 0 && (
          <p className={style.showResult}>{showResult}</p>
        )}
      </PageLayout>
    );
  }
}
