import { Component } from 'react';
import { Link } from 'react-router-dom';
import style from './main.module.css';
import Header from '../../../pageSettings/header/Header';
import Navbar from '../../navbar/Navbar';
import Footer from '../../../pageSettings/footer/Footer';

export default class UserHome extends Component {
  render() {
    return (
      <div className={style.div}>
        <Navbar />
        <Header h1Heading='PC BUILDER' />
        <section className={style.section}>
          <section className={style.links}>
            <Link to='/firstSteps' className={style.link}>
              First Steps
            </Link>
            <Link to='/assembly' className={style.link}>
              Assembly
            </Link>
            <Link to='/test' className={style.link}>
              Test Your Self
            </Link>
          </section>
        </section>
        <Footer name='Designed by Yochai Chen Levi' />
      </div>
    );
  }
}
