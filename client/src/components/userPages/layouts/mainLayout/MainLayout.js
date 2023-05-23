import Navbar from '../../navbar/Navbar';

import Footer from '../../../pageSettings/footer/Footer';

import style from './MainLayout.module.css';

function MainLayout({ children }) {
  return (
    <div>
      <Navbar />
      <div className={style.content}>{children}</div>
      <Footer name='Designed by Yochai Chen Levi' />
    </div>
  );
}

export default MainLayout;
