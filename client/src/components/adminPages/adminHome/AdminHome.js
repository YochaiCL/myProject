import React, { Component } from 'react';
import Footer from '../../pageSettings/footer/Footer';
import Header from '../../pageSettings/header/Header';
import Navbar from '../navbar/Navbar';
import style from './adminHome.module.css';

export default class AdminHome extends Component {
  render() {
    return (
      <div className={style.adminHome}>
        <Navbar />
        <Header h1Heading='PC BUILDER ADMIN' />

        <Footer />
      </div>
    );
  }
}
