import Layout from '../layout/Layout';
import Header from '../../pageSettings/header/Header';
import UserDetails from '../../pageSettings/userDetails/UserDetails';
import React from 'react';

export default function UserPremiumData() {
  return (
    <Layout>
      <Header h1Heading='User Data' />
      <UserDetails />
    </Layout>
  );
}
