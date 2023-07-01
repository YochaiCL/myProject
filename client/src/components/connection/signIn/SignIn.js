import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import style from './signIn.module.css';
import Button from '../../pageSettings/button/Button';

export default class SignIn extends Component {
  state = {
    userData: '',
    email: '',
    password: '',
    showResult: '',
  };

  /**
   * Description - This function send the entered data to the server
   * @param {*} e - Entered data by the user
   */
  handleSubmit(e) {
    e.preventDefault();
    const { email, password } = this.state;
    fetch('http://localhost:5000/signIn', {
      method: 'POST',
      crossDomain: true,
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        'Accept-Control-Allow-Origin': '*',
      },
      body: JSON.stringify({
        email,
        password,
      }),
    })
      .then(res => res.json())
      .then(data => {
        if (data.status === 'ok') {
          this.setState({
            showResult: 'Login successful, Entering...',
          });
          // Storing the token in local storage
          window.localStorage.setItem('token', data.data);
          // Storing the login status in local storage
          window.localStorage.setItem('loggedIn', true);
          this.enterUserData();
          // Redirecting based on the user type
          if (data.userType === 'Admin') {
            setTimeout(() => {
              window.location.href = '/adminHome';
            }, 2000);
          } else if (data.userType === 'Premium') {
            setTimeout(() => {
              window.location.href = '/premiumHome';
            }, 2000);
          } else if (data.userType === 'User') {
            setTimeout(() => {
              window.location.href = '/userHome';
            }, 2000);
          }
        } else {
          this.setState({
            showResult: 'Something wrong, please check the details',
          });
        }
      });
  }

  /**
   * Description - This function show the user data in the user details page
   */
  enterUserData() {
    fetch('http://localhost:5000/userData', {
      method: 'POST',
      crossDomain: true,
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        'Accept-Control-Allow-Origin': '*',
      },
      body: JSON.stringify({
        token: window.localStorage.getItem('token'),
      }),
    })
      .then(res => res.json())
      .then(data => {
        // Storing the user data in localStorage
        window.localStorage.setItem('user', JSON.stringify(data.data));
        this.setState({ userData: data.data });
        // Checking if the userType is Admin
        if (this.state.userData.userType === 'Admin') {
          this.setState({
            // Updating the state to show the link for admin
            showLinkAdmin: true,
          });
        }
      });
  }

  render() {
    return (
      <form className={style.form} onSubmit={this.handleSubmit.bind(this)}>
        <h3 className={style.h3}>Sign In</h3>

        <div>
          <label>Email address</label>
          <input
            type='email'
            placeholder='Enter email'
            onChange={e => this.setState({ email: e.target.value })}
          />
        </div>

        <div>
          <label>Password</label>
          <input
            type='password'
            placeholder='Enter password'
            onChange={e => this.setState({ password: e.target.value })}
          />
        </div>

        <div>
          <Button type='submit' text='submit' className={style.submit} />
        </div>
        <p className={style.size}>
          <Link to='reset'> Forgot password?</Link>
        </p>
        <p className={style.size}>
          <Link to='/sign-up'>Sign Up</Link>
        </p>
        <p className={style.p}>{this.state.showResult}</p>
      </form>
    );
  }
}
