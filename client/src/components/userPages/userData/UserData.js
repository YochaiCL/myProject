import Layout from '../layouts/mainLayout/MainLayout';
import Header from '../../pageSettings/header/Header';
import UserDetails from '../../pageSettings/userDetails/UserDetails';
import React from 'react';

export default function UserData() {
  return (
    <Layout>
      <Header h1Heading='User Data' />
      <UserDetails />
    </Layout>
  );
}
