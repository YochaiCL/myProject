import React from 'react';
import ComponentLearnLayout from '../../../../layouts/componentLearnLayout/ComponentLearnLayout';
import Header from '../../../../../commonComponents/header/Header';
import style from '../../motherboard/info/infoMOTHERBOARD.module.css';

/**
 * Description - This Function display the ssd information
 * @returns - ssd information
 */
function infoSSD() {
  return (
    <ComponentLearnLayout name='ssd'>
      <Header h1Heading='SSD Information' />
      <article>
        <p>
          A solid-state drive (SSD) is a solid-state storage device that uses
          integrated circuit assemblies to store data persistently, typically
          using flash memory.
        </p>
        <h2 className={style.h2}>M.2</h2>
        <p className={style.p}>
          M.2 SSDs typically come in three dimensions, which may be deduced from
          the card name —2242, 2260, and 2280 — "22" represents the width in
          millimeters, while the next two digits represent the length, also in
          mm.
        </p>
        <p className={style.p}>
          The longer the drive, the more NAND flash chips can be mounted and
          therefore more capacity.
        </p>
        <p className={style.p}>
          The drive is connected directly to the motherboard, so make sure there
          is a connection on the motherboard
        </p>
        <ul>
          <li>
            <p>
              Performance - An M.2 SSD based on the NVMe specifications, for
              example, can read and write at much faster rates than SATA or SAS
              SSDs.
            </p>
          </li>
          <li>
            <p>Price - An M.2 SSD costs more than a SATA SSD.</p>
          </li>
          <li>
            <p>
              Limited capacity - While 1 TB or 2 TB is probably adequate for
              most applications, enterprise storage systems require higher
              capacities.
            </p>
          </li>
        </ul>

        <h2 className={style.h2}>SATA III</h2>
        <p className={style.p}>
          SATA (Serial Advanced Technology Attachment) is from 500 GB to 16 TB
          and available at a lower cost than M.2
        </p>
        <p>
          The drive must be connected via a Sata connection to the motherboard
          and a power supply connection
        </p>
      </article>
    </ComponentLearnLayout>
  );
}

export default infoSSD;
