import Layout from '../layout/Layout';
import Header from '../../pageSettings/header/Header';
import UserData from '../../pageSettings/userData/UserData';
import React from 'react';

export default function UserPremium() {
  return (
    <Layout>
      <Header h1Heading='User Details' />
      <UserData />
    </Layout>
  );
}
