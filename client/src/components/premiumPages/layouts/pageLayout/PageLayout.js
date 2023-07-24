import React from 'react';
import Navbar from '../../navbar/Navbar';
import style from './pageLayout.module.css';
import Footer from '../../../commonComponents/footer/Footer';

/**
 * Description - This function define the premium page layout
 * @param {*} children - Premium page
 * @returns - Premium layout
 */
export default function PageLayout({ children }) {
  return (
    <div>
      <Navbar />
      <div className={style.content}>{children}</div>
      <Footer name='Designed by Yochai Chen Levi' />
    </div>
  );
}
