import React, { Component } from 'react';
import PageLayout from '../../../layouts/pageLayout/PageLayout';
import Header from '../../../../commonComponents/header/Header';
import style from './mountedAssemblies.module.css';

/**
 * Description  - This class display the assembly products
 */
export default class MountedAssemblies extends Component {
  state = {
    assembly: [{ assemblyName: 'Loading data...' }],
    showData: false,
    selectIndex: null,
  };

  /**
   * Description - This function display the assembly products
   */
  async getAssembly() {
    const response = await fetch(
      'http://localhost:5000/getAssembly'
    );
    const result = await response.json();
    result.sort((a, b) => a.assemblyName.localeCompare(b.assemblyName));
    // console.log(result);
    this.setState({ assembly: result });
  }

  /**
   * Description - This function activate the getAssembly function when the page upload
   */
  componentDidMount() {
    this.getAssembly();
  }

  /**
   * Description - This function open the assembly details when click on the selected assembly
   * @param {*} index
   */
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
                  <span className={style.span}> Assembly Name:</span>

                  {this.state.assembly[this.state.selectIndex].assemblyName}
                </h3>
                <h3>
                  <span className={style.span}>Case:</span>
                  {this.state.assembly[this.state.selectIndex].modelCase}
                </h3>
                <h3>
                  <span className={style.span}>Motherboard:</span>

                  {this.state.assembly[this.state.selectIndex].modelMotherboard}
                </h3>
                <h3>
                  <span className={style.span}> CPU:</span>

                  {this.state.assembly[this.state.selectIndex].modelCPU}
                </h3>
                <h3>
                  <span className={style.span}> CPU Cooler:</span>

                  {this.state.assembly[this.state.selectIndex].modelCPUCooler}
                </h3>
                <h3>
                  <span className={style.span}> GPU:</span>

                  {this.state.assembly[this.state.selectIndex].modelGPU}
                </h3>
                <h3>
                  <span className={style.span}> PSU:</span>

                  {this.state.assembly[this.state.selectIndex].modelPSU}
                </h3>
                <h3>
                  <span className={style.span}> RAM:</span>

                  {this.state.assembly[this.state.selectIndex].modelRAM}
                </h3>
                <h3>
                  <span className={style.span}> SSD:</span>

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
