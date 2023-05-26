import React, { Component } from 'react';
import Layout from '../../layout/pageLayout/PageLayout';
import Header from '../../../pageSettings/header/Header';
import Button from '../../../pageSettings/button/Button';
import style from './addAssemblies.module.css';

export default class AddAssemblies extends Component {
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
  };

  // Asynchronous function to fetch component models
  async getModels() {
    // Fetching component models from the server
    const response = await fetch('http://localhost:5000/getAssemblies/modals');
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

  // Asynchronous function to handle form submission
  async handleSubmit(e) {
    // Preventing the default form submission behavior
    e.preventDefault();
    const options = {
      method: 'POST',
      crossDomain: true,
      // Setting headers for the HTTP request
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        'Accept-Control-Allow-Origin': '*',
      },
      // Converting the state object to JSON and setting it as the request body
      body: JSON.stringify(this.state),
    };
    const response = await fetch(
      'http://localhost:5000/addAssemblies',
      options
    );
    // Parsing the response as JSON
    const result = await response.json();
    console.log(result);
    // Checking if the request was successful
    if (result.status === 'ok') {
      alert('Assembly have added');
    }
  }

  // Lifecycle method called after the component is mounted
  componentDidMount() {
    // Fetching the component models when the component is mounted
    this.getModels();
  }

  render() {
    return (
      <Layout>
        <Header h1Heading='Add Assembly' />
        <section>
          <form onSubmit={this.handleSubmit.bind(this)} className={style.form}>
            <label>
              Enter Assembly name
              <input
                type='text'
                placeholder='Enter Assembly Name:'
                value={this.state.assemblyName}
                required
                onChange={e => this.setState({ assemblyName: e.target.value })}
              />
            </label>
            <label>
              Choose Motherboard
              <select
                value={this.state.modelMotherboard}
                label='MOTHERBOARD'
                onChange={e =>
                  this.setState({ modelMotherboard: e.target.value })
                }
              >
                {this.state.motherboardArray.map(itemMotherboard => {
                  return (
                    <option key={itemMotherboard} value={itemMotherboard}>
                      {itemMotherboard}
                    </option>
                  );
                })}
              </select>
            </label>
            <label>
              Choose CPU
              <select
                value={this.state.modelCPU}
                label='CPU'
                onChange={e => this.setState({ modelCPU: e.target.value })}
              >
                {this.state.cpuArray.map(itemCpu => {
                  return (
                    <option key={itemCpu} value={itemCpu}>
                      {itemCpu}
                    </option>
                  );
                })}
              </select>
            </label>
            <label>
              Choose CPU Cooler
              <select
                value={this.state.modelCPUCooler}
                label='CPU Cooler'
                onChange={e =>
                  this.setState({ modelCPUCooler: e.target.value })
                }
              >
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
              </select>
            </label>
            <label>
              Choose GPU
              <select
                value={this.state.modelGPU}
                label='GPU'
                onChange={e => this.setState({ modelGPU: e.target.value })}
              >
                {this.state.gpuArray.map(itemGpu => {
                  return (
                    <option key={itemGpu} value={itemGpu}>
                      {itemGpu}
                    </option>
                  );
                })}
              </select>
            </label>
            <label>
              Choose PSU
              <select
                value={this.state.modelPSU}
                label='PSU'
                onChange={e => this.setState({ modelPSU: e.target.value })}
              >
                {this.state.psuArray.map(itemPsu => {
                  return (
                    <option key={itemPsu} value={itemPsu}>
                      {itemPsu}
                    </option>
                  );
                })}
              </select>
            </label>
            <label>
              Choose RAM
              <select
                value={this.state.modelRAM}
                label='RAM'
                onChange={e => this.setState({ modelRAM: e.target.value })}
              >
                {this.state.ramArray.map(itemRam => {
                  return (
                    <option key={itemRam} value={itemRam}>
                      {itemRam}
                    </option>
                  );
                })}
              </select>
            </label>
            <label>
              Choose SSD
              <select
                value={this.state.modelSSD}
                label='SSD'
                onChange={e => this.setState({ modelSSD: e.target.value })}
              >
                {[...this.state.ssdM2Array, ...this.state.ssdSataArray].map(
                  itemSSD => {
                    return (
                      <option key={itemSSD} value={itemSSD}>
                        {itemSSD}
                      </option>
                    );
                  }
                )}
              </select>
            </label>

            <label>
              Choose CASE
              <select
                value={this.state.modelCase}
                label='CASE'
                onChange={e => this.setState({ modelCase: e.target.value })}
              >
                {this.state.caseArray.map(itemCase => {
                  return (
                    <option key={itemCase} value={itemCase}>
                      {itemCase}
                    </option>
                  );
                })}
              </select>
            </label>

            <Button type='submit' text='submit' />
          </form>
        </section>
      </Layout>
    );
  }
}
