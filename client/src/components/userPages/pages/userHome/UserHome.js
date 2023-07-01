import { Component } from 'react';
import { Link } from 'react-router-dom';
import style from './main.module.css';
import Header from '../../../pageSettings/header/Header';
import PageLayout from '../../layouts/pageLayout/PageLayout';

/**
 * Description - This class show the home page of the user
 */
export default class UserHome extends Component {
  render() {
    return (
      <PageLayout>
        <div className={style.div}>
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
        </div>
      </PageLayout>
    );
  }
}
