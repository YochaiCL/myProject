import React, { Component } from 'react';
import PageLayout from '../../../layouts/pageLayout/PageLayout';
import Header from '../../../../commonComponents/header/Header';
import style from './deleteComponents.module.css';
import Button from '../../../../commonComponents/button/Button';
import Option from '../../../../commonComponents/option/Option';

/**
 * Description - This class delete selected component from the database
 */
export default class DeleteComponents extends Component {
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
    motherboardArray: [],
    psuArray: [],
    ramArray: [],
    ssdM2Array: [],
    ssdSataArray: [],
    selectedComponent: '',
    allArrays: [],
    showResult: '',
  };

  /**
   * Description - This function get all components from database and sorted them
   */
  async getModels() {
    const response = await fetch('http://localhost:5000/getComponentsModels/');
    const result = await response.json();
    // console.log(result);
    // Updating the components array in state
    this.setState({ allArrays: result });
    this.setState({ cpuArray: result.Cpu.sort() });
    this.setState({ gpuArray: result.Gpu.sort() });
    this.setState({ caseArray: result.Case.sort() });
    this.setState({ cpuCoolerFanArray: result.CpuCoolerFan.sort() });
    this.setState({ cpuCoolerLiquidArray: result.CpuCoolerLiquid.sort() });
    this.setState({ motherboardArray: result.Motherboard });
    this.setState({ psuArray: result.Psu.sort() });
    this.setState({ ramArray: result.Ram.sort() });
    this.setState({ ssdM2Array: result.SsdM2.sort() });
    this.setState({ ssdSataArray: result.SsdSata.sort() });
  }

  /**
   * Description - This function activate getModels function when the page in upload
   */
  componentDidMount() {
    this.getModels();
  }

  /**
   * Description - This function delete the selected component from the database
   */
  deleteComponent() {
    for (let key in this.state.allArrays) {
      for (let component of this.state.allArrays[key]) {
        if (component === this.state.selectedComponent) {
          let result = this.state.allArrays[key].filter(item => {
            return item !== this.state.selectedComponent;
          });
          this.setState({ [key]: result });
          try {
            fetch('http://localhost:5000/deleteComponents', {
              method: 'POST',
              crossDomain: true,
              headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
                'Access-Control-Allow-Origin': '*',
              },
              body: JSON.stringify({
                collectionName: key,
                model: this.state.selectedComponent,
              }),
            })
              .then(res => res.json())
              .then(data => {
                if (data.status === 'Component deleted') {
                  this.setState({ showResult: 'Component have been deleted' });
                  this.getModels();
                  setTimeout(() => {
                    this.setState({
                      showResult: '',
                    });
                  }, 1000);
                }
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
          className={style.select}
          value={this.state.selectedComponent}
          label='CPU Cooler'
          onChange={e => this.setState({ selectedComponent: e.target.value })}
          required
        >
          <option value='' disabled>
            Select Component To Delete
          </option>
          <Option optionText='Select Motherboard' />

          {this.state.motherboardArray.map(item => {
            return (
              <option key={item} value={item}>
                {item}
              </option>
            );
          })}
          <Option optionText='Select CPU' />

          {this.state.cpuArray.map(item => {
            return (
              <option key={item} value={item}>
                {item}
              </option>
            );
          })}
          <Option optionText='Select CPU Cooler' />
          {[
            ...this.state.cpuCoolerFanArray,
            ...this.state.cpuCoolerLiquidArray,
          ].map(item => {
            return (
              <option key={item} value={item}>
                {item}
              </option>
            );
          })}
          <Option optionText='Select GPU' />

          {this.state.gpuArray.map(item => {
            return (
              <option key={item} value={item}>
                {item}
              </option>
            );
          })}
          <Option optionText='Select PSU' />

          {this.state.psuArray.map(item => {
            return (
              <option key={item} value={item}>
                {item}
              </option>
            );
          })}

          <Option optionText='Select SSD' />

          {[...this.state.ssdSataArray, ...this.state.ssdM2Array].map(item => {
            return (
              <option key={item} value={item}>
                {item}
              </option>
            );
          })}

          <Option optionText='Select RAM' />

          {this.state.ramArray.map(item => {
            return (
              <option key={item} value={item}>
                {item}
              </option>
            );
          })}

          <Option optionText='Select Case' />

          {this.state.caseArray.map(item => {
            return (
              <option key={item} value={item}>
                {item}
              </option>
            );
          })}
        </select>
        <div className={style.btn}>
          <Button text='Delete' fun={() => this.deleteComponent()} />
        </div>
        <p className={style.showResult}>{this.state.showResult}</p>
      </PageLayout>
    );
  }
}
