import { Component } from 'react';
import style from './header.module.css'
export default class Header extends Component {
  render() {
    const mainH1 = this.props.h1Heading;

    return (
      <header className={style.header}>
        <h1>{mainH1}</h1>
      </header>
    );
  }
}
