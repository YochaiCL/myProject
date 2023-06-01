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
    showResult: '',
  };

  // Asynchronous function to fetch component models
  async getModels() {
    // Fetching component models from the server
    const response = await fetch(
      'http://localhost:5000/showComponentsData/modals'
    );
    // Parsing the response as JSON
    const result = await response.json();
    // Updating the CPU array in the component state with fetched models
    this.setState({ cpuArray: result.cpu });
    // Updating the GPU array in the component state with fetched models
    this.setState({ gpuArray: result.gpu });
    // Updating the CASE array in the component state with fetched models
    this.setState({ caseArray: result.case });
    // Updating the CPU COOLER FAN array in the component state with fetched models
    this.setState({ cpuCoolerFanArray: result.cpuCoolerFan });
    // Updating the CPU COOLER LIQUID array in the component state with fetched models
    this.setState({ cpuCoolerLiquidArray: result.cpuCoolerLiquid });
    // Updating the MOTHERBOARD array in the component state with fetched models
    this.setState({ motherboardArray: result.motherboard });
    // Updating the PSU array in the component state with fetched models
    this.setState({ psuArray: result.psu });
    // Updating the RAM array in the component state with fetched models
    this.setState({ ramArray: result.ram });
    // Updating the SSD M2 array in the component state with fetched models
    this.setState({ ssdM2Array: result.ssdM2 });
    // Updating the SSD SATA array in the component state with fetched models
    this.setState({ ssdSataArray: result.ssdSata });
  }

  // Lifecycle method called after the component is mounted
  componentDidMount() {
    // Fetching the component models when the component is mounted
    this.getModels();
  }

  render() {
    return (
      <PageLayout>
        <Header h1Heading='Delete Components' />
        <select
          value={this.state.modelCPUCooler}
          label='CPU Cooler'
          onChange={e => this.setState({ modelCPUCooler: e.target.value })}
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
          <Button text='Delete' />
        </div>
      </PageLayout>
    );
  }
}
