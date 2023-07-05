import React from 'react';
import style from './button.module.css';

/**
 * Description - This function define the button display
 * @param {*} props - Button properties
 * @returns - Button display
 */
function Button(props) {
  return (
    <button type={props.type} className={style.but} onClick={props.fun}>
      {props.text}
    </button>
  );
}

export default Button;
