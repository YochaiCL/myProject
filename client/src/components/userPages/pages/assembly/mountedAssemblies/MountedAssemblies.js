import React, { Component } from 'react';
import PageLayout from '../../../layouts/pageLayout/PageLayout';
import Header from '../../../../pageSettings/header/Header';
import style from './mountedAssemblies.module.css';

export default class MountedAssemblies extends Component {
  state = {
    assembly: [{ assemblyName: 'Loading data...' }],
    showData: false,
    selectIndex: null,
  };

  

  async getAssembly() {
    const response = await fetch(
      'http://localhost:5000/getAssemblies/assemblies'
    );
    const result = await response.json();
    console.log(result);
    this.setState({ assembly: result });
  }

  componentDidMount() {
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
        <Header h1Heading='Mounted Assemblies' />
       
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
              <div>
                <h3>
                  Assembly Name:{' '}
                  {this.state.assembly[this.state.selectIndex].assemblyName}
                </h3>
                <h3>
                  Case: {this.state.assembly[this.state.selectIndex].modelCase}
                </h3>
                <h3>
                  Motherboard:{' '}
                  {this.state.assembly[this.state.selectIndex].modelMotherboard}
                </h3>
                <h3>
                  CPU:
                  {this.state.assembly[this.state.selectIndex].modelCPU}
                </h3>
                <h3>
                  CPU Cooler:
                  {this.state.assembly[this.state.selectIndex].modelCPUCooler}
                </h3>
                <h3>
                  GPU:
                  {this.state.assembly[this.state.selectIndex].modelGPU}
                </h3>
                <h3>
                  PSU:
                  {this.state.assembly[this.state.selectIndex].modelPSU}
                </h3>
                <h3>
                  RAM:
                  {this.state.assembly[this.state.selectIndex].modelRAM}
                </h3>
                <h3>
                  SSD:
                  {this.state.assembly[this.state.selectIndex].modelSSD}
                </h3>
              </div>
            </section>
          )}
        </section>
      </PageLayout>
    );
  }
}
