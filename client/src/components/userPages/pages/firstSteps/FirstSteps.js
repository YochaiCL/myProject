import React, { useEffect, useState } from 'react';

import PageLayout from '../../layouts/pageLayout/PageLayout';
import Header from '../../../commonComponents/header/Header';
import LearnLayout from '../../layouts/learnLayout/LearnLayout';

import ssd from '../../../../images/Learn-Your-Hardware/ssd.PNG';
import cpu from '../../../../images/Learn-Your-Hardware/cpu.PNG';
import gpu from '../../../../images/Learn-Your-Hardware/gpu.PNG';
import cables from '../../../../images/Learn-Your-Hardware/cables.jpg';
import cases from '../../../../images/Learn-Your-Hardware/case.PNG';
import cpuCooler from '../../../../images/Learn-Your-Hardware/cpu-cooler.PNG';
import dvd from '../../../../images/Learn-Your-Hardware/dvd.PNG';
import fans from '../../../../images/Learn-Your-Hardware/fans.PNG';
import hd from '../../../../images/Learn-Your-Hardware/hd.PNG';
import motherboard from '../../../../images/Learn-Your-Hardware/motherboard.PNG';
import psu from '../../../../images/Learn-Your-Hardware/psu.PNG';
import ram from '../../../../images/Learn-Your-Hardware/ram.PNG';
import style from './FirstSteps.module.css';

/**
 * Description - This function show all the components
 * @returns - All components
 */
export default function FirstSteps() {
  const [array, setArray] = useState([]);

  /**
   * Description - This function get the learned button data from the server
   */
  useEffect(() => {
    let user = JSON.parse(localStorage.getItem('user'));
    console.log(user);
    fetch('http://localhost:5000/compLearned/getData', {
      method: 'POST',
      crossDomain: true,
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        'Accept-Control-Allow-Origin': '*',
      },
      body: JSON.stringify({
        userId: user._id,
      }),
    })
      .then(res => res.json())
      .then(data => {
        console.log(data, 'userData');
        setArray(data[0]);
      });
  }, []);
  return (
    <PageLayout>
      <Header h1Heading='First Steps - Learn Your Hardware' />

      <figure className={style.figure}>
        <LearnLayout
          img={motherboard}
          imgName='motherboard'
          name='MOTHERBOARD'
          compInfo='/infoMOTHERBOARD'
          compProduct='/productsMOTHERBOARD'
          learn={array.motherboard}
          changeLearn={setArray}
          oldState={array}
        />

        <LearnLayout
          img={cpu}
          imgName='cpu'
          name='CPU'
          compInfo='/infoCPU'
          compProduct='/productsCPU'
          learn={array.cpu}
          changeLearn={setArray}
          oldState={array}
        />

        <LearnLayout
          img={cpuCooler}
          imgName='cpuCooler'
          name='CPU COOLER'
          compInfo='/infoCPUCOOLER'
          compProduct='/productsCPUCOOLER'
          learn={array.cpuCooler}
          changeLearn={setArray}
          oldState={array}
        />

        <LearnLayout
          img={psu}
          imgName='psu'
          name='PSU'
          compInfo='/infoPSU'
          compProduct='/productsPSU'
          learn={array.psu}
          changeLearn={setArray}
          oldState={array}
        />

        <LearnLayout
          img={gpu}
          imgName='gpu'
          name='GPU'
          compInfo='/infoGPU'
          compProduct='/productsGPU'
          learn={array.gpu}
          changeLearn={setArray}
          oldState={array}
        />
        <LearnLayout
          img={ssd}
          imgName='ssd'
          name='SSD'
          compInfo='/infoSSD'
          compProduct='/productsSSD'
          learn={array.ssd}
          changeLearn={setArray}
          oldState={array}
        />

        <LearnLayout
          img={ram}
          imgName='ram'
          name='RAM'
          compInfo='/infoRAM'
          compProduct='/productsRAM'
          learn={array.ram}
          changeLearn={setArray}
          oldState={array}
        />

        <LearnLayout
          img={cases}
          imgName='case'
          name='CASE'
          compInfo='/infoCASE'
          compProduct='/productsCASE'
          learn={array.case}
          changeLearn={setArray}
          oldState={array}
        />

        <LearnLayout
          img={fans}
          imgName='fans'
          name='FANS'
          compInfo='/infoFANS'
          compProduct='/productsFANS'
          learn={array.fans}
          changeLearn={setArray}
          oldState={array}
        />

        <LearnLayout
          img={dvd}
          imgName='dvd'
          name='DVD'
          compInfo='/infoDVD'
          learn={array.dvd}
          changeLearn={setArray}
          oldState={array}
        />
        <LearnLayout
          img={hd}
          imgName='hd'
          name='HARD DISK'
          compInfo='/infoHD'
          learn={array.hd}
          changeLearn={setArray}
          oldState={array}
        />
        <LearnLayout
          img={cables}
          imgName='cables'
          name='CABLES'
          compInfo='/infoCABLE'
          learn={array.cables}
          changeLearn={setArray}
          oldState={array}
        />
      </figure>
    </PageLayout>
  );
}
