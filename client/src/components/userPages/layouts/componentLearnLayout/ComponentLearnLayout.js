import React, { Component } from 'react';
import Navbar from '../../navbar/Navbar';
import Footer from '../../../pageSettings/footer/Footer';
import style from './componentLearnLayout.module.css';
import Button from '../../../pageSettings/button/Button';

export default class ComponentLearnLayout extends Component {
  state = {
    comment: '',
    array: [],
    showResult: '',
  };

  componentDidMount() {
    // Parsing the user data from localStorage
    let user = JSON.parse(localStorage.getItem('user'));
    // console.log(user);
    // Sending a POST request to the getData endpoint
    fetch('http://localhost:5000/comp-learned/getData', {
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
        this.setState({ array: data[0] });
      });
  }

  updateButton = () => {
    const { name } = this.props;
    // Parsing the user data from localStorage
    let user = JSON.parse(localStorage.getItem('user'));

    let newObj = this.state.array;
    // console.log(newObj);
    // Updating the comment in the newObj
    newObj[name].comment = this.state.comment;
    // console.log(newObj);

    this.setState({
      // Updating the state to show the success message
      showResult: 'Comment have added',
    });

    // Sending a POST request to the comp-learned endpoint
    fetch('http://localhost:5000/comp-learned', {
      method: 'POST',
      crossDomain: true,
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
      body: JSON.stringify({
        newObj: newObj,
        userId: user._id,
      }),
    })
      // Sending the updated newObj in the request body
      .then(res => res.json())
      // Sending the userId in the request body
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
          <p>{this.state.showResult}</p>
          <Button text='save comment' fun={this.updateButton} />
          <p>Note: This note will be displayed on the "First Steps" page </p>
        </section>

        <Footer name='Designed by Yochai Chen Levi' />
      </div>
    );
  }
}
