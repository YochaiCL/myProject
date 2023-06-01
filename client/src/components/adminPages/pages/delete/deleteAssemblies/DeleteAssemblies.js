import React, { Component } from 'react';
import PageLayout from '../../../layouts/pageLayout/PageLayout';
import Header from '../../../../pageSettings/header/Header';
import style from './delteAssemlies.module.css';
import Button from '../../../../pageSettings/button/Button';

export default class DeleteAssemblies extends Component {
  state = {
    assembly: [{ assemblyName: 'Loading data...' }],
    deleteAssembly: '',
  };

  async getAssembly() {
    const response = await fetch(
      'http://localhost:5000/getAssemblies/assemblies'
    );
    const result = await response.json();
    console.log(result);
    this.setState({ assembly: result });
  }

  componentDidMount() {
    this.getAssembly();
  }

  render() {
    return (
      <PageLayout>
        <Header h1Heading='Delete Assemblies' />

        <select
          className={style.select}
          value={this.state.deleteAssembly}
          label='Assemblies Name'
          onChange={e => this.setState({ deleteAssembly: e.target.value })}
          required
        >
          <option value='' disabled>
            Select an Assembly Name
          </option>
          {this.state.assembly.map((itemAssembly, index) => (
            <option
              // By combining the assemblyName and index in the key, you create a unique identifier for each option in the select element.
              key={`${itemAssembly.assemblyName}-${index}`}
              value={itemAssembly.assemblyName}
            >
              {itemAssembly.assemblyName}
            </option>
          ))}
        </select>
        <div className={style.btn}>
          <Button text='Delete' />
        </div>
      </PageLayout>
    );
  }
}
