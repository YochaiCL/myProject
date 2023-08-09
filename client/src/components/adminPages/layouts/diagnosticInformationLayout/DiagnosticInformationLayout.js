import React from 'react';
import style from './diagnosticInformationLayout.module.css';
import { Link } from 'react-router-dom';
/**
 * Description -
 * @param {*} props
 * @returns
 */
export default function DiagnosticInformationLayout(props) {
  const h2Heading = props.h2;
  const pText = props.text;
  const toLink = props.to;
  const nameLink = props.name;
  return (
    <section className={style.section}>
      <h2>{h2Heading}</h2>
      <p className={style.p}>{pText}</p>
      <Link to={toLink} className={style.link}>{nameLink}</Link>
    </section>
  );
}
