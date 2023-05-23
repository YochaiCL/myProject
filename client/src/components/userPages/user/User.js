import Layout from '../layouts/mainLayout/MainLayout';
import Header from '../../pageSettings/header/Header';
import UserData from '../../pageSettings/userData/UserData';
import React from 'react';

export default function User() {
  return (
    <Layout>
      <Header h1Heading='User Details' />
      <UserData />
    </Layout>
  );
}
