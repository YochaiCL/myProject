import React, { Component } from 'react'
import MainLayout from '../../../layouts/mainLayout/MainLayout'
import Header from '../../../../pageSettings/header/Header'

export default class NewQuestion extends Component {
  render() {
    return (
      <MainLayout>
        <Header h1Heading='New Question'/>
      </MainLayout>
    )
  }
}
