import React, { Component } from 'react';
import style from './signUp.module.css';
import { Link } from 'react-router-dom';
import Button from '../../pageSettings/button/Button';
export default class SignUp extends Component {
  // Initializing state variables for fullName, email, password, userType, showRadio, secretKey, and showResult
  state = {
    fullName: '',
    email: '',
    password: '',
    userType: 'User',
    showRadio: false,
    secretKey: '',
    showResult: '',
  };

  checkPassword(password){
    if(!(/\d/.test(password) && /[a-zA-Z]/.test(password))){
      return false
    }
    if(password.length < 3 || password.length > 8){
      return false
    }
    return true
  }

  // Function to handle form submission
  handleSubmit(e) {
    e.preventDefault();
    // Destructuring fullName, email, password, and userType from the state
    const { fullName, email, password, userType } = this.state;
    // Checking for valid Admin password
    if (this.state.userType === 'Admin' && this.state.secretKey !== 'Admin') {
      // Preventing the default form submission behavior

      this.setState({
        // Updating the state to display an error message
        showResult: 'Invalid Admin Password',
      });
    } else if (
      // Checking for valid Premium password
      this.state.userType === 'Premium' &&
      this.state.secretKey !== 'Premium'
    ) {
      // Preventing the default form submission behavior

      this.setState({
        // Updating the state to display an error message
        showResult: 'Invalid Premium Password',
      });
    } else if (!(this.checkPassword(password))) {
      this.setState({
        // Updating the state to display an error message
        showResult: 'Invalid Password',
      });
    } else {
      // Sending a POST request to the register endpoint
      fetch('http://localhost:5000/register', {
        // Setting headers for the HTTP request
        method: 'POST',
        crossDomain: true,
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
          'Access-Control-Allow-Origin': '*',
        },
        // Converting fullName, email, password, and userType to JSON and setting it as the request body
        body: JSON.stringify({
          fullName,
          email,
          password,
          userType,
        }),
      })
        // Parsing the response as JSON
        .then(res => res.json())
        // Handling the response data
        .then(data => {
          // Checking the status of the response
          if (data.status === 'ok') {
            this.setState({
              showResult: 'Register successful',
            });
            setTimeout(() => {
              window.location.href = '/';
            }, 2000);
          } else if (data.status === 'User Exists') {
            this.setState({
              showResult: 'User already Exist, reset your password if needed ',
            });
          } else if (data.status === 'error') {
            this.setState({
              showResult: 'Something went wrong, please check your details ',
            });
          }
        });
    }
  }

  showMore = () => {
    this.setState(() => {
      return {
        showRadio: !this.state.showRadio,
        submitDisable: false,
      };
    });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit.bind(this)} className={style.form}>
        <h3 className={style.h3}>Sign Up</h3>
        {/* radio button to choose whether it is a regular user / admin / professional*/}

        <div className={style.radioInput}>
          <label>
            <input
              type='radio'
              name='UserType'
              value='User'
              onChange={e => this.setState({ userType: e.target.value })}
              defaultChecked={true}
            />
            User
          </label>
        </div>
        <Button
          type='button'
          text='More'
          fun={() => {
            this.showMore();
          }}
        />
        {this.state.showRadio && (
          <div className={style.radio}>
            <div className={style.radioInput}>
              <label>
                <input
                  type='radio'
                  name='UserType'
                  value='Admin'
                  onChange={e => this.setState({ userType: e.target.value })}
                />
                Admin
              </label>
            </div>
            <div className={style.radioInput}>
              <label>
                <input
                  type='radio'
                  name='UserType'
                  value='Premium'
                  onChange={e => this.setState({ userType: e.target.value })}
                />
                Premium
              </label>
            </div>
            <div>
              <input
                className={style.radioInput}
                type='text'
                placeholder='Secret Key'
                onChange={e => this.setState({ secretKey: e.target.value })}
              />
            </div>
          </div>
        )}
        <div>
          <label>Full Name</label>
          <input
            type='text'
            placeholder='Full Name'
            onChange={e => this.setState({ fullName: e.target.value })}
          />
        </div>

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
        <div className={style.div}>
          <Button type='submit' className={style.submit} text='Sign Up' />
        </div>
        <p>{this.state.showResult}</p>
        <p>
          Already registered? <Link to='/'>sign in</Link>
        </p>
      </form>
    );
  }
}
