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
    assembly: [],
    showResult: '',
    chosenOption: null,
    selectedTest: [],
    userId: JSON.parse(localStorage.getItem('user')),
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

    const propertiesToCheck = [
      'modelCPU',
      'modelGPU',
      'modelMotherboard',
      'modelCPUCooler',
      'modelSSD',
      'modelRAM',
      'modelCase',
      'modelPSU',
    ];

    let allConditionsMet = true;
    for (const property of propertiesToCheck) {
      if (this.state[property] !== this.state.chosenOption[property]) {
        allConditionsMet = false;
        setTimeout(() => {
          this.setState({
            showResult: 'Please choose only the Green Rows',
          });
        }, 1000);
        break;
      }
    }

    if (allConditionsMet) {
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
        'http://localhost:5000/testWithHelp',
        options
      );
      const result = await response.json();
      // console.log(result);
      if (result.status === 'ok') {
        this.setState({
          showResult: 'The Test has been added',
        });
        setTimeout(() => {
          window.location.href = '/testWithHelp';
        }, 2000);
      } else if (result.status === 'Test already exist') {
        this.setState({
          showResult: 'This test already  exist',
        });
      }
    }
  }

  /**
   * Description - This function display the assembly products
   */
  async getAssembly() {
    const response = await fetch('http://localhost:5000/getAssembly');
    const result = await response.json();
    result.sort((a, b) => a.assemblyName.localeCompare(b.assemblyName));
    // console.log(result);
    this.setState({ assembly: result });
    this.getAssembly();
  }

  /**
   *Description - This function start when the page is upload and activate the function getModels
   */
  componentDidMount() {
    this.getModels();
    this.getAssembly();
  }

  render() {
    const isCpuSelected = this.state.modelCPU === this.state.currentCpu;
    const isCpuCoolerSelected =
      this.state.modelCPUCooler === this.state.currentCPUCooler;
    const isGpuSelected = this.state.modelGPU === this.state.currentGPU;
    const isPsuSelected = this.state.modelPSU === this.state.currentPSU;
    const isSsdSelected = this.state.modelSSD === this.state.currentSSD;
    const isRamSelected = this.state.modelRAM === this.state.currentRAM;
    const isCaseSelected = this.state.modelCase === this.state.currentCase;
    const isMotherboardSelected =
      this.state.modelMotherboard === this.state.currentMotherboard;

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
              className={`${style.select} ${
                isMotherboardSelected ? style.backgroundGreen : ''
              }`}
              value={this.state.modelMotherboard}
              label='MOTHERBOARD'
              onChange={e => {
                this.setState({ modelMotherboard: e.target.value }, () => {
                  for (let option of this.state.assembly) {
                    if (
                      this.state.modelMotherboard === option.modelMotherboard
                    ) {
                      this.setState({
                        chosenOption: option,
                        currentMotherboard: this.state.modelMotherboard,
                        currentCpu: option.modelCPU,
                        currentGPU: option.modelGPU,
                        currentRAM: option.modelRAM,
                        currentCase: option.modelCase,
                        currentSSD: option.modelSSD,
                      });
                      this.state.selectedTest.push(this.state.modelMotherboard);
                    }
                  }
                });
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
              className={`${style.select} ${
                isCpuSelected ? style.backgroundGreen : style.backgroundRed
              }`}
              value={this.state.modelCPU}
              label='CPU'
              onChange={e => {
                this.setState({ modelCPU: e.target.value }, () => {
                  this.setState({
                    currentCPUCooler: this.state.chosenOption.modelCPUCooler,
                  });
                  this.state.selectedTest.push(this.state.modelCPU);
                });
              }}
              required
              disabled={!isMotherboardSelected}
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
              className={`${style.select} ${
                isCpuCoolerSelected
                  ? style.backgroundGreen
                  : style.backgroundRed
              }`}
              value={this.state.modelCPUCooler}
              label='CPU Cooler'
              onChange={e => {
                this.setState({ modelCPUCooler: e.target.value });
                this.state.selectedTest.push(this.state.modelCPUCooler);
              }}
              required
              disabled={!isCpuSelected}
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
              className={`${style.select} ${
                isGpuSelected ? style.backgroundGreen : style.backgroundRed
              }`}
              value={this.state.modelGPU}
              label='GPU'
              onChange={e => {
                this.setState({ modelGPU: e.target.value }, () => {
                  this.setState({
                    currentPSU: this.state.chosenOption.modelPSU,
                  });
                  this.state.selectedTest.push(this.state.modelGPU);
                });
              }}
              required
              disabled={!isMotherboardSelected}
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
              className={`${style.select} ${
                isPsuSelected ? style.backgroundGreen : style.backgroundRed
              }`}
              value={this.state.modelPSU}
              label='PSU'
              onChange={e => {
                this.setState({ modelPSU: e.target.value }, () => {
                  this.state.selectedTest.push(this.state.modelPSU);
                });
              }}
              required
              disabled={!isGpuSelected}
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
              className={`${style.select} ${
                isRamSelected ? style.backgroundGreen : style.backgroundRed
              }`}
              value={this.state.modelRAM}
              label='RAM'
              onChange={e => {
                this.setState({ modelRAM: e.target.value }, () => {
                  this.state.selectedTest.push(this.state.modelRAM);
                });
              }}
              required
              disabled={!isMotherboardSelected}
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
              className={`${style.select} ${
                isSsdSelected ? style.backgroundGreen : style.backgroundRed
              }`}
              value={this.state.modelSSD}
              label='SSD'
              onChange={e => {
                this.setState({ modelSSD: e.target.value }, () => {
                  this.state.selectedTest.push(this.state.modelSSD);
                });
              }}
              required
              disabled={!isMotherboardSelected}
            >
              <option value='' disabled>
                Select a SSD
              </option>
              {[...this.state.ssdM2Array, ...this.state.ssdSataArray].map(
                itemSSD => {
                  if (this.state.currentSSD === itemSSD) {
                    return (
                      <option
                        key={itemSSD}
                        value={itemSSD}
                        className={style.nextComp}
                      >
                        {itemSSD}
                      </option>
                    );
                  } else {
                    return (
                      <option key={itemSSD} value={itemSSD}>
                        {itemSSD}
                      </option>
                    );
                  }
                }
              )}
            </select>

            {/* case */}
            <select
              className={`${style.select} ${
                isCaseSelected ? style.backgroundGreen : style.backgroundRed
              }`}
              value={this.state.modelCase}
              label='CASE'
              onChange={e => {
                this.setState({ modelCase: e.target.value }, () => {
                  this.state.selectedTest.push(this.state.modelCase);
                });
              }}
              required
              disabled={!isMotherboardSelected}
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
