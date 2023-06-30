import React, { Component } from 'react';
import PageLayout from '../../../layouts/pageLayout/PageLayout';
import Header from '../../../../pageSettings/header/Header';
import style from './updateAssemblies.module.css';
import Button from '../../../../pageSettings/button/Button';

export default class UpdateAssemblies extends Component {
  state = {
    assembly: [{ assemblyName: 'Loading data...' }],
    showData: false,
    selectIndex: null,
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

  async getAssembly() {
    const response = await fetch(
      'http://localhost:5000/getAssemblies/assemblies'
    );
    const result = await response.json();
    console.log(result);
    this.setState({ assembly: result });
  }

  // Asynchronous function to fetch component models
  async getModels() {
    // Fetching component models from the server
    const response = await fetch('http://localhost:5000/getComponentsModels');
    // Parsing the response as JSON
    const result = await response.json();
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
      this.setState({
        showResult: 'The Assembly has been added',
      });
    } else if (result.status === 'Assembly already exist') {
      this.setState({
        showResult: 'This assembly already  exist',
      });
    }
  }

  // Lifecycle method called after the component is mounted
  componentDidMount() {
    // Fetching the component models when the component is mounted
    this.getModels();
    this.getAssembly();
  }
  handelClick = index => {
    this.setState({
      showData: true,
      selectIndex: index,
    });
  };
  render() {
    return (
      <PageLayout>
        <Header h1Heading='Update Assemblies' />

        <section className={style.external}>
          <section className={style.model}>
            <h2>List Of Assemblies</h2>
            {this.state.assembly.map((comp, index) => (
              <section key={index}>
                <button
                  onClick={() => {
                    this.handelClick(index);
                  }}
                  className={style.assemblyButton}
                >
                  {comp.assemblyName}
                </button>
              </section>
            ))}
          </section>

          {this.state.showData && this.state.selectIndex !== null && (
            <section className={style.showAllData}>
              <h2 className={style.h2}>Assembly Data</h2>
              <div></div>

              <section>
                <form
                  onSubmit={this.handleSubmit.bind(this)}
                  className={style.form}
                >
                  <input
                    type='text'
                    placeholder={
                      this.state.assembly[this.state.selectIndex].assemblyName
                    }
                    value={this.state.assemblyName}
                    required
                    onChange={e =>
                      this.setState({ assemblyName: e.target.value })
                    }
                  />

                  <select
                    value={this.state.modelMotherboard}
                    label='MOTHERBOARD'
                    onChange={e =>
                      this.setState({ modelMotherboard: e.target.value })
                    }
                    required
                  >
                    <option value='' disabled>
                      {
                        this.state.assembly[this.state.selectIndex]
                          .modelMotherboard
                      }
                    </option>
                    {this.state.motherboardArray.map(itemMotherboard => {
                      return (
                        <option key={itemMotherboard} value={itemMotherboard}>
                          {itemMotherboard}
                        </option>
                      );
                    })}
                  </select>

                  <select
                    value={this.state.modelCPU}
                    label='CPU'
                    onChange={e => this.setState({ modelCPU: e.target.value })}
                    required
                  >
                    <option value='' disabled>
                      {this.state.assembly[this.state.selectIndex].modelCPU}
                    </option>
                    {this.state.cpuArray.map(itemCpu => {
                      return (
                        <option key={itemCpu} value={itemCpu}>
                          {itemCpu}
                        </option>
                      );
                    })}
                  </select>

                  <select
                    value={this.state.modelCPUCooler}
                    label='CPU Cooler'
                    onChange={e =>
                      this.setState({ modelCPUCooler: e.target.value })
                    }
                    required
                  >
                    <option value='' disabled>
                      {
                        this.state.assembly[this.state.selectIndex]
                          .modelCPUCooler
                      }
                    </option>
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

                  <select
                    value={this.state.modelGPU}
                    label='GPU'
                    onChange={e => this.setState({ modelGPU: e.target.value })}
                    required
                  >
                    <option value='' disabled>
                      {this.state.assembly[this.state.selectIndex].modelGPU}
                    </option>
                    {this.state.gpuArray.map(itemGpu => {
                      return (
                        <option key={itemGpu} value={itemGpu}>
                          {itemGpu}
                        </option>
                      );
                    })}
                  </select>

                  <select
                    value={this.state.modelPSU}
                    label='PSU'
                    onChange={e => this.setState({ modelPSU: e.target.value })}
                    required
                  >
                    <option value='' disabled>
                      {this.state.assembly[this.state.selectIndex].modelPSU}
                    </option>
                    {this.state.psuArray.map(itemPsu => {
                      return (
                        <option key={itemPsu} value={itemPsu}>
                          {itemPsu}
                        </option>
                      );
                    })}
                  </select>

                  <select
                    value={this.state.modelRAM}
                    label='RAM'
                    onChange={e => this.setState({ modelRAM: e.target.value })}
                    required
                  >
                    <option value='' disabled>
                      {this.state.assembly[this.state.selectIndex].modelRAM}
                    </option>
                    {this.state.ramArray.map(itemRam => {
                      return (
                        <option key={itemRam} value={itemRam}>
                          {itemRam}
                        </option>
                      );
                    })}
                  </select>

                  <select
                    value={this.state.modelSSD}
                    label='SSD'
                    onChange={e => this.setState({ modelSSD: e.target.value })}
                    required
                  >
                    <option value='' disabled>
                      {this.state.assembly[this.state.selectIndex].modelSSD}
                    </option>
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

                  <select
                    value={this.state.modelCase}
                    label='CASE'
                    onChange={e => this.setState({ modelCase: e.target.value })}
                    required
                  >
                    <option value='' disabled>
                      {this.state.assembly[this.state.selectIndex].modelCase}
                    </option>
                    {this.state.caseArray.map(itemCase => {
                      return (
                        <option key={itemCase} value={itemCase}>
                          {itemCase}
                        </option>
                      );
                    })}
                  </select>

                  <Button type='submit' text='submit' />
                  <p>{this.state.showResult}</p>
                </form>
              </section>
            </section>
          )}
        </section>
      </PageLayout>
    );
  }
}
