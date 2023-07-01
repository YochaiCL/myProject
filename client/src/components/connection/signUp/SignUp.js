import React, { Component } from 'react';
import style from './signUp.module.css';
import { Link } from 'react-router-dom';
import Button from '../../pageSettings/button/Button';

/**
 * Description - This class manage the signUp page
 */
export default class SignUp extends Component {
  state = {
    fullName: '',
    email: '',
    password: '',
    userType: 'User',
    showRadio: false,
    secretKey: '',
    showResult: '',
  };

  /**
   * Description - This function checks if the password entered by the user meets the requirements
   * @param {*} password - Password entered by the user
   * @returns - True if it meets the requirements and False otherwise
   */
  checkPassword(password) {
    if (!(/\d/.test(password) && /[a-zA-Z]/.test(password))) {
      return false;
    }
    if (password.length < 3 || password.length > 8) {
      return false;
    }
    return true;
  }

  /**
   * Description - This function get the user inputs and transform to the server
   * @param {*} e - User inputs
   */
  handleSubmit(e) {
    e.preventDefault();
    const { fullName, email, password, userType } = this.state;
    if (this.state.userType === 'Admin' && this.state.secretKey !== 'Admin') {
      this.setState({
        showResult: 'Invalid Admin Password',
      });
    } else if (
      this.state.userType === 'Premium' &&
      this.state.secretKey !== 'Premium'
    ) {
      this.setState({
        showResult: 'Invalid Premium Password',
      });
    } else if (!this.checkPassword(password)) {
      this.setState({
        showResult: 'Invalid Password',
      });
    } else {
      fetch('http://localhost:5000/signUp', {
        method: 'POST',
        crossDomain: true,
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
          'Access-Control-Allow-Origin': '*',
        },
        body: JSON.stringify({
          fullName,
          email,
          password,
          userType,
        }),
      })
        .then(res => res.json())
        .then(data => {
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

  /**
   * Description - This function revel radio data in signUp page
   */
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
      <section className={style.section}>
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
              required
            />
          </div>

          <div>
            <label>Email address</label>
            <input
              type='email'
              placeholder='Enter email'
              onChange={e => this.setState({ email: e.target.value })}
              required
            />
          </div>
          <div>
            <label>Password</label>
            <p className={style.p}>require 3-8 characters with numbers and latter's</p>
            <input
              type='password'
              placeholder='Enter password'
              
              onChange={e => this.setState({ password: e.target.value })}
              required
            />
          </div>
          <div className={style.div}>
            <Button type='submit' className={style.submit} text='Sign Up' />
          </div>
          <p className={style.showResult}>{this.state.showResult}</p>
          <p>
            Already registered? <Link to='/'>sign in</Link>
          </p>
        </form>
      </section>
    );
  }
}
