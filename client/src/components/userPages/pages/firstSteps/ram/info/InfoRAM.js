import React from 'react'
import ComponentLearnLayout from '../../../../layouts/componentLearnLayout/ComponentLearnLayout';
import Header from '../../../../../commonComponents/header/Header';

/**
 * Description - This Function display the ram information
 * @returns - ram information
 */
function infoRAM() {
  return (
    <ComponentLearnLayout name='ram'>
      <Header h1Heading='RAM Information' />
    </ComponentLearnLayout>
  );
}

export default infoRAM