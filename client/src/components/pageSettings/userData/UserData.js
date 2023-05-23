import React, { Component } from 'react';
import Button from '../../pageSettings/button/Button';
import style from './userData.module.css';
import { Link } from 'react-router-dom';

export default class UserData extends Component {
  state = {
    userData: '',
    showLinkAdmin: false,
    password: '',
    email: '',
    name: '',
  };
  componentDidMount() {
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
        console.log(data, 'userData');
        window.localStorage.setItem('user', JSON.stringify(data.data));
        this.setState({ userData: data.data });

        if (this.state.userData.userType === 'Admin') {
          this.setState({
            showLinkAdmin: true,
          });
        }
      });
  }

  /**
   * This a function that clean all information in the local storage
   */
  logout = () => {
    window.localStorage.clear();
    window.location.href = './';
  };

  changePassword = () => {
    let user = this.state.userData;
    user.password = this.state.password;
    console.log(user);
    fetch('http://localhost:5000/userData/changePassword', {
      method: 'POST',
      crossDomain: true,
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
      body: JSON.stringify({
        user: user,
        email: this.state.userData.email,
      }),
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);
      });
  };

  changeName = () => {
    let user = this.state.userData;
    user.fullName = this.state.name;
    this.setState({ userData: user });
    console.log(user);
    fetch('http://localhost:5000/userData/changeNameOrEmail', {
      method: 'POST',
      crossDomain: true,
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
      body: JSON.stringify({
        user: user,
        email: this.state.userData.email,
      }),
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);
      });
  };

  changeEmail = () => {
    let user = this.state.userData;
    user.email = this.state.email;
    this.setState({ userData: user });
    fetch('http://localhost:5000/userData/changeNameOrEmail', {
      method: 'POST',
      crossDomain: true,
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
      body: JSON.stringify({
        user: user,
        email: this.state.userData.email,
      }),
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);
      });
  };

  render() {
    return (
      <div>
        <section className={style.section}>
          <p>
            Name:{' '}
            <span className={style.span}>{this.state.userData.fullName}</span>
          </p>

          <p>
            Email:{' '}
            <span className={style.span}>{this.state.userData.email}</span>
          </p>
        </section>

        <section>
          <Button text='sign out' fun={this.logout} />
        </section>
        {this.state.showLinkAdmin && (
          <section>
            <Link to='/adminHome'>Transfer to Admin home</Link>
          </section>
        )}

        <section className={style.change}>
          <div>
            <label>Change UserName</label>
            <input
              type='text'
              placeholder='Enter name'
              onChange={e => this.setState({ name: e.target.value })}
            />
            <Button text='Change' fun={this.changeName} />
          </div>
          <div>
            <label>Change Email</label>
            <input
              type='email'
              placeholder='Enter email'
              onChange={e => this.setState({ email: e.target.value })}
            />
            <Button text='Change' fun={this.changeEmail} />
          </div>
          <div>
            <label>Change Password</label>
            <input
              type='password'
              placeholder='Enter password'
              onChange={e => this.setState({ password: e.target.value })}
            />
          </div>
          <Button text='Change' fun={this.changePassword} />
        </section>
      </div>
    );
  }
}
