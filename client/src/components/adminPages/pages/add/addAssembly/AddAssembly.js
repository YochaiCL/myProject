import React, { Component } from 'react';
import PageLayout from '../../../layouts/pageLayout/PageLayout';
import Header from '../../../../commonComponents/header/Header';
import Button from '../../../../commonComponents/button/Button';
import style from './addAssembly.module.css';

/**
 * Description - This function add assembly to the database
 */
export default class AddAssembly extends Component {
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
    cpuArray: [],
    gpuArray: [],
    caseArray: [],
    cpuCoolerFanArray: [],
    cpuCoolerLiquidArray: [],
    fanArray: [],
    motherboardArray: [],
    psuArray: [],
    ramArray: [],
    ssdM2Array: [],
    ssdSataArray: [],
    showResult: '',
  };

  /**
   * Description - This function get all models of all components from database
   */
  async getModels() {
    const response = await fetch('http://localhost:5000/getComponentsModels');
    const result = await response.json();
    console.log(result);
    this.setState({ cpuArray: result.Cpu });
    this.setState({ gpuArray: result.Gpu });
    this.setState({ caseArray: result.Case });
    this.setState({ cpuCoolerFanArray: result.CpuCoolerFan });
    this.setState({ cpuCoolerLiquidArray: result.CpuCoolerLiquid });
    this.setState({ motherboardArray: result.Motherboard });
    this.setState({ psuArray: result.Psu });
    this.setState({ ramArray: result.Ram });
    this.setState({ ssdM2Array: result.SsdM2 });
    this.setState({ ssdSataArray: result.SsdSata });
  }

  /**
   *Description - This Function save the choose assembly in the database
   * @param {*} e - Components selected by the admin
   */
  async handleSubmit(e) {
    e.preventDefault();
    console.log('ll');
    const options = {
      method: 'POST',
      crossDomain: true,
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        'Accept-Control-Allow-Origin': '*',
      },
      body: JSON.stringify(this.state),
    };
    const response = await fetch('http://localhost:5000/addAssembly', options);
    const result = await response.json();
    console.log(result);
    if (result.status === 'ok') {
      this.setState({
        showResult: 'The Assembly has been added',
      });
      setTimeout(() => {
        this.setState({
          showResult: '',
          modelCase: '',
          modelMotherboard: '',
          modelCPU: '',
          modelCPUCooler: '',
          modelGPU: '',
          modelPSU: '',
          modelRAM: '',
          modelSSD: '',
        });
      }, 1000);
    } else if (result.status === 'Assembly already exist') {
      this.setState({
        showResult: 'This assembly already  exist',
      });
    }
  }

  /**
   *Description - This function start when the page is upload and activate the function getModels
   */
  componentDidMount() {
    this.getModels();
  }

  render() {
    return (
      <PageLayout>
        <Header h1Heading='Add Assembly' />
        <section>
          <form onSubmit={this.handleSubmit.bind(this)} className={style.form}>
            <input
              className={style.input}
              type='text'
              placeholder='Enter Assembly Name:'
              value={this.state.assemblyName}
              required
              onChange={e => this.setState({ assemblyName: e.target.value })}
            />
            <select
              className={style.select}
              value={this.state.modelMotherboard}
              label='MOTHERBOARD'
              onChange={e =>
                this.setState({ modelMotherboard: e.target.value })
              }
              required
            >
              <option value='' disabled>
                Select a Motherboard
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
              className={style.select}
              value={this.state.modelCPU}
              label='CPU'
              onChange={e => this.setState({ modelCPU: e.target.value })}
              required
            >
              <option value='' disabled>
                Select a CPU
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
              className={style.select}
              value={this.state.modelCPUCooler}
              label='CPU Cooler'
              onChange={e => this.setState({ modelCPUCooler: e.target.value })}
              required
            >
              <option value='' disabled>
                Select a CPU Cooler
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
              className={style.select}
              value={this.state.modelGPU}
              label='GPU'
              onChange={e => this.setState({ modelGPU: e.target.value })}
              required
            >
              <option value='' disabled>
                Select a GPU
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
              className={style.select}
              value={this.state.modelPSU}
              label='PSU'
              onChange={e => this.setState({ modelPSU: e.target.value })}
              required
            >
              <option value='' disabled>
                Select a PSU
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
              className={style.select}
              value={this.state.modelRAM}
              label='RAM'
              onChange={e => this.setState({ modelRAM: e.target.value })}
              required
            >
              <option value='' disabled>
                Select a RAM
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
              className={style.select}
              value={this.state.modelSSD}
              label='SSD'
              onChange={e => this.setState({ modelSSD: e.target.value })}
              required
            >
              <option value='' disabled>
                Select a SSD
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
              className={style.select}
              value={this.state.modelCase}
              label='CASE'
              onChange={e => this.setState({ modelCase: e.target.value })}
              required
            >
              <option value='' disabled>
                Select a Case
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
            <p className={style.showResult}>{this.state.showResult}</p>
          </form>
        </section>
      </PageLayout>
    );
  }
}
