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
    chosenOptions: [],
    currentSSD: [],
    currentCase: [],
    currentGPU: [],
    currentCpu: [],
    currentCPUCooler: [],
    currentMotherboard: [],
    currentPSU: [],
    currentRAM: [],
    current: [],
    userId: JSON.parse(localStorage.getItem('user')),
  };

  /**
   * Description - This function display the assembly products
   */
  async getAssembly() {
    const response = await fetch('http://localhost:5000/getAssembly');
    const result = await response.json();
    result.sort((a, b) => a.assemblyName.localeCompare(b.assemblyName));
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

  /**
   * Description - This function get all models of all components from database
   */
  async getModels() {
    const response = await fetch('http://localhost:5000/getComponentsModels');
    const result = await response.json();
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
    let status = false;
    for (const assemblyItem of this.state.assembly) {
      if (
        assemblyItem.modelMotherboard === this.state.modelMotherboard &&
        assemblyItem.modelCPU === this.state.modelCPU &&
        assemblyItem.modelCPUCooler === this.state.modelCPUCooler &&
        assemblyItem.modelCase === this.state.modelCase &&
        assemblyItem.modelGPU === this.state.modelGPU &&
        assemblyItem.modelPSU === this.state.modelPSU &&
        assemblyItem.modelRAM === this.state.modelRAM &&
        assemblyItem.modelSSD === this.state.modelSSD
      ) {
        status = true;
        break;
      }
    }
    if (!status) {
      this.setState({
        showResult: 'Please choose only the Green Rows',
      });

      setTimeout(() => {
        this.setState({
          showResult: '',
        });
      }, 1000);
    } else {
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
      if (result.status === 'ok') {
        this.setState({
          showResult: 'The Test has been added',
        });
        setTimeout(() => {
          window.location.href = '/testWithHelp';
        }, 2000);
      } else if (result.status === 'Test already exist') {
        this.setState({
          showResult: 'This test already exist',
        });
      }
    }
  }

  render() {
    const isCpuSelected = this.state.currentCpu.includes(this.state.modelCPU);
    const isCpuCoolerSelected = this.state.currentCPUCooler.includes(
      this.state.modelCPUCooler
    );
    const isGpuSelected = this.state.currentGPU.includes(this.state.modelGPU);
    const isPsuSelected = this.state.currentPSU.includes(this.state.modelPSU);
    const isSsdSelected = this.state.currentSSD.includes(this.state.modelSSD);
    const isRamSelected = this.state.currentRAM.includes(this.state.modelRAM);
    const isCaseSelected = this.state.currentCase.includes(
      this.state.modelCase
    );
    const isMotherboardSelected = this.state.currentMotherboard.includes(
      this.state.modelMotherboard
    );

    return (
      <PageLayout>
        <Header h1Heading='Test With Help' />
        <section>
          <h3 className={style.h3}>Interactions</h3>
          <ol className={style.ul} start='1'>
            <li>Enter the name of to the assembly</li>
            <li>First select Motherboard</li>
            <li>
              Continuo select components by the numbers - Select only the green
              rows
            </li>
          </ol>

          <form onSubmit={this.handleSubmit.bind(this)} className={style.form}>
            <input
              className={style.input}
              type='text'
              placeholder='Enter Test Name:'
              value={this.state.testName}
              required
              onChange={e => this.setState({ testName: e.target.value })}
            />
            {/* Motherboard */}
            <section className={style.selectWrapper}>
              <span
                className={`${style.number} ${
                  isMotherboardSelected
                    ? style.backgroundGreen
                    : style.backgroundRed
                }`}
              >
                1
              </span>
              <select
                className={`${style.select} ${
                  isMotherboardSelected ? style.backgroundGreen : ''
                }`}
                value={this.state.modelMotherboard}
                label='MOTHERBOARD'
                onChange={e => {
                  this.setState({
                    currentSSD: [],
                    currentCase: [],
                    currentGPU: [],
                    currentCpu: [],
                    currentCPUCooler: [],
                    currentMotherboard: [],
                    currentPSU: [],
                    currentRAM: [],
                    current: [],
                  });
                  this.setState({ modelMotherboard: e.target.value }, () => {
                    for (let option of this.state.assembly) {
                      if (
                        this.state.modelMotherboard === option.modelMotherboard
                      ) {
                        this.setState({
                          chosenOption: option,
                          currentMotherboard: this.state.modelMotherboard,
                        });
                        this.state.currentCase.push(option.modelCase);
                        this.state.currentSSD.push(option.modelSSD);
                        this.state.currentCpu.push(option.modelCPU);
                        this.state.currentGPU.push(option.modelGPU);
                        this.state.currentRAM.push(option.modelRAM);
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
            </section>

            {/* cpu */}
            <section className={style.selectWrapper}>
              <span
                className={`${style.number} ${
                  isCpuSelected ? style.backgroundGreen : style.backgroundRed
                }`}
              >
                2
              </span>
              <select
                className={`${style.select} ${
                  isCpuSelected ? style.backgroundGreen : style.backgroundRed
                }`}
                value={this.state.modelCPU}
                label='CPU'
                onChange={e => {
                  this.setState({ currentCPUCooler: [] });
                  this.setState({ modelCPU: e.target.value }, () => {
                    for (let option of this.state.assembly) {
                      if (this.state.modelCPU === option.modelCPU) {
                        this.setState({
                          chosenOption: option,
                        });

                        this.state.currentCPUCooler.push(option.modelCPUCooler);
                      }
                    }
                  });
                }}
                required
                disabled={!isMotherboardSelected}
              >
                <option value='' disabled>
                  Select a CPU
                </option>
                {this.state.cpuArray.map(itemCpu => {
                  if (this.state.currentCpu.includes(itemCpu)) {
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
            </section>

            {/* cpu cooler */}
            <section className={style.selectWrapper}>
              <span
                className={`${style.number} ${
                  isCpuCoolerSelected
                    ? style.backgroundGreen
                    : style.backgroundRed
                }`}
              >
                3
              </span>
              <select
                className={`${style.select} ${
                  isCpuCoolerSelected
                    ? style.backgroundGreen
                    : style.backgroundRed
                }`}
                value={this.state.modelCPUCooler}
                label='CPU Cooler'
                onChange={e => {
                  this.setState({ modelCPUCooler: e.target.value }, () => {});
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
                  if (this.state.currentCPUCooler.includes(itemCpuCooler)) {
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
            </section>
            {/* gpu */}
            <section className={style.selectWrapper}>
              <span
                className={`${style.number} ${
                  isGpuSelected ? style.backgroundGreen : style.backgroundRed
                }`}
              >
                4
              </span>
              <select
                className={`${style.select} ${
                  isGpuSelected ? style.backgroundGreen : style.backgroundRed
                }`}
                value={this.state.modelGPU}
                label='GPU'
                onChange={e => {
                  this.setState({ currentPSU: [] });
                  this.setState({ modelGPU: e.target.value }, () => {
                    for (let option of this.state.assembly) {
                      if (this.state.modelGPU === option.modelGPU) {
                        this.setState({
                          chosenOption: option,
                        });

                        this.state.currentPSU.push(option.modelPSU);
                      }
                    }
                  });
                }}
                required
                disabled={!isMotherboardSelected}
              >
                <option value='' disabled>
                  Select a GPU
                </option>
                {this.state.gpuArray.map(itemGpu => {
                  if (this.state.currentGPU.includes(itemGpu)) {
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
            </section>

            {/* psu */}
            <section className={style.selectWrapper}>
              <span
                className={`${style.number} ${
                  isPsuSelected ? style.backgroundGreen : style.backgroundRed
                }`}
              >
                6
              </span>
              <select
                className={`${style.select} ${
                  isPsuSelected ? style.backgroundGreen : style.backgroundRed
                }`}
                value={this.state.modelPSU}
                label='PSU'
                onChange={e => {
                  this.setState({ modelPSU: e.target.value }, () => {});
                }}
                required
                disabled={!isGpuSelected}
              >
                <option value='' disabled>
                  Select a PSU
                </option>
                {this.state.psuArray.map(itemPsu => {
                  if (this.state.currentPSU.includes(itemPsu)) {
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
            </section>

            {/* ram */}
            <section className={style.selectWrapper}>
              <span
                className={`${style.number} ${
                  isRamSelected ? style.backgroundGreen : style.backgroundRed
                }`}
              >
                7
              </span>
              <select
                className={`${style.select} ${
                  isRamSelected ? style.backgroundGreen : style.backgroundRed
                }`}
                value={this.state.modelRAM}
                label='RAM'
                onChange={e => {
                  this.setState({ modelRAM: e.target.value }, () => {});
                }}
                required
                disabled={!isMotherboardSelected}
              >
                <option value='' disabled>
                  Select a RAM
                </option>
                {this.state.ramArray.map(itemRam => {
                  if (this.state.currentRAM.includes(itemRam)) {
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
            </section>

            {/* ssd */}
            <section className={style.selectWrapper}>
              <span
                className={`${style.number} ${
                  isSsdSelected ? style.backgroundGreen : style.backgroundRed
                }`}
              >
                8
              </span>
              <select
                className={`${style.select} ${
                  isSsdSelected ? style.backgroundGreen : style.backgroundRed
                }`}
                value={this.state.modelSSD}
                label='SSD'
                onChange={e => {
                  this.setState({ modelSSD: e.target.value }, () => {});
                }}
                required
                disabled={!isMotherboardSelected}
              >
                <option value='' disabled>
                  Select a SSD
                </option>
                {[...this.state.ssdM2Array, ...this.state.ssdSataArray].map(
                  itemSSD => {
                    if (this.state.currentSSD.includes(itemSSD)) {
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
            </section>

            {/* case */}
            <section className={style.selectWrapper}>
              <span
                className={`${style.number} ${
                  isCaseSelected ? style.backgroundGreen : style.backgroundRed
                }`}
              >
                9
              </span>
              <select
                className={`${style.select} ${
                  isCaseSelected ? style.backgroundGreen : style.backgroundRed
                }`}
                value={this.state.modelCase}
                label='CASE'
                onChange={e => {
                  this.setState({ modelCase: e.target.value }, () => {});
                }}
                required
                disabled={!isMotherboardSelected}
              >
                <option value='' disabled>
                  Select a Case
                </option>
                {this.state.caseArray.map(itemCase => {
                  if (this.state.currentCase.includes(itemCase)) {
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
            </section>
            <Button type='submit' text='save test' />
            <p className={style.showResult}>{this.state.showResult}</p>
          </form>
        </section>
      </PageLayout>
    );
  }
}
