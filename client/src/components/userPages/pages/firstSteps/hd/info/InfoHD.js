import React from 'react';
import ComponentLearnLayout from '../../../../layouts/componentLearnLayout/ComponentLearnLayout';
import Header from '../../../../../commonComponents/header/Header';
import style from '../../motherboard/info/infoMOTHERBOARD.module.css';

/**
 * Description - This Function display the hard drive information
 * @returns - hard drive information
 */
function infoHD() {
  return (
    <ComponentLearnLayout name='hd'>
      <Header h1Heading='Hard Drive Information' />
      <article>
        <h2 className={style.h2}>What is a hard disk drive (HDD)?</h2>
        <p>
          A computer hard drive (or a hard disk or HDD) is one kind of
          technology that stores the operating system, applications, and data
          files such a documents, pictures and music that your computer uses.
        </p>
        <h2 className={style.h2}>
          What are the advantages and disadvantages of a hard drive?
        </h2>
        <p className={style.p}>
          HDDs are proven technology that can hold a large amount of data and
          are relatively cheap. Under normal use, they are reasonably durable
          and function well. There are drawbacks, however. Hard disk drives can
          be slow, especially to open large applications or files. Because they
          do not write data sequentially, the data can become fragmented, with
          empty space within each compartment. This empty space is too small to
          use for data, but when the empty space is added together it can take
          up a large portion of the drive.
        </p>
        <p>
          Hard drives use a lot of power and produce a lot of heat. Under normal
          circumstances HDDs are durable. But when hard drives are in portable
          computers that can be dropped or bumped while the platter is spinning,
          the drive can be damaged so that the data on them is not retrievable
          by end users.
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

export default infoHD;
