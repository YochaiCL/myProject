import React, { Component } from 'react';
import Button from '../button/Button';
import style from './userDetails.module.css';
import LinkLayout from '../linkLayout/LinkLayout';

/**
 * Description - This class show the user data and can change the user data
 */
export default class UserData extends Component {
  state = {
    userData: '',
    oldUser: '',
    showLinkAdmin: false,
    password: '',
    email: '',
    name: '',
    showResult: '',
  };

  /**
   * Description - This function get the user data from the sever
   */
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
        // console.log(data, 'userData');
        // Storing the user data in localStorage
        window.localStorage.setItem('user', JSON.stringify(data.data));
        this.setState({ userData: data.data });
        this.setState({ oldUser: data.data });
        // console.log(this.state.oldUser);
        if (this.state.userData.userType === 'Admin') {
          this.setState({
            showLinkAdmin: true,
          });
        }
      });
  }

  /**
   * Description - This function clear the local storage in the application
   */
  logout = () => {
    // Clearing localStorage
    window.localStorage.clear();
    // Redirecting to the home page
    window.location.href = './';
  };

  /**
   * Description - This function change the password of the user
   */
  changePassword = () => {
    if (!this.checkPassword()) {
      this.setState({ showResult: 'Invalid Password' });
      setTimeout(() => {
        this.setState({
          showResult: '',
        });
      }, 1000);
    } else {
      let user = this.state.userData;
      fetch('http://localhost:5000/userData/changePassword', {
        method: 'POST',
        crossDomain: true,
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
          'Access-Control-Allow-Origin': '*',
        },
        body: JSON.stringify({
          user: { ...user, password: this.state.password },
          email: this.state.userData.email,
        }),
      })
        .then(res => res.json())
        .then(data => {
          console.log(data);
          this.setState({
            userData: { ...user, password: this.state.password },
          });
          setTimeout(() => {
            this.setState({
              showResult: 'Password have been change',
            });
          }, 1000);
        });
    }
  };

  /**
   * Description - This function check the password
   * @returns True if the password contain 3-8 characters and and have at least 1 letter and 1 number and False otherwise
   */
  checkPassword() {
    if (this.state.password === '') {
      return false;
    }
    if (
      !(/\d/.test(this.state.password) && /[a-zA-Z]/.test(this.state.password))
    ) {
      return false;
    }
    if (this.state.password.length < 3 || this.state.password.length > 8) {
      return false;
    }
    return true;
  }

  /**
   * Description - This function change the name of the user
   */
  changeName = () => {
    if (!this.checkName()) {
      this.setState({ showResult: 'Invalid User Name' });
      setTimeout(() => {
        this.setState({
          showResult: '',
        });
      }, 1000);
    } else {
      let user = this.state.userData;
      fetch('http://localhost:5000/userData/changeNameOrEmail', {
        method: 'POST',
        crossDomain: true,
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
          'Access-Control-Allow-Origin': '*',
        },
        body: JSON.stringify({
          user: { ...user, fullName: this.state.name },
          email: this.state.userData.email,
        }),
      })
        .then(res => res.json())
        .then(data => {
          console.log(data);
          this.setState({ userData: { ...user, fullName: this.state.name } });
          setTimeout(() => {
            this.setState({
              showResult: 'Name have been change',
            });
          }, 1000);
        });
    }
  };

  /**
   * Description - This function check if the fullName contain only letters and at least 2 letters
   * @param {*} fullName - Full name entered by the user
   * @returns - True if fullName contain only letters and at least 2 letters and False otherwise
   */
  checkName() {
    let name = this.state.name;
    // console.log(name);
    name = name.replace(' ', '');
    // console.log(name);
    if (name === '') {
      return false;
    }
    const onlyLetters = /^[A-Za-z\s]+$/;
    if (!onlyLetters.test(name)) {
      return false;
    }

    const letterCount = name.replace(/[^a-zA-Z]/g, '').length;
    if (letterCount < 2) {
      return false;
    }

    return true;
  }

  /**
   * Description - This function change the email of the user
   */
  changeEmail = () => {
    let user = this.state.userData;
    fetch('http://localhost:5000/userData/changeNameOrEmail', {
      method: 'POST',
      crossDomain: true,
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
      body: JSON.stringify({
        user: { ...user, email: this.state.email },
        email: this.state.oldUser.email,
      }),
    })
      .then(res => res.json())
      .then(data => {
        localStorage.setItem('token', data.token);
        console.log(data);
        this.setState({ userData: { ...user, email: this.state.email } });
        // console.log(this.state.userData);
        setTimeout(() => {
          this.setState({
            showResult: 'Email have been change',
          });
        }, 1000);
      });
  };

  render() {
    return (
      <div >
        <section className={style.userDetails}>
          <p>
            <span className={style.span}>Name:</span>
            {this.state.userData.fullName}
          </p>

          <p>
            <span className={style.span}>Email:</span>
            {this.state.userData.email}
          </p>
          <div className={style.div}>
            {' '}
            <Button text='sign out' fun={this.logout} />
          </div>
        </section>

        {this.state.showLinkAdmin && (
          <section className={style.linkAdmin}>
            <LinkLayout
              nameLink='Transfer to Admin home Page'
              toLink='/adminHome'
            />
          </section>
        )}

        <section className={style.section}>
          <h2>Change your details</h2>
          <section className={style.sectionInput}>
            <section>
              <p className={style.p}>
                Require only letters and at least 2 letters
              </p>
              <input
                className={style.input}
                type='text'
                placeholder='Enter name'
                onChange={e => this.setState({ name: e.target.value })}
              />
              <Button text='Change' fun={this.changeName} />
            </section>

            <section>
              <input
                className={style.input}
                type='email'
                placeholder='Enter email'
                onChange={e => this.setState({ email: e.target.value })}
              />
              <Button text='Change' fun={this.changeEmail} />
            </section>

            <section>
              <p className={style.p}>
                Require 3-8 characters with at least 1 numbers and 1 latter's
              </p>
              <input
                className={style.input}
                type='password'
                placeholder='Enter password'
                onChange={e => this.setState({ password: e.target.value })}
              />

              <Button text='Change' fun={this.changePassword} />
            </section>
            <p className={style.showResult}>{this.state.showResult}</p>
          </section>
        </section>
      </div>
    );
  }
}
