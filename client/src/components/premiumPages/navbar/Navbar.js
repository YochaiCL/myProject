import React from 'react';
import style from './navbar.module.css';
import logo from '../../../images/navbar/logo.png';
import LinkNavbar from '../../pageSettings/linkNavbar/LinkNavbar';

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
        toLink='/premiumHome'
      />

      <LinkNavbar nameLink='User Data' toLink='/userPremium' />
      <LinkNavbar nameLink='Questions & Answer' toLink='/questionAnswer' />
      <LinkNavbar nameLink='Front End' toLink='/userHome' />
    </nav>
  );
}
