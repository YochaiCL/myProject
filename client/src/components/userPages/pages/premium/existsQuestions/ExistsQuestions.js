import React, { Component } from 'react';
import PageLayout from '../../../layouts/pageLayout/PageLayout';
import Header from '../../../../commonComponents/header/Header';
import style from './existsQuestions.module.css';
import Button from '../../../../commonComponents/button/Button';

export default class ExistsQuestions extends Component {
  state = {
    products: [{ questionName: 'Loading data...' }],
    showData: false,
    selectIndex: null,
  };

  async getQuestionAnswer() {
    // Parsing the user data from localStorage
    let user = JSON.parse(localStorage.getItem('user'));
    // console.log(user);
    // Sending a POST request to the getData endpoint
    fetch('http://localhost:5000/userQuestionAnswer/getData', {
      method: 'POST',
      crossDomain: true,
      headers: {
        // Setting headers for the HTTP request
        'Content-Type': 'application/json',
        Accept: 'application/json',
        'Accept-Control-Allow-Origin': '*',
      },
      // Sending the userId in the request body
      body: JSON.stringify({
        userId: user._id,
      }),
    })
      // Parsing the response as JSON
      .then(res => res.json())
      // Handling the response data
      .then(data => {
        console.log(data, 'userData');
        // Updating the state with the received data
        this.setState({ products: data });
      });
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
    return (
      <PageLayout>
        <Header h1Heading='Exists Questions' />
        <section className={style.external}>
          <section className={style.model}>
            <h2>List Of Products</h2>
            {this.state.products.map((product, index) => (
              <section key={index}>
                <button
                  onClick={() => {
                    this.handelClick(index);
                  }}
                  className={style.productButton}
                >
                  {product.questionName}
                </button>
              </section>
            ))}
          </section>
          {this.state.showData && this.state.selectIndex !== null && (
            <section className={style.showAllData}>
              <h2 className={style.h2}>Product Data</h2>
              <div>
                <h3>
                  Question Name:
                  {this.state.products[this.state.selectIndex].questionName}
                </h3>
                <h3>
                  Question Text:
                  {this.state.products[this.state.selectIndex].questionText}
                </h3>
                <Button text='Delete' />
                {/* <section>
                  <form
                    onSubmit={this.handleSubmit.bind(this)}
                    className={style.form}
                  >
                    <textarea
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
                    <p>{this.state.questionSend}</p>
                  </form>
                </section> */}
              </div>
            </section>
          )}
        </section>
      </PageLayout>
    );
  }
}
