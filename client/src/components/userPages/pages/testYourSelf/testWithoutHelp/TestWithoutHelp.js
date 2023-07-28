import React, { Component } from 'react';
import PageLayout from '../../../layouts/pageLayout/PageLayout';
import Header from '../../../../commonComponents/header/Header';
import Button from '../../../../commonComponents/button/Button';
import style from './testWithoutHelp.module.css';
import { Link } from 'react-router-dom';

/**
 * Description - This class test the user for crate assembly
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
    assembly: [],
    resultCase: '',
    resultMotherboard: '',
    resultCpu: '',
    resultPsu: '',
    resultGpu: '',
    resultCpuCooler: '',
    resultRam: '',
    resultSsd: '',
    selectClassCase: '',
    selectClassMotherboard: '',
    selectClassCpu: '',
    selectClassPsu: '',
    selectClassGpu: '',
    selectClassCpuCooler: '',
    selectClassRam: '',
    selectClassSsd: '',
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
    let grade = 12.5;
    const point = 12.5;
    let chosenOption = null;
    for (let option of this.state.assembly) {
      if (this.state.modelMotherboard === option.modelMotherboard) {
        chosenOption = option;
        this.setState({ selectClassMotherboard: 'style.selectCorrect' });
      }
    }
    if (chosenOption) {
      if (chosenOption.modelCase === this.state.modelCase) {
        grade += point;
        this.setState({ selectClassCase: 'style.selectCorrect' });
      } else {
        this.setState({
          resultCase: chosenOption.modelCase,
          selectClassCase: 'style.selectIncorrect',
        });
      }
      if (chosenOption.modelCPU === this.state.modelCPU) {
        grade += point;
        this.setState({ selectClassCpu: 'style.selectCorrect' });
      } else {
        this.setState({
          resultCpu: chosenOption.modelCPU,
          selectClassCpu: 'style.selectIncorrect',
        });
      }
      if (chosenOption.modelCPUCooler === this.state.modelCPUCooler) {
        grade += point;
        this.setState({ selectClassCpuCooler: 'style.selectCorrect' });
      } else {
        this.setState({
          resultCpuCooler: chosenOption.modelCPUCooler,
          selectClassCpuCooler: 'style.selectIncorrect',
        });
      }

      if (chosenOption.modelGPU === this.state.modelGPU) {
        grade += point;
        this.setState({ selectClassGpu: 'style.selectCorrect' });
      } else {
        this.setState({
          resultGpu: chosenOption.modelGPU,
          selectClassGpu: 'style.selectIncorrect',
        });
      }
      if (chosenOption.modelPSU === this.state.modelPSU) {
        grade += point;
        this.setState({ selectClassPsu: 'style.selectCorrect' });
      } else {
        this.setState({
          resultPsu: chosenOption.modelPSU,
          selectClassPsu: 'style.selectIncorrect',
        });
      }
      if (chosenOption.modelRAM === this.state.modelRAM) {
        grade += point;
        this.setState({ selectClassRam: 'style.selectCorrect' });
      } else {
        this.setState({
          resultRam: chosenOption.modelRAM,
          selectClassRam: 'style.selectIncorrect',
        });
      }
      if (chosenOption.modelSSD === this.state.modelSSD) {
        grade += point;
        this.setState({ selectClassSsd: 'style.selectCorrect' });
      } else {
        this.setState({
          resultSsd: chosenOption.modelSSD,
          selectClassSsd: 'style.selectIncorrect',
        });
      }
    }

    this.setState({ gradeShow: grade });

    if (grade === 100) {
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

        setTimeout(() => {
          this.setState({
            testName: '',
            showResult: '',
            modelCase: '',
            modelMotherboard: '',
            modelCPU: '',
            modelCPUCooler: '',
            modelGPU: '',
            modelPSU: '',
            modelRAM: '',
            modelSSD: '',
            resultCase: '',
            resultMotherboard: '',
            resultCpu: '',
            resultPsu: '',
            resultGpu: '',
            resultCpuCooler: '',
            resultRam: '',
            resultSsd: '',
            selectClassCase: '',
            selectClassMotherboard: '',
            selectClassCpu: '',
            selectClassPsu: '',
            selectClassGpu: '',
            selectClassCpuCooler: '',
            selectClassRam: '',
            selectClassSsd: '',
          });
        }, 2000);
      } else if (result.status === 'Test already exist') {
        setTimeout(() => {
          this.setState({
            showResult: 'This test name already exist',
          });
        }, 2000);
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
    console.log(result);
    this.setState({ assembly: result });
  }

  /**
   *Description - This function start when the page is upload and activate the function getModels
   */
  componentDidMount() {
    this.getModels();
    this.getAssembly();
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
            {/* motherboard */}
            <select
              className={
                this.state.selectClassMotherboard === ''
                  ? style.select
                  : this.state.selectClassMotherboard === 'style.selectCorrect'
                  ? style.selectCorrect
                  : ''
              }
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
            {this.state.resultMotherboard !== '' ? (
              <section className={style.wrongAnswer}>
                <h2 className={style.h2}>you have an error in motherboard</h2>
                <section className={style.moreInformation}>
                  <Link to='/infoMOTHERBOARD' className={style.link}>
                    motherboard Information
                  </Link>
                  <Link to='/premium' className={style.link}>
                    Question/Answer
                  </Link>
                  <button
                    onClick={() =>
                      this.setState({
                        modelMotherboard: this.state.resultMotherboard,
                        resultMotherboard: '',
                      })
                    }
                    className={style.btn}
                  >
                    Show correct answer
                  </button>
                </section>
              </section>
            ) : (
              ''
            )}
            {/* cpu */}
            <select
              className={
                this.state.selectClassCpu === ''
                  ? style.select
                  : this.state.selectClassCpu === 'style.selectCorrect'
                  ? style.selectCorrect
                  : this.state.selectClassCpu === 'style.selectIncorrect'
                  ? style.selectIncorrect
                  : ''
              }
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
            {this.state.resultCpu !== '' ? (
              <section className={style.wrongAnswer}>
                <h2 className={style.h2}>you have an error in cpu</h2>
                <section className={style.moreInformation}>
                  <Link to='/infoCPU' className={style.link}>
                    cpu Information
                  </Link>
                  <Link to='/premium' className={style.link}>
                    Question/Answer
                  </Link>
                  <button
                    onClick={() =>
                      this.setState({
                        modelCPU: this.state.resultCpu,
                        resultCpu: '',
                        selectClassCpu: 'style.selectCorrect',
                      })
                    }
                    className={style.btn}
                  >
                    Show correct answer
                  </button>
                </section>
              </section>
            ) : (
              ''
            )}
            {/* cpuCooler */}
            <select
              className={
                this.state.selectClassCpuCooler === ''
                  ? style.select
                  : this.state.selectClassCpuCooler === 'style.selectCorrect'
                  ? style.selectCorrect
                  : this.state.selectClassCpuCooler === 'style.selectIncorrect'
                  ? style.selectIncorrect
                  : ''
              }
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
            {this.state.resultCpuCooler !== '' ? (
              <section className={style.wrongAnswer}>
                <h2 className={style.h2}>you have an error in cpu cooler</h2>
                <section className={style.moreInformation}>
                  <Link to='/infoCPUCOOLER' className={style.link}>
                    cpu cooler Information
                  </Link>
                  <Link to='/premium' className={style.link}>
                    Question/Answer
                  </Link>
                  <button
                    onClick={() =>
                      this.setState({
                        modelCPUCooler: this.state.resultCpuCooler,
                        resultCpuCooler: '',
                        selectClassCpuCooler: 'style.selectCorrect',
                      })
                    }
                    className={style.btn}
                  >
                    Show correct answer
                  </button>
                </section>
              </section>
            ) : (
              ''
            )}
            {/* gpu */}
            <select
              className={
                this.state.selectClassGpu === ''
                  ? style.select
                  : this.state.selectClassGpu === 'style.selectCorrect'
                  ? style.selectCorrect
                  : this.state.selectClassGpu === 'style.selectIncorrect'
                  ? style.selectIncorrect
                  : ''
              }
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
            {this.state.resultGpu !== '' ? (
              <section className={style.wrongAnswer}>
                <h2 className={style.h2}>you have an error in gpu</h2>
                <section className={style.moreInformation}>
                  <Link to='/infoGPU' className={style.link}>
                    gpu Information
                  </Link>
                  <Link to='/premium' className={style.link}>
                    Question/Answer
                  </Link>
                  <button
                    onClick={() =>
                      this.setState({
                        modelGPU: this.state.resultGpu,
                        resultGpu: '',
                        selectClassGpu: 'style.selectCorrect',
                      })
                    }
                    className={style.btn}
                  >
                    Show correct answer
                  </button>
                </section>
              </section>
            ) : (
              ''
            )}
            {/* psu */}
            <select
              className={
                this.state.selectClassPsu === ''
                  ? style.select
                  : this.state.selectClassPsu === 'style.selectCorrect'
                  ? style.selectCorrect
                  : this.state.selectClassPsu === 'style.selectIncorrect'
                  ? style.selectIncorrect
                  : ''
              }
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
            {this.state.resultPsu !== '' ? (
              <section className={style.wrongAnswer}>
                <h2 className={style.h2}>you have an error in psu</h2>
                <section className={style.moreInformation}>
                  <Link to='/infoPSU' className={style.link}>
                    psu Information
                  </Link>
                  <Link to='/premium' className={style.link}>
                    Question/Answer
                  </Link>
                  <button
                    onClick={() =>
                      this.setState({
                        modelPSU: this.state.resultPsu,
                        resultPsu: '',
                        selectClassPsu: 'style.selectCorrect',
                      })
                    }
                    className={style.btn}
                  >
                    Show correct answer
                  </button>
                </section>
              </section>
            ) : (
              ''
            )}
            {/* ram */}
            <select
              className={
                this.state.selectClassRam === ''
                  ? style.select
                  : this.state.selectClassRam === 'style.selectCorrect'
                  ? style.selectCorrect
                  : this.state.selectClassRam === 'style.selectIncorrect'
                  ? style.selectIncorrect
                  : ''
              }
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
            {this.state.resultRam !== '' ? (
              <section className={style.wrongAnswer}>
                <h2 className={style.h2}>you have an error in ram</h2>
                <section className={style.moreInformation}>
                  <Link to='/infoRAM' className={style.link}>
                    ram Information
                  </Link>
                  <Link to='/premium' className={style.link}>
                    Question/Answer
                  </Link>
                  <button
                    onClick={() =>
                      this.setState({
                        modelRAM: this.state.resultRam,
                        resultRam: '',
                        selectClassRam: 'style.selectCorrect',
                      })
                    }
                    className={style.btn}
                  >
                    Show correct answer
                  </button>
                </section>
              </section>
            ) : (
              ''
            )}
            {/* ssd */}
            <select
              className={
                this.state.selectClassSsd === ''
                  ? style.select
                  : this.state.selectClassSsd === 'style.selectCorrect'
                  ? style.selectCorrect
                  : this.state.selectClassSsd === 'style.selectIncorrect'
                  ? style.selectIncorrect
                  : ''
              }
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
            {this.state.resultSsd !== '' ? (
              <section className={style.wrongAnswer}>
                <h2 className={style.h2}>you have an error in ssd</h2>
                <section className={style.moreInformation}>
                  <Link to='/infoSSD' className={style.link}>
                    ssd Information
                  </Link>
                  <Link to='/premium' className={style.link}>
                    Question/Answer
                  </Link>
                  <button
                    onClick={() =>
                      this.setState({
                        modelSSD: this.state.resultSsd,
                        resultSsd: '',
                        selectClassSsd: 'style.selectCorrect',
                      })
                    }
                    className={style.btn}
                  >
                    Show correct answer
                  </button>
                </section>
              </section>
            ) : (
              ''
            )}
            {/* case */}
            <select
              className={
                this.state.selectClassCase === ''
                  ? style.select
                  : this.state.selectClassCase === 'style.selectCorrect'
                  ? style.selectCorrect
                  : this.state.selectClassCase === 'style.selectIncorrect'
                  ? style.selectIncorrect
                  : ''
              }
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
            {this.state.resultCase !== '' ? (
              <section className={style.wrongAnswer}>
                <h2 className={style.h2}>you have an error in case</h2>
                <section className={style.moreInformation}>
                  <Link to='/infoCASE' className={style.link}>
                    case Information
                  </Link>
                  <Link to='/premium' className={style.link}>
                    Question/Answer
                  </Link>
                  <button
                    onClick={() =>
                      this.setState({
                        modelCase: this.state.resultCase,
                        resultCase: '',
                        selectClassCase: 'style.selectCorrect',
                      })
                    }
                    className={style.btn}
                  >
                    Show correct answer
                  </button>
                </section>
              </section>
            ) : (
              ''
            )}
            <Button type='submit' text='submit' />
            <p className={style.showResult}>{this.state.showResult}</p>
            {this.state.gradeShow > 0 ? (
              <p className={style.showResult}>
                your result is:{this.state.gradeShow}/100
              </p>
            ) : (
              ''
            )}
          </form>
        </section>
      </PageLayout>
    );
  }
}
