import React from 'react';
import Navbar from '../navbar/Navbar';
import style from './layout.module.css';

import Footer from '../../pageSettings/footer/Footer';

export default function Layout({ children }) {
  return (
    <div>
      <Navbar />
      <div className={style.content}>{children}</div>
      <Footer name='Designed by Yochai Chen Levi' />
    </div>
  );
}
