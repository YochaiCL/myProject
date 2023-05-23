import React from 'react';
import logo from '../../../images/navbar/logo.png';
import style from './navbar.module.css';
import LinkNavbar from '../../pageSettings/linkNavbar/LinkNavbar';

function Navbar() {
  return (
    <nav className={style.nav}>
      <img className={style.img} src={logo} alt='logo' width='100' lang='100' />
      <LinkNavbar nameLink='Home' toLink='/userHome' />
      <LinkNavbar nameLink='User Data' toLink='/user' />
      <LinkNavbar nameLink='First Steps' toLink='/firstSteps' />
      <LinkNavbar nameLink='Assembly' toLink='/assembly' />
      <LinkNavbar nameLink='Test Your Self' toLink='/test' />
      <LinkNavbar nameLink='Premium' toLink='/premium' />
    </nav>
  );
}

export default Navbar;
