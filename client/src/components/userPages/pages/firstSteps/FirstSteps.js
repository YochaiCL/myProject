import React, {useEffect, useState } from 'react';

import PageLayout from '../../layouts/pageLayout/PageLayout';
import Header from '../../../pageSettings/header/Header';
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


export default function FirstSteps() {
  const [array , setArray] = useState([])

  useEffect(()=>{
     let user = JSON.parse(localStorage.getItem('user'));
  console.log(user);
    fetch('http://localhost:5000/comp-learned/getData', {
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
  },[])
  return (
    <PageLayout>
      <Header h1Heading='First Steps - Learn Your Hardware' />

      <figure className={style.figure}>
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
          img={dvd}
          imgName='dvd'
          name='DVD'
          compInfo='/infoDVD'
          compProduct='/productsDVD'
          learn={array.dvd}
          changeLearn={setArray}
          oldState={array}
        />

        <LearnLayout
          img={hd}
          imgName='hd'
          name='HARD DISK'
          compInfo='/infoHD'
          compProduct='/productsHD'
          learn={array.hd}
          changeLearn={setArray}
          oldState={array}
        />

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
          img={cables}
          imgName='cables'
          name='CABLES'
          compInfo='/infoCABLE'
          compProduct='/productsCABLES'
          learn={array.cables}
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
          img={cpuCooler}
          imgName='cpuCooler'
          name='CPU COOLER'
          compInfo='/infoCPUCOOLER'
          compProduct='/productsCPUCOOLER'
          learn={array.cpuCooler}
          changeLearn={setArray}
          oldState={array}
        />
      </figure>
    </PageLayout>
  );
}


// export default class FirstSteps extends Component {
//   state = {
//     array: [],
//   };

//   changeState(newState) {
//     console.log(newState);
//     this.setState({ array: newState });
//   }

//   componentDidMount() {
//     let user = JSON.parse(localStorage.getItem('user'));
//   console.log(user);
//     fetch('http://localhost:5000/comp-learned/getData', {
//       method: 'POST',
//       crossDomain: true,
//       headers: {
//         'Content-Type': 'application/json',
//         Accept: 'application/json',
//         'Accept-Control-Allow-Origin': '*',
//       },
//       body: JSON.stringify({
//         userId: user._id,
//       }),
//     })
//       .then(res => res.json())
//       .then(data => {
//         console.log(data, 'userData');
//         this.setState({ array: data[0] });
//       });
//   }

//   render() {
//     return (
//       <Layout>
//         <Header h1Heading='Learn Your Hardware' />

//         <figure className={style.figure}>
//           <LearnLayout
//             img={ssd}
//             imgName='ssd'
//             name='SSD'
//             compInfo='/infoSSD'
//             compProduct='/productsSSD'
//             learn={this.state.array.ssd}
//             changeLearn={this.changeState}
//             oldState={this.state}
//           />

//           <LearnLayout
//             img={cpu}
//             imgName='cpu'
//             name='CPU'
//             compInfo='/infoCPU'
//             compProduct='/productsCPU'
//             learn={this.state.array.cpu}
//             changeLearn={this.changeState}
//             oldState={this.state}
//           />

//           <LearnLayout
//             img={gpu}
//             imgName='gpu'
//             name='GPU'
//             compInfo='/infoGPU'
//             compProduct='/productsGPU'
//             learn={this.state.array.gpu}
//             changeLearn={this.changeState}
//             oldState={this.state}
//           />

//           <LearnLayout
//             img={dvd}
//             imgName='dvd'
//             name='DVD'
//             compInfo='/infoDVD'
//             compProduct='/productsDVD'
//             learn={this.state.array.dvd}
//             changeLearn={this.changeState}
//             oldState={this.state}
//           />

//           <LearnLayout
//             img={hd}
//             imgName='hd'
//             name='HARD DISK'
//             compInfo='/infoHD'
//             compProduct='/productsHD'
//             learn={this.state.array.hd}
//             changeLearn={this.changeState}
//             oldState={this.state}
//           />

//           <LearnLayout
//             img={motherboard}
//             imgName='motherboard'
//             name='MOTHERBOARD'
//             compInfo='/infoMOTHERBOARD'
//             compProduct='/productsMOTHERBOARD'
//             learn={this.state.array.motherboard}
//             changeLearn={this.changeState}
//             oldState={this.state}
//           />

//           <LearnLayout
//             img={psu}
//             imgName='psu'
//             name='PSU'
//             compInfo='/infoPSU'
//             compProduct='/productsPSU'
//             learn={this.state.array.psu}
//             changeLearn={this.changeState}
//             oldState={this.state}
//           />

//           <LearnLayout
//             img={ram}
//             imgName='ram'
//             name='RAM'
//             compInfo='/infoRAM'
//             compProduct='/productsRAM'
//             learn={this.state.array.ram}
//             changeLearn={this.changeState}
//             oldState={this.state}
//           />

//           <LearnLayout
//             img={cables}
//             imgName='cables'
//             name='CABLES'
//             compInfo='/infoCABLES'
//             compProduct='/productsCABLES'
//             learn={this.state.array.cables}
//             changeLearn={this.changeState}
//             oldState={this.state}
//           />

//           <LearnLayout
//             img={cases}
//             imgName='case'
//             name='CASE'
//             compInfo='/infoCASE'
//             compProduct='/productsCASE'
//             learn={this.state.array.case}
//             changeLearn={this.changeState}
//             oldState={this.state}
//           />

//           <LearnLayout
//             img={fans}
//             imgName='fans'
//             name='FANS'
//             compInfo='/infoFANS'
//             compProduct='/productsFANS'
//             learn={this.state.array.fans}
//             changeLearn={this.changeState}
//             oldState={this.state}
//           />

//           <LearnLayout
//             img={cpuCooler}
//             imgName='cpuCooler'
//             name='CPU COOLER'
//             compInfo='/infoCPUCOOLER'
//             compProduct='/productsCPUCOOLER'
//             learn={this.state.array.cpuCooler}
//             changeLearn={this.changeState}
//             oldState={this.state}
//           />
//         </figure>
//       </Layout>
//     );
//   }
// }
