import React, { Component } from 'react';
import Footer from '../../pageSettings/footer/Footer';
import Header from '../../pageSettings/header/Header';
import Navbar from '../navbar/Navbar';
import style from './premiumHome.module.css';

export default class PremiumHome extends Component {
  render() {
    return (
      <div className={style.adminHome}>
        <Navbar />
        <Header h1Heading='PC BUILDER PREMIUM' />

        <Footer />
      </div>
    );
  }
}
