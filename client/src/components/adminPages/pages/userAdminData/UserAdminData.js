import PageLayout from '../../layouts/pageLayout/PageLayout';
import Header from '../../../pageSettings/header/Header';
import UserDetails from '../../../pageSettings/userDetails/UserDetails';
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
