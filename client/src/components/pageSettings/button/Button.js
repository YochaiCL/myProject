import React from 'react';
import style from './button.module.css';

function Button(props) {
  return (
    <button type={props.type} className={style.but} onClick={props.fun}>
      {props.text}
    </button>
  );
}

export default Button;
