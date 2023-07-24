import PageLayout from '../../layouts/pageLayout/PageLayout';
import Header from '../../../commonComponents/header/Header';
import UserDetails from '../../../commonComponents/userDetails/UserDetails';
import React from 'react';

/**
 * Description - This function display the premium data details
 * @returns - Premium data details
 */
export default function UserPremiumData() {
  return (
    <PageLayout>
      <Header h1Heading='User Data' />
      <UserDetails />
    </PageLayout>
  );
}
