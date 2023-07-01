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
        console.log(this.state.oldUser);
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
        this.setState({ userData: { ...user, password: this.state.password } });
      });
  };

  /**
   * Description - This function change the name of the user
   */
  changeName = () => {
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
      });
  };

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
        console.log(this.state.userData);
      });
  };

  render() {
    return (
      <div>
        <section>
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
            <LinkLayout nameLink='Transfer to Admin home' toLink='/adminHome' />
          </section>
        )}

        <section className={style.section}>
          <h2>Change your details</h2>
          <section className={style.sectionInput}>
            <section>
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
              <input
                className={style.input}
                type='password'
                placeholder='Enter password'
                onChange={e => this.setState({ password: e.target.value })}
              />

              <Button text='Change' fun={this.changePassword} />
            </section>
          </section>{' '}
        </section>
      </div>
    );
  }
}
