import React from 'react';
import ComponentLearnLayout from '../../../../layouts/componentLearnLayout/ComponentLearnLayout';
import Header from '../../../../../pageSettings/header/Header';

/**
 * Description - This Function display the dvd information
 * @returns - dvd information
 */
function infoDVD() {
  return (
    <ComponentLearnLayout name='dvd'>
      <Header h1Heading='DVD Information' />
      <article>
        <p>
          Today there are few cases that include a disk drive since the use of a
          usb drive or drivers found around the internet
        </p>
        <p>
          Therefore, this product is not required on every computer and is an
          addition for the user's consideration only{' '}
        </p>
        <p>
          The most common use of a disc drive is for playing discs or burning
          discs
        </p>
      </article>
    </ComponentLearnLayout>
  );
}

export default infoDVD;
