import Navbar from '../../navbar/Navbar';
import Footer from '../../../commonComponents/footer/Footer';
import style from './pageLayout.module.css';

/**
 * Description - This function set the default page for Admin user
 * @param {*} children - Admin pages
 * @returns - Costume edit for Admin page
 */
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
