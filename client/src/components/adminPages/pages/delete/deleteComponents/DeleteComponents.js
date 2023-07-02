import React, { Component } from 'react';
import PageLayout from '../../../layouts/pageLayout/PageLayout';
import Header from '../../../../pageSettings/header/Header';
import style from './deleteComponents.module.css';
import Button from '../../../../pageSettings/button/Button';
import Option from '../../../../pageSettings/option/Option';

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
    Fans: [],
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
   * Description - This function get all components from database
   */
  async getModels() {
    const response = await fetch('http://localhost:5000/getComponentsModels/');
    const result = await response.json();
    console.log(result);
    // Updating the components array in state
    this.setState({ allArrays: result });
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
    this.setState({ Fans: result.Fans });
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
    // console.log(this.state.selectedComponent);
    for (let key in this.state.allArrays) {
      for (let component of this.state.allArrays[key]) {
        if (component === this.state.selectedComponent) {
          console.log(this.state.allArrays[key]);
          let result = this.state.allArrays[key].filter(item => {
            console.log(item, this.state.selectedComponent);
            return item !== this.state.selectedComponent;
          });
          console.log(result, key, component, this.state.allArrays[key]);
          this.setState({ [key]: result });
          // this.setState({allArrays : [...this.state.allArrays , result] })
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
                  this.setState({ showResult: 'Component have deleted' });
                   this.getModels(); 
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

          {this.state.Fans.map(itemCpuCooler => {
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
        <p className={style.showResult}>{this.state.showResult}</p>
      </PageLayout>
    );
  }
}
