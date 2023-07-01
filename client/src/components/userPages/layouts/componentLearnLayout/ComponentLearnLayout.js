import React, { Component } from 'react';
import Navbar from '../../navbar/Navbar';
import Footer from '../../../pageSettings/footer/Footer';
import style from './componentLearnLayout.module.css';
import Button from '../../../pageSettings/button/Button';

/**
 * Description - This function organize the products information page
 */
export default class ComponentLearnLayout extends Component {
  state = {
    comment: '',
    array: [],
    showResult: '',
  };

  /**
   * Description - This function get the user data when the page is upload
   */
  componentDidMount() {
    // Parsing the user data from localStorage
    let user = JSON.parse(localStorage.getItem('user'));
    // console.log(user);
    fetch('http://localhost:5000/compLearned/getData', {
      method: 'POST',
      crossDomain: true,
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        'Accept-Control-Allow-Origin': '*',
      },
      body: JSON.stringify({
        userId: user._id,
      }),
    })
      .then(res => res.json())
      .then(data => {
        // console.log(data, 'userData');
        this.setState({ array: data[0] });
      });
  }

  /**
   * Description - This function update the comments of products to the user
   */
  updateButton = () => {
    const { name } = this.props;
    // Parsing the user data from localStorage
    let user = JSON.parse(localStorage.getItem('user'));
    let productsArray = this.state.array;
    productsArray[name].comment = this.state.comment;
    this.setState({
      showResult: 'Comment have added',
    });
    fetch('http://localhost:5000/compLearned', {
      method: 'POST',
      crossDomain: true,
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
      body: JSON.stringify({
        productsArray: productsArray,
        userId: user._id,
      }),
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);
      });
  };
  render() {
    const { children } = this.props;
    return (
      <div>
        <Navbar />
        <div className={style.content}>{children}</div>
        <section className={style.comment}>
          <h2 className={style.h2}>
            Write yourself a comment about this component
          </h2>
          <input
            type='text'
            placeholder='please enter comment'
            value={this.state.comment}
            onChange={e => this.setState({ comment: e.target.value })}
          />
          <p className={style.showResult}>{this.state.showResult}</p>
          <Button text='save comment' fun={this.updateButton} />
          <p>Note: This note will be displayed on the "First Steps" page </p>
        </section>

        <Footer name='Designed by Yochai Chen Levi' />
      </div>
    );
  }
}
