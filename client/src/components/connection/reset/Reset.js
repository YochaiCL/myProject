//rcc
//rfc

import React, { Component } from 'react';
import style from './reset.module.css';
import { Link } from 'react-router-dom';
import Button from '../../pageSettings/button/Button';

export default class Reset extends Component {
  state = {
    email: '',
  };
  handleSubmit(e) {
    e.preventDefault();
    const { email } = this.state;

    console.log(email);
    fetch('http://localhost:5000/forgot-password', {
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
        console.log(data, 'userRegister');
        alert(data.status);
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
          />
        </div>
        <div className={style.div}>
          <Button type='submit' className={style.submit} text='submit' />
        </div>
        <p>
          <Link to='/'>Sign In</Link>
        </p>
      </form>
    );
  }
}
