import Navbar from '../../navbar/Navbar';
import Footer from '../../../pageSettings/footer/Footer';
import style from './layout.module.css';

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
