import React from 'react'
// import videos from '../images/advert.mp4'
// <source src={videos} type="video/mp4" />

class Banner extends React.Component {

  constructor (props) {
    super(props);

    this.state = {
        videos: require('../images/advert.mp4')
    }
  }

  render () {
    return (
      <div className="header-slider">
        <video loop autoPlay>
          <source src={this.state.videos} type="video/mp4" />
          <source src={this.state.videos} type="video/ogg" />
        </video>
      </div>
    )
  }
}

export default Banner
