import { Component } from 'react';
import PageLayout from '../../../layouts/pageLayout/PageLayout';
import Header from '../../../../commonComponents/header/Header';
import Videos from './videos/Videos';
import { videos } from './video-data/video-data';

/**
 * Description -
 */
export default class AssembliesVideos extends Component {
  state = {
    allVideos: videos,
  };
  render() {
    const displayVideos = this.state.allVideos.map(video => (
      <div key={video.id}>
        <Videos details={video} />
      </div>
    ));
    return (
      <PageLayout>
        <Header h1Heading='Assemblies Videos' />
        <div>{displayVideos}</div>
      </PageLayout>
    );
  }
}
