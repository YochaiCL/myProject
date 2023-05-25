import Layout from '../layout/pageLayout/PageLayout';
import Header from '../../pageSettings/header/Header';
import UserData from '../../pageSettings/userData/UserData';
import React from 'react';

export default function UserAdmin() {
  return (
    <Layout>
      <Header h1Heading='User Details' />
      <UserData />
    </Layout>
  );
}
