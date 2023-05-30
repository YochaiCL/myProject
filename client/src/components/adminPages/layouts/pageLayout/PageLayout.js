import Navbar from '../../navbar/Navbar';

import Footer from '../../../pageSettings/footer/Footer';

import style from './layout.module.css';

function PageLayout({ children }) {
  return (
    <div>
      <Navbar />
      <div className={style.content}>{children}</div>
      <Footer />
    </div>
  );
}

export default PageLayout;
