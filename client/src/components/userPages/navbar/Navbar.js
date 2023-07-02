import React from 'react';
import logo from '../../../images/navbar/logo.png';
import style from './navbar.module.css';
import LinkNavbar from '../../pageSettings/linkNavbar/LinkNavbar';
/**
 * Description - This function organize the navbar page
 * @returns - The navbar page
 */
function Navbar() {
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
        toLink='/userHome'
      />

      <LinkNavbar nameLink='User Data' toLink='/user' />
      <LinkNavbar nameLink='First Steps' toLink='/firstSteps' />
      <LinkNavbar nameLink='Assembly' toLink='/assembly' />
      <LinkNavbar nameLink='Test Your Self' toLink='/test' />
      <LinkNavbar nameLink='Question/Answer' toLink='/premium' />
    </nav>
  );
}

export default Navbar;
