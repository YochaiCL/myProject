import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import style from './login.module.css';
import Button from '../../pageSettings/button/Button';

/**
 * Description - This class define the login page
 */
export default class Login extends Component {
  state = {
    userData: '',
    email: '',
    password: '',
    showResult: '',
  };

  /**
   * Description - This function check if the user exist in the database
   * @param {*} e - User selected details
   */
  handleSubmit(e) {
    e.preventDefault();
    const { email, password } = this.state;
    fetch('http://localhost:5000/login-user', {
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
          window.localStorage.setItem('token', data.data);
          window.localStorage.setItem('loggedIn', true);
          this.enterUserData();
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
   * Description - This function get the user data form the database
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
        window.localStorage.setItem('user', JSON.stringify(data.data));
        this.setState({ userData: data.data });
        if (this.state.userData.userType === 'Admin') {
          this.setState({
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
        <p>{this.state.showResult}</p>
      </form>
    );
  }
}
