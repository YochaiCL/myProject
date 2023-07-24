import React from 'react';
import ComponentLearnLayout from '../../../../layouts/componentLearnLayout/ComponentLearnLayout';
import Header from '../../../../../commonComponents/header/Header';
import { Link } from 'react-router-dom';
import style from '../../motherboard/info/infoMOTHERBOARD.module.css';

/**
 * Description - This Function display the psu information
 * @returns - psu information
 */
function infoPSU() {
  return (
    <ComponentLearnLayout name='psu'>
      <Header h1Heading='PSU Information' />
      <article>
        <p className={style.p}>
          A power supply unit (PSU) converts mains AC to low-voltage regulated
          DC power for the internal components of a computer.
        </p>

        <Link
          className={style.link}
          to='https://www.intel.com/content/www/us/en/gaming/resources/power-supply.html'
          target='blank'
        >
          Click For More Information
        </Link>
      </article>
    </ComponentLearnLayout>
  );
}

export default infoPSU;
