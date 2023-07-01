import React from 'react';
import style from './option.module.css';

/**
 * Description - This function define the select option section
 * @param {*} props - Select option properties
 * @returns - Select properties
 */
export default function Option(props) {
  const text = props.optionText;
  return (
    <option value='' disabled className={style.option}>
      {text}
    </option>
  );
}
