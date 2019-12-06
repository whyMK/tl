import React from 'react';
import ReactPlayer from 'react-player';
import videos from '../images/advert_youtube.mp4';

class Banner extends React.Component {
  render () {
    return (
      <div className="header-slider">
        <ReactPlayer url={videos} fileConfig={{ attributes: { "muted": "true", "autoPlay": "true", "playing":"true" } }} playing loop />
      </div>
    )
  }
}

export default Banner
