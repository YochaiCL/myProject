import React, { Component } from 'react';
import style from './ForgetPassword.module.css';
import { Link } from 'react-router-dom';
import Button from '../../pageSettings/button/Button';

export default class ResetPassword extends Component {
  // Initializing state variables for email and showResult
  state = {
    email: '',
    showResult: '',
  };
  handleSubmit(e) {
    // Preventing the default form submission behavior
    e.preventDefault();
    // Destructuring email from the state
    const { email } = this.state;

    // Sending a POST request to the forgot-password endpoint
    fetch('http://localhost:5000/forgot-password', {
      method: 'POST',
      crossDomain: true,
      headers: {
        // Setting headers for the HTTP request
        'Content-Type': 'application/json',
        Accept: 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
      // Converting email to JSON and setting it as the request body
      body: JSON.stringify({
        email,
      }),
    })
      // Parsing the response as JSON
      .then(res => res.json())
      // Handling the response data
      .then(data => {
        // Updating the state to display an error message
        if (data.status === 'User Not Exist')
          this.setState({
            showResult: 'User Not Exists!! Check your details',
          });
        else if (data.status === 'Error email not send')
          this.setState({
            showResult: 'Error email not send',
          });
        else if (data.status === 'Something wrong check your details')
          this.setState({
            showResult: 'Something wrong check your details',
          });
        // Updating the state to display a success message
        else if (data.status === 'Email send')
          this.setState({
            showResult: 'Email sended, Check your email',
          });
      });
  }
  render() {
    return (
      <form className={style.form} onSubmit={this.handleSubmit.bind(this)}>
        <h3>Forget Password</h3>
        <div>
          <label>Email address</label>
          <input
            type='email'
            placeholder='Enter email'
            onChange={e => this.setState({ email: e.target.value })}
            required
          />
        </div>
        <div className={style.div}>
          <Button type='submit' className={style.submit} text='submit' />
        </div>
        <p>{this.state.showResult}</p>
        <p>
          <Link to='/'>Sign In</Link>
        </p>
      </form>
    );
  }
}
