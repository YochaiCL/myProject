import React from 'react';
import Header from '../../../../commonComponents/header/Header';
import PageLayout from '../../../layouts/pageLayout/PageLayout';
import { Link } from 'react-router-dom';
import style from './assembliesVideos.module.css';

export default function AssembliesVideos() {
  return (
    <PageLayout>
      <Header h1Heading='Assemblies Videos' />
      <article className={style.article}>
        <table>
          <caption>Videos Table</caption>
          <tbody>
            <tr>
              <th>Type</th>
              <th>Video</th>
            </tr>
            <tr>
              <td>Motherboard</td>
              <td>
                <Link
                  className={style.link}
                  to='https://www.youtube.com/watch?v=GjtPrnNuvK4'
                  target='blank'
                >
                  Click To See
                </Link>
              </td>
            </tr>
            <tr>
              <td>CPU</td>
              <td>
                <Link
                  className={style.link}
                  to='https://www.youtube.com/watch?v=6t8YhRTqLfA'
                  target='blank'
                >
                  Click To See
                </Link>
              </td>
            </tr>
            <tr>
              <td>Liquid CPU Cooler</td>
              <td>
                <Link
                  className={style.link}
                  to='https://www.youtube.com/watch?v=3SPlaDjDuTM'
                  target='blank'
                >
                  Click To See
                </Link>
              </td>
            </tr>
            <tr>
              <td>Fan CPU Cooler</td>
              <td>
                <Link
                  className={style.link}
                  to='https://www.youtube.com/watch?v=5qczGR4KMnY'
                  target='blank'
                >
                  Click To See
                </Link>
              </td>
            </tr>
            <tr>
              <td>PSU</td>
              <td>
                <Link
                  className={style.link}
                  to='https://www.youtube.com/watch?v=Q_NPF_4Kvc4'
                  target='blank'
                >
                  Click To See
                </Link>
              </td>
            </tr>
            <tr>
              <td>GPU</td>
              <td>
                <Link
                  className={style.link}
                  to='https://www.youtube.com/watch?v=YVbjl69z3HE'
                  target='blank'
                >
                  Click To See
                </Link>
              </td>
            </tr>
            <tr>
              <td>RAM</td>
              <td>
                <Link
                  className={style.link}
                  to='https://www.youtube.com/watch?v=FcYB1hPf-dE'
                  target='blank'
                >
                  Click To See
                </Link>
              </td>
            </tr>
            <tr>
              <td>SSD</td>
              <td>
                <Link
                  className={style.link}
                  to='https://www.youtube.com/watch?v=0eGOujvffcU'
                  target='blank'
                >
                  Click To See
                </Link>
              </td>
            </tr>
            <tr>
              <td>FAN</td>
              <td>
                <Link
                  className={style.link}
                  to='https://www.youtube.com/watch?v=T_Jjzgq_htU'
                  target='blank'
                >
                  Click To See
                </Link>
              </td>
            </tr>
            <tr>
              <td>Total Assembly</td>
              <td>
                <Link
                  className={style.link}
                  to='https://www.youtube.com/watch?v=BWnkbQjvx4o'
                  target='blank'
                >
                  Click To See
                </Link>
              </td>
            </tr>
          </tbody>
        </table>
      </article>
    </PageLayout>
  );
}
