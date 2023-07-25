import React from 'react';
import ComponentLearnLayout from '../../../../layouts/componentLearnLayout/ComponentLearnLayout';
import Header from '../../../../../commonComponents/header/Header';
import style from '../../motherboard/info/infoMOTHERBOARD.module.css';
/**
 * Description - This Function display the cables information
 * @returns - cable information
 */
function infoCABLES() {
  return (
    <ComponentLearnLayout name='cables'>
      <Header h1Heading='Cable Information' />
      <article>
        <h2 className={style.h2}>What are the Internal PC Cables?</h2>
        <p className={style.p}>
          Once you have installed the motherboard and power supply, fitted in
          the CPU, and slotted your RAM modules, it’s time to connect all the
          cables on the board. Internal connectors are located inside a computer
          case. PC internal cables make the core of a computer.
        </p>
        <p className={style.p}>
          There are basically two main types of connectors found in the computer
          internally: socket connectors and power connectors.
        </p>
        <ul>
          <li>
            Socket connectors are generally used to transfer data among devices.
          </li>
          <li>
            Power connectors, on the other hand, are responsible for supplying
            and distributing power to internal devices inside the computer.
          </li>
        </ul>

        <h2 className={style.h2}>SATA cables</h2>
        <p>
          Serial Advanced Technology Attachment cables are special types of
          cables, which are mainly used to connect multiple types of storage
          drives (optical drives, hard drives, solid-state drives) to a
          motherboard.
        </p>
        <h2 className={style.h2}>Fan cables</h2>
        <p>
          A motherboard fan connector is a small three or four-pin connector
          located on the motherboard. The fan will have one set of cables that
          will connect into the connector on the motherboard.
        </p>
        <section className={style.attention}>
          <p>
            Please pay attention, this component is not available for selection
            because this is a custom selected product
          </p>
        </section>
      </article>
    </ComponentLearnLayout>
  );
}

export default infoCABLES;
