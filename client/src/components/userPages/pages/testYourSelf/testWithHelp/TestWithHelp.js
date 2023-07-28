import React, { Component } from 'react';
import PageLayout from '../../../layouts/pageLayout/PageLayout';
import style from './testWithHelp.module.css';
import Button from '../../../../commonComponents/button/Button';
import Header from '../../../../commonComponents/header/Header';

/**
 * Description - This class activate assembly test to the user with help
 */
export default class TestWithHelp extends Component {
  state = {
    testName: '',
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
    // console.log(result);
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
    const response = await fetch('http://localhost:5000/testWithHelp', options);
    const result = await response.json();
    // console.log(result);
    if (result.status === 'ok') {
      this.setState({
        showResult: 'The Test has been added',
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
          currentMotherboard: '',
          currentCpu: '',
          currentCPUCooler: '',
          currentGPU: '',
          currentPSU: '',
          currentRAM: '',
          currentSSD: '',
          currentCase: '',
        });
      }, 1000);
    } else if (result.status === 'Test already exist') {
      this.setState({
        showResult: 'This test already  exist',
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
        <Header h1Heading='Test With Help' />
        <section>
          <form onSubmit={this.handleSubmit.bind(this)} className={style.form}>
            <input
              className={style.input}
              type='text'
              placeholder='Enter Test Name:'
              value={this.state.testName}
              required
              onChange={e => this.setState({ testName: e.target.value })}
            />

            {/* motherboard */}
            <select
              className={style.select}
              value={this.state.modelMotherboard}
              label='MOTHERBOARD'
              onChange={e => {
                this.setState({ modelMotherboard: e.target.value });
                if (e.target.value === 'ROG STRIX Z790-F GAMING WIFI') {
                  this.setState({
                    currentCpu: 'i9-12900KF',
                    currentGPU:
                      'TUF Gaming GeForce RTX 3070 Ti V2 OC Edition 8GB GDDR6X',
                    currentRAM: 'Corsair Vengeance 2x32GB DDR5 4800MHz CL40',
                    currentCase: 'Corsair iCUE 7000X',
                  });
                }
                if (e.target.value === 'PRIME H610M-D D4') {
                  this.setState({
                    currentCpu: 'i5-13400',
                    currentGPU:
                      'ASUS TUF GTX 1660 SUPER GAMING OC 6GB GDDR6 DVI HDMI DP',
                    currentRAM: 'G.Skill Aegis 2x8GB 2666Mhz DDR4 CL19 Kit',
                    currentCase: 'TUF Gaming GT301',
                  });
                }
              }}
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

            {/* cpu */}
            <select
              className={style.select}
              value={this.state.modelCPU}
              label='CPU'
              onChange={e => {
                this.setState({ modelCPU: e.target.value });
                if (e.target.value === 'i9-12900KF') {
                  this.setState({
                    currentCPUCooler: 'H150 RGB 360mm Liquid CPU Cooler',
                  });
                }
                if (e.target.value === 'i5-13400') {
                  this.setState({ currentCPUCooler: 'Arctic Alpine 17 CO' });
                }
              }}
              required
            >
              <option value='' disabled>
                Select a CPU
              </option>
              {this.state.cpuArray.map(itemCpu => {
                if (this.state.currentCpu === itemCpu) {
                  return (
                    <option
                      key={itemCpu}
                      value={itemCpu}
                      className={style.nextComp}
                    >
                      {itemCpu}
                    </option>
                  );
                } else {
                  return (
                    <option key={itemCpu} value={itemCpu}>
                      {itemCpu}
                    </option>
                  );
                }
              })}
            </select>

            {/* cpu cooler */}
            <select
              className={style.select}
              value={this.state.modelCPUCooler}
              label='CPU Cooler'
              onChange={e => {
                this.setState({ modelCPUCooler: e.target.value });
                if (e.target.value === 'H150 RGB 360mm Liquid CPU Cooler') {
                  this.setState({
                    currentCase: 'Corsair iCUE 7000X',
                  });
                }
                if (e.target.value === 'Arctic Alpine 17 CO') {
                  this.setState({ currentCase: 'TUF Gaming GT301' });
                }
              }}
              required
            >
              <option value='' disabled>
                Select a CPU Cooler
              </option>
              {[
                ...this.state.cpuCoolerFanArray,
                ...this.state.cpuCoolerLiquidArray,
              ].map(itemCpuCooler => {
                if (this.state.currentCPUCooler === itemCpuCooler) {
                  return (
                    <option
                      key={itemCpuCooler}
                      value={itemCpuCooler}
                      className={style.nextComp}
                    >
                      {itemCpuCooler}
                    </option>
                  );
                } else {
                  return (
                    <option key={itemCpuCooler} value={itemCpuCooler}>
                      {itemCpuCooler}
                    </option>
                  );
                }
              })}
            </select>

            {/* gpu */}
            <select
              className={style.select}
              value={this.state.modelGPU}
              label='GPU'
              onChange={e => {
                this.setState({ modelGPU: e.target.value });
                if (
                  e.target.value ===
                  'TUF Gaming GeForce RTX 3070 Ti V2 OC Edition 8GB GDDR6X'
                ) {
                  this.setState({
                    currentPSU: 'ROG-THOR-1000P2-GAMING',
                  });
                }
                if (
                  e.target.value ===
                  'ASUS TUF GTX 1660 SUPER GAMING OC 6GB GDDR6 DVI HDMI DP'
                ) {
                  this.setState({
                    currentPSU: 'Asus ROG-STRIX 550W GOLD ROG-STRIX-550G',
                  });
                }
              }}
              required
            >
              <option value='' disabled>
                Select a GPU
              </option>
              {this.state.gpuArray.map(itemGpu => {
                if (this.state.currentGPU === itemGpu) {
                  return (
                    <option
                      key={itemGpu}
                      value={itemGpu}
                      className={style.nextComp}
                    >
                      {itemGpu}
                    </option>
                  );
                } else {
                  return (
                    <option key={itemGpu} value={itemGpu}>
                      {itemGpu}
                    </option>
                  );
                }
              })}
            </select>

            {/* psu */}
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
                if (this.state.currentPSU === itemPsu) {
                  return (
                    <option
                      key={itemPsu}
                      value={itemPsu}
                      className={style.nextComp}
                    >
                      {itemPsu}
                    </option>
                  );
                } else {
                  return (
                    <option key={itemPsu} value={itemPsu}>
                      {itemPsu}
                    </option>
                  );
                }
              })}
            </select>

            {/* ram */}
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
                if (this.state.currentRAM === itemRam) {
                  return (
                    <option
                      key={itemRam}
                      value={itemRam}
                      className={style.nextComp}
                    >
                      {itemRam}
                    </option>
                  );
                } else {
                  return (
                    <option key={itemRam} value={itemRam}>
                      {itemRam}
                    </option>
                  );
                }
              })}
            </select>

            {/* ssd */}
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
                    <option
                      key={itemSSD}
                      value={itemSSD}
                      className={style.nextComp}
                    >
                      {itemSSD}
                    </option>
                  );
                }
              )}
            </select>

            {/* case */}
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
                if (this.state.currentCase === itemCase) {
                  return (
                    <option
                      key={itemCase}
                      value={itemCase}
                      className={style.nextComp}
                    >
                      {itemCase}
                    </option>
                  );
                } else {
                  return (
                    <option key={itemCase} value={itemCase}>
                      {itemCase}
                    </option>
                  );
                }
              })}
            </select>
            <Button type='submit' text='save test' />
            <p className={style.showResult}>{this.state.showResult}</p>
          </form>
        </section>
      </PageLayout>
    );
  }
}
