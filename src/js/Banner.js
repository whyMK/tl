import React from 'react';
import ReactPlayer from 'react-player';
import videos from '../images/advert_youtube.mp4';

class Banner extends React.Component {
  render () {
    return (
      <div className="header-slider">
        <ReactPlayer url={videos} fileConfig={{ attributes: { "muted": "true", "autoPlay": "true", "volume" : "0", "playing": "true"} }} autoplay loop muted playsinline />
      </div>
    )
  }
}

export default Banner
