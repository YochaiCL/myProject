import React from 'react';
import style from './navbar.module.css';
import logo from '../../../images/navbar/logo.png';

import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className={style.nav}>
      <img className={style.img} src={logo} alt='logo' width='100' lang='100' />
      <Link to='/premiumHome' className={style.link}>
        Home
      </Link>
      <Link to='/userPremium' className={style.link}>
        User Data
      </Link>
      <Link to='/questionAnswer' className={style.link}>
        Questions & Answer
      </Link>

      <Link to='/userHome' className={style.link}>
        Front End
      </Link>
    </nav>
  );
}
