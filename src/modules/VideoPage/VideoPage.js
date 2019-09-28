import React, { Component } from 'react';
import Slider from 'react-slick';
import axios from 'axios';
import ReactPlayer from 'react-player';
import Container from 'components/Container';
import VideoLoader from 'components/VideoLoader';
import './style.scss';

class VideoPage extends Component {
  constructor() {
    super();

    this.state = {
      videos: [],
      isVideoLoaded: false,
      isVideoError: false
    };
  }

  componentDidMount() {
    axios
      .get('https://api.vimeo.com/users/19850221/videos', {
        headers: { Authorization: 'Bearer f3b57b7288bdb41eb56e3d33bceb1a97' }
      })
      .then(res => {
        this.setState({ videos: res.data.data });
      });
  }

  onReady = index => () => {
    const lastIdx = this.state.videos.length - 1;
    if (index === lastIdx) this.setState({ isVideoLoaded: true });
  };

  onError = error => {
    this.setState({ isVideoError: true });
  };

  render() {
    const settings = {
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 4
    };

    const { videos, isVideoLoaded } = this.state;
    console.log('videos', videos);

    return (
      <Container className="main-container videopage">
        <div className="videopage-main">
          <div className="videopage-main__featured">
            <ReactPlayer url="https://vimeo.com/90509568" controls />
          </div>
          <div className="videopage-main__event">
            <div className="videopage-main__text">BRANDED EVENTS</div>
            <div className="videopage-main__devider"></div>
          </div>
          <div className="videopage-main__videos">
            <VideoLoader className={`${isVideoLoaded ? 'loader-hide' : 'loader-show'}`} />
            <Slider {...settings} className={`${isVideoLoaded ? 'video-show' : 'video-hide'}`}>
              {videos.map((item, index) => {
                return (
                  <ReactPlayer
                    key={`item_${index}`}
                    url={item.link}
                    width="90%"
                    height="164px"
                    controls
                    onReady={this.onReady(index)}
                    onError={this.onError}
                  />
                );
              })}
            </Slider>
          </div>

          <div className="videopage-main__event">
            <div className="videopage-main__text">TEMP RETAIL</div>
            <div className="videopage-main__devider"></div>
          </div>
          <div className="videopage-main__videos">
            <VideoLoader className={`${isVideoLoaded ? 'loader-hide' : 'loader-show'}`} />
            <Slider {...settings} className={`${isVideoLoaded ? 'video-show' : 'video-hide'}`}>
              {videos.map((item, index) => {
                return (
                  <ReactPlayer
                    key={`item_${index}`}
                    url={item.link}
                    width="90%"
                    height="164px"
                    controls
                    onReady={this.onReady}
                    onError={this.onError}
                  />
                );
              })}
            </Slider>
          </div>
        </div>
      </Container>
    );
  }
}

export default VideoPage;
