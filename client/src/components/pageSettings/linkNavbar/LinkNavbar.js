import React from 'react';
import style from './linkNavbar.module.css';
import { Link } from 'react-router-dom';

/**
 * Description - This function define the navbar links section
 * @param {*} props - Links properties
 * @returns - Link properties
 */
export default function LinkNavbar(props) {
  const name = props.nameLink;
  const toText = props.toLink;
  return (
    <Link to={toText} className={style.link}>
      {name}
    </Link>
  );
}
