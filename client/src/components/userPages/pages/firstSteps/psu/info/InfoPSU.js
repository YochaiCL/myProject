import React from 'react';
import ComponentLearnLayout from '../../../../layouts/componentLearnLayout/ComponentLearnLayout';
import Header from '../../../../../pageSettings/header/Header';
import { Link } from 'react-router-dom';

function infoPSU() {
  return (
    <ComponentLearnLayout name='psu'>
      <Header h1Heading='PSU Information' />
      <article>
        <p>
          A power supply unit (PSU) converts mains AC to low-voltage regulated
          DC power for the internal components of a computer.
        </p>
        <p>
          If you’ve calculated that your system is going to use 500 watts (a
          common number for a straightforward gaming build), choosing a PSU with
          600 or 650-watt output could be a good option, as it will give you
          some overhead to work with, and also allow for potential future
          upgrades.
        </p>
        <Link
          to='https://www.intel.com/content/www/us/en/gaming/resources/power-supply.html'
          target='blank'
        >
          For More Information
        </Link>
      </article>
    </ComponentLearnLayout>
  );
}

export default infoPSU;
