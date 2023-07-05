import PageLayout from '../../layouts/pageLayout/PageLayout';
import Header from '../../../commonComponents/header/Header';
import UserDetails from '../../../commonComponents/userDetails/UserDetails';
import React from 'react';

export default function UserData() {
  return (
    <PageLayout>
      <Header h1Heading='User Data' />
      <UserDetails />
    </PageLayout>
  );
}
