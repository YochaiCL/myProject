import React, { Component } from 'react';
import Button from '../button/Button';
import style from './userDetails.module.css';
import LinkLayout from '../linkLayout/LinkLayout';

export default class UserData extends Component {
  // Initializing state variables for userData, showLinkAdmin, password, email, and name
  state = {
    userData: '',
    oldUser : "",
    showLinkAdmin: false,
    password: '',
    email: '',
    name: '',
  };

  componentDidMount() {
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
        console.log(data, 'userData');

        // Storing the user data in localStorage
        window.localStorage.setItem('user', JSON.stringify(data.data));
        this.setState({ userData: data.data });
        this.setState({ oldUser: data.data });
        console.log(this.state.oldUser)
        // Checking if the userType is Admin
        if (this.state.userData.userType === 'Admin') {
          this.setState({
            // Updating the state to show the link for admin
            showLinkAdmin: true,
          });
        }
      });
  }

  logout = () => {
    // Clearing localStorage
    window.localStorage.clear();
    // Redirecting to the home page
    window.location.href = './';
  };

  changePassword = () => {
    let user = this.state.userData;
    // Sending a POST request to the changePassword endpoint
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

  changeName = () => {
    let user = this.state.userData;
 
    // Sending a POST request to the changeNameOrEmail endpoint
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

  // Sending a POST request to the changeNameOrEmail endpoint
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
        user: {...user , email : this.state.email},
        email: this.state.oldUser.email,
      }),
    })
      .then(res => res.json())
      .then(data => {
        localStorage.setItem("token" , data.token)
        console.log(data);
         this.setState({ userData: { ...user, email: this.state.email } });
         console.log(this.state.userData);
      });
  };

  render() {
    return (
      <div>
        <section>
          <p>Name:{this.state.userData.fullName}</p>

          <p>Email:{this.state.userData.email}</p>
          <Button text='sign out' fun={this.logout} />
        </section>

        {this.state.showLinkAdmin && (
          <section className={style.linkAdmin}>
            <LinkLayout nameLink='Transfer to Admin home' toLink='/adminHome' />
          </section>
        )}

        <section className={style.section}>
          <h2>Change your details</h2>
          <input
            type='text'
            placeholder='Enter name'
            onChange={e => this.setState({ name: e.target.value })}
          />
          <Button text='Change' fun={this.changeName} />

          <input
            type='email'
            placeholder='Enter email'
            onChange={e => this.setState({ email: e.target.value })}
          />
          <Button text='Change' fun={this.changeEmail} />

          <input
            type='password'
            placeholder='Enter password'
            onChange={e => this.setState({ password: e.target.value })}
          />

          <Button text='Change' fun={this.changePassword} />
        </section>
      </div>
    );
  }
}
