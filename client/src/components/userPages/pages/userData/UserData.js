import PageLayout from '../../layouts/pageLayout/PageLayout';
import Header from '../../../pageSettings/header/Header';
import UserDetails from '../../../pageSettings/userDetails/UserDetails';
import React from 'react';

export default function UserData() {
  return (
    <PageLayout>
      <Header h1Heading='User Data' />
      <UserDetails />
    </PageLayout>
  );
}
