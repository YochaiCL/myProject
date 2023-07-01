import React from 'react';
import ComponentLearnLayout from '../../../../layouts/componentLearnLayout/ComponentLearnLayout';
import Header from '../../../../../pageSettings/header/Header';
/**
 * Description - This Function display the cables information
 * @returns - cable information
 */
function infoCABLES() {
  return (
    <ComponentLearnLayout name='cables'>
      <Header h1Heading='Cable Information' />
      <p>
        Please pay attention, this component is not available for selection
        because this is a custom selected product
      </p>
    </ComponentLearnLayout>
  );
}

export default infoCABLES;
