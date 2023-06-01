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
        toLink='/adminHome'
      />

      <LinkNavbar nameLink='User Data' toLink='/userAdmin' />
      <LinkNavbar nameLink='Reports' toLink='/reports' />
      <LinkNavbar nameLink='Add' toLink='/add' />
      <LinkNavbar nameLink='Delete' toLink='/delete' />
      <LinkNavbar nameLink='Update' toLink='/update' />
      <LinkNavbar nameLink='Front End' toLink='/userHome' />
    </nav>
  );
}
