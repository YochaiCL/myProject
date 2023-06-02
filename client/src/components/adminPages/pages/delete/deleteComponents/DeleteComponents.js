import React, { Component } from 'react';
import PageLayout from '../../../layouts/pageLayout/PageLayout';
import Header from '../../../../pageSettings/header/Header';
import style from './deleteComponents.module.css';
import Button from '../../../../pageSettings/button/Button';
import Option from '../../../../pageSettings/option/Option';

export default class DeleteComponents extends Component {
  // Initializing state variables for various component models and arrays
  state = {
    assemblyName: '',
    modelCase: '',
    modelMotherboard: '',
    modelCPU: '',
    modelCPUCooler: '',
    modelGPU: '',
    modelPSU: '',
    modelRAM: '',
    modelSSD: '',
    cpuArray: [], // Array to store CPU models
    gpuArray: [], // Array to store GPU models
    caseArray: [], // Array to store Case models
    cpuCoolerFanArray: [], // Array to store CPU COOLER FAN models
    cpuCoolerLiquidArray: [], // Array to store CPU COOLER LIQUID models
    fanArray: [], // Array to store FAN models
    motherboardArray: [], // Array to store MOTHERBOARD models
    psuArray: [], // Array to store PSU models
    ramArray: [], // Array to store RAM models
    ssdM2Array: [], // Array to store SSD M2 models
    ssdSataArray: [], // Array to store SSD SATA models
    selectedComponent: '',
    allArrays: [],
  };

  // Asynchronous function to fetch component models
  async getModels() {
    // Fetching component models from the server
    const response = await fetch(
      'http://localhost:5000/showComponentsData/modals'
    );
    // Parsing the response as JSON
    const result = await response.json();
    console.log(result);
    this.setState({ allArrays: result });
    // Updating the CPU array in the component state with fetched models
    this.setState({ cpuArray: result.Cpu });
    // Updating the GPU array in the component state with fetched models
    this.setState({ gpuArray: result.Gpu });
    // Updating the CASE array in the component state with fetched models
    this.setState({ caseArray: result.Case });
    // Updating the CPU COOLER FAN array in the component state with fetched models
    this.setState({ cpuCoolerFanArray: result.CpuCoolerFan });
    // Updating the CPU COOLER LIQUID array in the component state with fetched models
    this.setState({ cpuCoolerLiquidArray: result.CpuCoolerLiquid });
    // Updating the MOTHERBOARD array in the component state with fetched models
    this.setState({ motherboardArray: result.Motherboard });
    // Updating the PSU array in the component state with fetched models
    this.setState({ psuArray: result.Psu });
    // Updating the RAM array in the component state with fetched models
    this.setState({ ramArray: result.Ram });
    // Updating the SSD M2 array in the component state with fetched models
    this.setState({ ssdM2Array: result.SsdM2 });
    // Updating the SSD SATA array in the component state with fetched models
    this.setState({ ssdSataArray: result.SsdSata });
    // Updating the SSD SATA array in the component state with fetched models
    this.setState({ fanArray: result.Fans });
  }

  // Lifecycle method called after the component is mounted
  componentDidMount() {
    // Fetching the component models when the component is mounted
    this.getModels();
  }

  deleteComponent() {
    // console.log(this.state.selectedComponent);
    for (let key in this.state.allArrays) {
      for (let component of this.state.allArrays[key]) {
        if (component === this.state.selectedComponent) {
          let result = [key].filter(item => {
            console.log(item, this.state.selectedComponent);
            return item.assemblyName !== this.state.selectedComponent;
          });
          console.log(result);
          this.setState({ key: result });
          try {
            fetch('http://localhost:5000/deleteComponents', {
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
                collectionName: key,
                model: this.state.selectedComponent,
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
      }
    }
  }

  render() {
    return (
      <PageLayout>
        <Header h1Heading='Delete Components' />
        <select
          value={this.state.selectedComponent}
          label='CPU Cooler'
          onChange={e => this.setState({ selectedComponent: e.target.value })}
          required
        >
          <option value='' disabled>
            Select Component To Delete
          </option>
          <Option optionText='Select CPU Cooler' />
          {[
            ...this.state.cpuCoolerFanArray,
            ...this.state.cpuCoolerLiquidArray,
          ].map(itemCpuCooler => {
            return (
              <option key={itemCpuCooler} value={itemCpuCooler}>
                {itemCpuCooler}
              </option>
            );
          })}

          <Option optionText='Select Case' />

          {this.state.caseArray.map(itemCpuCooler => {
            return (
              <option key={itemCpuCooler} value={itemCpuCooler}>
                {itemCpuCooler}
              </option>
            );
          })}
          <Option optionText='Select CPU' />

          {this.state.cpuArray.map(itemCpuCooler => {
            return (
              <option key={itemCpuCooler} value={itemCpuCooler}>
                {itemCpuCooler}
              </option>
            );
          })}

          <Option optionText='Select Fan' />

          {this.state.fanArray.map(itemCpuCooler => {
            return (
              <option key={itemCpuCooler} value={itemCpuCooler}>
                {itemCpuCooler}
              </option>
            );
          })}

          <Option optionText='Select GPU' />

          {this.state.gpuArray.map(itemCpuCooler => {
            return (
              <option key={itemCpuCooler} value={itemCpuCooler}>
                {itemCpuCooler}
              </option>
            );
          })}

          <Option optionText='Select Motherboard' />

          {this.state.motherboardArray.map(itemCpuCooler => {
            return (
              <option key={itemCpuCooler} value={itemCpuCooler}>
                {itemCpuCooler}
              </option>
            );
          })}

          <Option optionText='Select SSD Sata' />

          {[...this.state.ssdSataArray, ...this.state.ssdM2Array].map(
            itemCpuCooler => {
              return (
                <option key={itemCpuCooler} value={itemCpuCooler}>
                  {itemCpuCooler}
                </option>
              );
            }
          )}

          <Option optionText='Select PSU' />

          {this.state.psuArray.map(itemCpuCooler => {
            return (
              <option key={itemCpuCooler} value={itemCpuCooler}>
                {itemCpuCooler}
              </option>
            );
          })}
        </select>
        <div className={style.btn}>
          <Button text='Delete' fun={() => this.deleteComponent()} />
        </div>
      </PageLayout>
    );
  }
}
