import React from 'react';
import { Link } from 'react-router-dom';
import style from './linkLayout.module.css';

export default function LinkLayout(props) {
  const name = props.nameLink;
  const toText = props.toLink;
  return (
    <Link to={toText} className={style.link}>
      {name}
    </Link>
  );
}
