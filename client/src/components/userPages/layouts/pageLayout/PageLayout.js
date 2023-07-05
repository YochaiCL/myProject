import Navbar from '../../navbar/Navbar';
import Footer from '../../../commonComponents/footer/Footer';
import style from './pageLayout.module.css';

/**
 * Description - This function organize the page layout
 * @param {*} children - User page
 * @returns - page layout
 */
function PageLayout({ children }) {
  return (
    <div>
      <Navbar />
      <div className={style.content}>{children}</div>
      <Footer name='Designed by Yochai Chen Levi' />
    </div>
  );
}

export default PageLayout;
