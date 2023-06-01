import React from 'react'
import style from './option.module.css'


export default function Option(props) {

  const text=props.optionText
  return (
    <option value='' disabled className={style.option}>
      {text}
    </option>
  );
}
