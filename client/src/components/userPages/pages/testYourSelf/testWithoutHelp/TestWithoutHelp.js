import React, { Component } from 'react';
import PageLayout from '../../../layouts/pageLayout/PageLayout';
import Header from '../../../../commonComponents/header/Header';
import Button from '../../../../commonComponents/button/Button';
import style from './testWithoutHelp.module.css';

let optionsTest = [
  {
    case: 'Corsair iCUE 7000X',
    motherboard: 'ROG STRIX Z790-F GAMING WIFI',
    cpu: 'i9-12900KF',
    gpu: 'TUF Gaming GeForce RTX 3070 Ti V2 OC Edition 8GB GDDR6X',
    liquid_cpu_cooler: 'H150 RGB 360mm Liquid CPU Cooler',
    psu: 'ROG-STRIX-750G',
    ram: 'Corsair Vengeance 2x32GB DDR5 4800MHz CL40',
    storage: 'Samsung 980 PRO M.2 NVMe 1TB SSD',
    fan: 'none',
  },
  {
    case: 'TUF Gaming GT301',
    motherboard: 'PRIME H610M-D D4',
    cpu: 'i5-13400',
    gpu: 'ASUS TUF GTX 1660 SUPER GAMING OC 6GB GDDR6 DVI HDMI DP',
    fan_cpu_cooler: 'Arctic Alpine 17 CO',
    psu: 'Asus ROG-STRIX 550W GOLD ROG-STRIX-550G',
    ram: 'G.Skill Aegis 2x8GB 2666Mhz DDR4 CL19 Kit',
    storage: 'Kingston NV2 PCIe 4.0 x4 NVMe M.2 2280 1TB SSD',
    fan: 'none',
  },
];
/**
 * Description -
 */
export default class TestWithoutHelp extends Component {
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
    currectCase : '',
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
    gradeShow: 0,
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
    let grade = 0;
    let chosenOption = null;
    for (let option of optionsTest) {
      if (this.state.modelMotherboard === option.motherboard)
        chosenOption = option;
    }
    if (chosenOption) {
      if (chosenOption.case === this.state.modelCase) grade = grade + 10;
      else this.setState({ currectCase: chosenOption.case });
      if (chosenOption.cpu === this.state.modelCPU) grade = grade + 10;
      if (chosenOption.liquid_cpu_cooler === this.state.modelCPUCooler)
        grade = grade + 10;
      if (chosenOption.gpu === this.state.modelGPU) grade = grade + 10;
      if (chosenOption.psu === this.state.modelPSU) grade = grade + 10;
      if (chosenOption.ram === this.state.modelRAM) grade = grade + 10;
      if (chosenOption.ssd === this.state.modelSSD) grade = grade + 10;
    }

    this.setState({ gradeShow: grade });

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
    const response = await fetch(
      'http://localhost:5000/testWithoutHelp',
      options
    );
    const result = await response.json();
    console.log(result);
    if (result.status === 'ok') {
      this.setState({
        showResult: 'The Test has been added',
      });
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
        <Header h1Heading='Test Without Help' />
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
            {this.state.currectCase !== '' ? (
              <div>
                <h1>you have an error in case</h1>
                <button>link</button>
                <button>link 2</button>
                <button
                  onClick={() =>
                    this.setState({ modelCase: this.state.currectCase })
                  }
                >
                  you want to see the answer
                </button>
              </div>
            ) : (
              ''
            )}
            <Button type='submit' text='submit' />
            <p className={style.showResult}>{this.state.showResult}</p>
            {this.state.gradeShow > 0 ? (
              <p>your result is:{this.state.gradeShow}/100</p>
            ) : (
              ''
            )}
          </form>
        </section>
      </PageLayout>
    );
  }
}
