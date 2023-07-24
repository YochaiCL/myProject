import { Component } from 'react';
import style from './videos.module.css';

/**
 * Description - 
 */
export default class Videos extends Component {
  render() {
    const { video, name } = this.props.details;

    return (
      <section className={style.section}>
        <article className={style.article}>
          <source src={video} type='video/mp4'></source>
          {/* <img className={style.img} src={video} alt='person' width='150' /> */}
          <div>
            <p>{name}</p>
          </div>
        </article>
      </section>
    );
  }
}
