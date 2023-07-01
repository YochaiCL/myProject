import React from 'react'
import ComponentLearnLayout from '../../../../layouts/componentLearnLayout/ComponentLearnLayout';
import Header from '../../../../../pageSettings/header/Header';

/**
 * Description - This Function display the hard drive information
 * @returns - hard drive information
 */
function infoHD() {
  return (
    <ComponentLearnLayout name='hd'>
      <Header h1Heading='Hard Drive Information' />
    </ComponentLearnLayout>
  );
}

export default infoHD