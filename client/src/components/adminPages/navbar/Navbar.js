import React from 'react';
import style from './navbar.module.css';
import logo from '../../../images/navbar/logo.png';
import LinkNavbar from '../../pageSettings/linkNavbar/LinkNavbar';

export default function Navbar() {
  return (
    <nav className={style.nav}>
      <img className={style.img} src={logo} alt='logo' width='100' lang='100' />
      <LinkNavbar nameLink='Home' toLink='/adminHome' />
      <LinkNavbar nameLink='User Data' toLink='/userAdmin' />
      <LinkNavbar nameLink='Reports' toLink='/reports' />
      <LinkNavbar nameLink='Add' toLink='/add' />
      <LinkNavbar nameLink='Front End' toLink='/userHome' />
    </nav>
  );
}
