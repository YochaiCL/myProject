import React, { Component } from 'react';
import style from './ForgetPassword.module.css';
import { Link } from 'react-router-dom';
import Button from '../../commonComponents/button/Button';

/**
 * Description - This class display the forget password page
 */
export default class ForgetPassword extends Component {
  state = {
    email: '',
    showResult: '',
  };

  /**
   * Description - This function send the entered email to the server to reset the password
   * @param {*} e - Entered email
   */
  handleSubmit(e) {
    e.preventDefault();
    const { email } = this.state;
    fetch('http://localhost:5000/forgotPassword', {
      method: 'POST',
      crossDomain: true,
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
      body: JSON.stringify({
        email,
      }),
    })
      .then(res => res.json())
      .then(data => {
        if (data.status === 'User Not Exist') {
          this.setState({
            showResult: 'User Not Exists!! Check your details',
          });
          setTimeout(() => {
            this.setState({
              showResult: '',
            });
          }, 2000);
        } else if (data.status === 'Error email not send') {
          this.setState({
            showResult: 'Error email not send',
          });
          setTimeout(() => {
            this.setState({
              showResult: '',
            });
          }, 2000);
        } else if (data.status === 'Something wrong check your details') {
          this.setState({
            showResult: 'Something wrong check your details',
          });
          setTimeout(() => {
            this.setState({
              showResult: '',
            });
          }, 2000);
        } else if (data.status === 'Email send') {
          this.setState({
            showResult: 'Email sended, Check your email',
          });
          setTimeout(() => {
            this.setState({
              showResult: '',
            });
          }, 2000);
        }
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
        <p className={style.showResult}>{this.state.showResult}</p>
        <p>
          <Link to='/'>Sign In</Link>
        </p>
      </form>
    );
  }
}
