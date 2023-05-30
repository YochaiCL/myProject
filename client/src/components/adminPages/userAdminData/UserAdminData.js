import Layout from '../layout/pageLayout/PageLayout';
import Header from '../../pageSettings/header/Header';
import UserDetails from '../../pageSettings/userDetails/UserDetails';
import React from 'react';

export default function UserAdminData() {
  return (
    <Layout>
      <Header h1Heading='User Data' />
      <UserDetails />
    </Layout>
  );
}
