import React, { Component } from 'react';
import PageLayout from '../../../layouts/pageLayout/PageLayout';
import Header from '../../../../commonComponents/header/Header';
import style from './updateAssemblies.module.css';
import Button from '../../../../commonComponents/button/Button';

/**
 * Description - This class update the assembly data and save it in database
 */
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

  /**
   * Description - This function get the data of all assemblies in database and sorted the array
   */
  async getAssembly() {
    const response = await fetch('http://localhost:5000/getAssembly');
    const result = await response.json();
    // console.log(result);
    result.sort((a, b) => a.assemblyName.localeCompare(b.assemblyName));
    this.setState({ assembly: result });
  }

  /**
   * Description - This function get the model components of the selected assembly
   */
  async getModels() {
    const response = await fetch('http://localhost:5000/getComponentsModels');
    const result = await response.json();
    // Updating the components array in the component state
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
   * Description - This function update the selected assembly by the entered data
   * @param {*} e - Data entered by the Admin
   */
  async handleSubmit(e) {
    e.preventDefault();
    // console.log(this.state.assembly[this.state.selectIndex].assemblyName);
    // console.log(this.state.assembly[this.state.selectIndex]);
    let newAssembly = {
      modelMotherboard: this.state.modelMotherboard,
      modelCPU: this.state.modelCPU,
      modelCPUCooler: this.state.modelCPUCooler,
      modelGPU: this.state.modelGPU,
      modelPSU: this.state.modelPSU,
      modelRAM: this.state.modelRAM,
      modelSSD: this.state.modelSSD,
      modelCase: this.state.modelCase,
    };
    // console.log(newAssembly);
    const options = {
      method: 'POST',
      crossDomain: true,
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        'Accept-Control-Allow-Origin': '*',
      },
      body: JSON.stringify({
        assemblyName: this.state.assembly[this.state.selectIndex].assemblyName,
        newAssembly,
      }),
    };
    const response = await fetch(
      'http://localhost:5000/updateAssembly',
      options
    );
    const result = await response.json();
    // console.log(result);
    if (result.status === 'true') {
      this.setState({
        showResult: 'The Assembly has updated',
      });
      setTimeout(() => {
        this.setState({
          showResult: '',
        });
      }, 1000);
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
    this.setState({ modelCase: this.state.assembly[index].modelCase });
    this.setState({
      modelMotherboard: this.state.assembly[index].modelMotherboard,
    });
    this.setState({ modelCPU: this.state.assembly[index].modelCPU });
    this.setState({ modelSSD: this.state.assembly[index].modelSSD });
    this.setState({ modelPSU: this.state.assembly[index].modelPSU });
    this.setState({
      modelCPUCooler: this.state.assembly[index].modelCPUCooler,
    });
    this.setState({ modelRAM: this.state.assembly[index].modelRAM });
    this.setState({ modelGPU: this.state.assembly[index].modelGPU });
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
                  <p>Assembly name</p>
                  <input
                    className={style.input}
                    type='text'
                    placeholder={
                      this.state.assembly[this.state.selectIndex].assemblyName
                    }
                    value={this.state.assemblyName}
                    readOnly
                  />

                  <p>Motherboard</p>
                  <select
                    className={style.select}
                    value={this.state.modelMotherboard}
                    label='MOTHERBOARD'
                    onChange={e =>
                      this.setState({
                        modelMotherboard: e.target.value,
                      })
                    }
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

                  <p>CPU</p>
                  <select
                    className={style.select}
                    value={this.state.modelCPU}
                    label='CPU'
                    onChange={e => this.setState({ modelCPU: e.target.value })}
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

                  <p>CPU Cooler</p>
                  <select
                    className={style.select}
                    value={this.state.modelCPUCooler}
                    label='CPU Cooler'
                    onChange={e =>
                      this.setState({ modelCPUCooler: e.target.value })
                    }
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

                  <p>GPU</p>
                  <select
                    className={style.select}
                    value={this.state.modelGPU}
                    label='GPU'
                    onChange={e => this.setState({ modelGPU: e.target.value })}
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

                  <p>PSU</p>
                  <select
                    className={style.select}
                    value={this.state.modelPSU}
                    label='PSU'
                    onChange={e => this.setState({ modelPSU: e.target.value })}
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

                  <p>Ram</p>
                  <select
                    className={style.select}
                    value={this.state.modelRAM}
                    label='RAM'
                    onChange={e => this.setState({ modelRAM: e.target.value })}
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

                  <p>SSD</p>
                  <select
                    className={style.select}
                    value={this.state.modelSSD}
                    label='SSD'
                    onChange={e => this.setState({ modelSSD: e.target.value })}
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

                  <p>Case</p>
                  <select
                    className={style.select}
                    value={this.state.modelCase}
                    label='CASE'
                    onChange={e => this.setState({ modelCase: e.target.value })}
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
                  <div className={style.btn}>
                    <Button type='submit' text='submit' />
                  </div>

                  <p className={style.showResult}>{this.state.showResult}</p>
                </form>
              </section>
            </section>
          )}
        </section>
      </PageLayout>
    );
  }
}
