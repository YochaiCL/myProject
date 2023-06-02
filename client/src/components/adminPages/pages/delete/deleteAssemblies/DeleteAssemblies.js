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
   deleteAssembly(){
    let result = this.state.assembly.filter((item)=>{
      console.log(item, this.state.deleteAssembly);
      return item.assemblyName !== this.state.deleteAssembly;
    })
    console.log(result)
    this.setState({ assembly: result });
    try {
      fetch('http://localhost:5000/deleteAssemblies', {
        // Setting headers for the HTTP request
        method: 'POST',
        crossDomain: true,
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
          'Access-Control-Allow-Origin': '*',
        },
        // Converting fullName, email, password, and userType to JSON and setting it as the request body
        body: JSON.stringify({
          assemblyName: this.state.deleteAssembly,
        }),
      })
        // Parsing the response as JSON
        .then(res => res.json())
        // Handling the response data
        .then(data => {
          console.log(data);
        });
    } catch (error) {
      console.log(error);
    }
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
          <Button text='Delete' fun={()=>this.deleteAssembly()}/>
        </div>
      </PageLayout>
    );
  }
}
