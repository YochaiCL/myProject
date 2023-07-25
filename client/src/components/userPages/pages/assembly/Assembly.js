import React from 'react';
import PageLayout from '../../layouts/pageLayout/PageLayout';
import Header from '../../../commonComponents/header/Header';
import imgVideo from '../../../../images/assembly/see-assembly-videos.jpg';
import imgMounted from '../../../../images/assembly/see-mounted-assemblys.jpg';
import { Link } from 'react-router-dom';
import style from './assembly.module.css';
/**
 * Description - This function organize the assembly button layout
 */

function Assembly() {
  return (
    <PageLayout>
      <Header h1Heading='Assembly' />

      <figure className={style.figure}>
        <div className={style.box}>
          <img
            src={imgVideo}
            alt='videos'
            width='5500'
            height='4125'
            className={style.img}
          />
          <div className={style.text}>
            <Link className={style.link} to='/assembliesVideos'>
              Videos
            </Link>
          </div>
        </div>

        <div className={style.box}>
          <img
            src={imgMounted}
            alt='mounted assemblys'
            width='5500'
            height='3755'
            className={style.img}
          />
          <div className={style.text}>
            <Link className={style.link} to='/mountedAssemblies'>
              Mounted Assemblies
            </Link>
          </div>
        </div>
      </figure>
    </PageLayout>
  );
}

export default Assembly;
