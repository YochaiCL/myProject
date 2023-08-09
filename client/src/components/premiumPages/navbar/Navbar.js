import React from 'react';
import style from './navbar.module.css';
import logo from '../../../images/navbar/logo.png';
import LinkNavbar from '../../commonComponents/linkNavbar/LinkNavbar';

/**
 * Description - This function define the navbar layout of premium pages
 * @returns - Navbar layout
 */
export default function Navbar() {
  return (
    <nav className={style.nav}>
      <LinkNavbar
        nameLink={
          <img
            className={style.img}
            src={logo}
            alt='logo'
            width='100'
            lang='100'
          />
        }
        toLink='/questionAnswerHome'
      />

      <LinkNavbar nameLink='Premium Data' toLink='/userPremium' />
      <LinkNavbar nameLink='Reports' toLink='/premiumReports' />
      <LinkNavbar
        nameLink='Questions & Answer'
        toLink='/questionAnswerPremium'
      />
      <LinkNavbar nameLink='Client View' toLink='/userHome' />
    </nav>
  );
}
