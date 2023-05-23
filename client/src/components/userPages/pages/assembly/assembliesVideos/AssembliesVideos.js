import { Component } from 'react';
import Layout from '../../../layouts/mainLayout/MainLayout';
import Header from '../../../../pageSettings/header/Header';
import Videos from './videos/Videos';
import { videos } from './video-data/video-data';

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
      <Layout>
        <Header h1Heading='Assemblies Videos' />
        <div>{displayVideos}</div>
      </Layout>
    );
  }
}
