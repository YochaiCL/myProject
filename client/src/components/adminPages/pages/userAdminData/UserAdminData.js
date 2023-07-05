import PageLayout from '../../layouts/pageLayout/PageLayout';
import Header from '../../../commonComponents/header/Header';
import UserDetails from '../../../commonComponents/userDetails/UserDetails';
import React from 'react';

/**
 * Description - This function set the User Details page
 * @returns - User Details Page
 */
export default function UserAdminData() {
  return (
    <PageLayout>
      <Header h1Heading='User Data' />
      <UserDetails />
    </PageLayout>
  );
}
