import PageLayout from '../../layouts/pageLayout/PageLayout';
import Header from '../../../commonComponents/header/Header';
import UserDetails from '../../../commonComponents/userDetails/UserDetails';
import React from 'react';

/**
 * Description - This function display the user details
 * @returns - User details
 */
export default function UserData() {
  return (
    <PageLayout>
      <Header h1Heading='User Data' />
      <UserDetails />
    </PageLayout>
  );
}
