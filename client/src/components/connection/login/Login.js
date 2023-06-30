import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import style from './login.module.css';
import Button from '../../pageSettings/button/Button';

export default class Login extends Component {
  // Initializing state variables for email, password, and showResult
  state = {
    userData: '',
    email: '',
    password: '',
    showResult: '',
  };

  // Function to handle form submission
  handleSubmit(e) {
    // Preventing the default form submission behavior
    e.preventDefault();
    // Destructuring email and password from the state
    const { email, password } = this.state;

    // Sending a POST request to the login endpoint
    fetch('http://localhost:5000/login-user', {
      method: 'POST',
      crossDomain: true,
      headers: {
        // Setting headers for the HTTP request
        'Content-Type': 'application/json',
        Accept: 'application/json',
        'Accept-Control-Allow-Origin': '*',
      },
      // Converting email and password to JSON and setting it as the request body
      body: JSON.stringify({
        email,
        password,
      }),
    })
      // Parsing the response as JSON
      .then(res => res.json())
      // Handling the response data
      .then(data => {
        // Checking the status of the response
        if (data.status === 'ok') {
          this.setState({
            // Updating the state to display a success message
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
              // Redirecting to the admin home page
              window.location.href = '/adminHome';
            }, 2000);
          } else if (data.userType === 'Premium') {
            setTimeout(() => {
              // Redirecting to the premium user home page
              window.location.href = '/premiumHome';
            }, 2000);
          } else if (data.userType === 'User') {
            setTimeout(() => {
              // Redirecting to the regular user home page
              window.location.href = '/userHome';
            }, 2000);
          }
        } else {
          this.setState({
            // Updating the state to display an error message
            showResult: 'Something wrong, please check the details',
          });
        }
      });
  }

  enterUserData() {
    // Sending a POST request to the userData endpoint
    fetch('http://localhost:5000/userData', {
      method: 'POST',
      crossDomain: true,
      headers: {
        // Setting headers for the HTTP request
        'Content-Type': 'application/json',
        Accept: 'application/json',
        'Accept-Control-Allow-Origin': '*',
      },
      body: JSON.stringify({
        // Setting the token in the request body
        token: window.localStorage.getItem('token'),
      }),
    })
      // Parsing the response as JSON
      .then(res => res.json())
      // Handling the response data
      .then(data => {
        // console.log(data, 'userData');

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
        <p>{this.state.showResult}</p>
      </form>
    );
  }
}
