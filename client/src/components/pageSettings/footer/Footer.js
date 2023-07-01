import { Component } from 'react';
import styles from './footer.module.css';
import { Link } from 'react-router-dom';

/**
 * Description - This function define the footer section
 */
export default class Footer extends Component {
  render() {
    const author = this.props.name;
    const date = new Date().getFullYear();
    return (
      <footer className={styles.footer}>
        <p>
          {author} &copy; {date}
        </p>
        <Link to='/about' className={styles.link}>
          About
        </Link>
      </footer>
    );
  }
}
