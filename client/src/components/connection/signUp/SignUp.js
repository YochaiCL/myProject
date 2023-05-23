import React, { Component } from 'react';
import style from './signUp.module.css';
import { Link } from 'react-router-dom';
import Button from '../../pageSettings/button/Button';
export default class SignUp extends Component {
  /**
   * firstName - User input first name
   * lastName - User input last name
   * email - User input email
   * Password - User input password
   * userType - user or admin or premium
   * secretKey - secret key for admin or premium
   */
  state = {
    fullName: '',
    email: '',
    password: '',
    userType: 'User',
    showRadio: false,
    secretKey: '',
  };

  /**
   * Description: This function get input from the user and by checking in data base (not) connecting to client page
   * @param {*} e - User data
   */
  handleSubmit(e) {
    const { fullName, email, password, userType } = this.state;
    if (this.state.userType === 'Admin' && this.state.secretKey !== 'Admin') {
      e.preventDefault();
      alert('Invalid Admin');
    } else if (
      this.state.userType === 'Premium' &&
      this.state.secretKey !== 'Premium'
    ) {
      e.preventDefault();
      alert('Invalid Premium');
    } else {
      e.preventDefault();
      fetch('http://localhost:5000/register', {
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
          console.log(data, 'userRegister');
          console.log(data.status === 'ok');
          if (data.status === 'ok') {
            alert('Register successful');
            window.location.href = '/';
          } else {
            alert('Something went wrong');
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
        <p>
          Already registered? <Link to='/'>sign in</Link>
        </p>
      </form>
    );
  }
}
