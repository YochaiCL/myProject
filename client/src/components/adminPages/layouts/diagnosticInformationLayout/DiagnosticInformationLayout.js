import React from 'react';
import style from './diagnosticInformationLayout.module.css';

export default function DiagnosticInformationLayout(props) {
  const h2Heading = props.h2;
  const pText = props.text;
  return (
    <section className={style.section}>
      <h2>{h2Heading}</h2>
      <p>{pText}</p>
    </section>
  );
}
