import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import style from './login.module.css';
import Button from '../../pageSettings/button/Button';

export default class Login extends Component {
  /**
   * email - User input email
   * Password - User input password
   */
  state = {
    email: '',
    password: '',
  };

  /**
   * Description: This function get input from the user and by checking in data base (not) connecting to client page
   * @param {*} e - User data
   */
  handleSubmit(e) {
    e.preventDefault();
    const { email, password } = this.state;
    console.log(email, password);
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
        console.log(data, 'userRegister');
        if (data.status === 'ok') {
          alert('login successful');
          // storage the token in local storage
          window.localStorage.setItem('token', data.data);

          // make us still sign in when we open new tab with the project url
          // If we are still log in the web still be connected
          window.localStorage.setItem('loggedIn', true);

          // console.log(data.userType);
          if (data.userType === 'Admin') {
            window.location.href = '/adminHome';
          } else if (data.userType === 'Premium') {
            window.location.href = '/premiumHome';
          } else if (data.userType === 'User') {
            window.location.href = '/userHome';
          }
        } else {
          alert('Something wrong, please check the details');
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
      </form>
    );
  }
}
