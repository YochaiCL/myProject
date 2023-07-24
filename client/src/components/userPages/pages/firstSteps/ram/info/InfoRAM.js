import React from 'react';
import ComponentLearnLayout from '../../../../layouts/componentLearnLayout/ComponentLearnLayout';
import Header from '../../../../../commonComponents/header/Header';
import style from '../../motherboard/info/infoMOTHERBOARD.module.css';
import { Link } from 'react-router-dom';

/**
 * Description - This Function display the ram information
 * @returns - ram information
 */
function infoRAM() {
  return (
    <ComponentLearnLayout name='ram'>
      <Header h1Heading='RAM Information' />
      <article>
        <h2 className={style.h2}>What is RAM on a computer?</h2>
        <p className={style.p}>
          RAM (random access memory) is a computer's short-term memory, where
          the data that the processor is currently using is stored. Your
          computer can access RAM memory much faster than data on a hard disk,
          SSD, or other long-term storage device, which is why RAM capacity is
          critical for system performance.
        </p>
        <p className={style.p}>
          RAM keeps data easily accessible so your processor can quickly find it
          without having to go into long-term storage to complete immediate
          processing tasks.
        </p>

        <Link
          className={style.link}
          to='https://www.avast.com/c-what-is-ram-memory'
          target='blank'
        >
          Click For More Information
        </Link>
      </article>
    </ComponentLearnLayout>
  );
}

export default infoRAM;
