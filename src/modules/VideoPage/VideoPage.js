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
      isVideoPlay: false,
      hoveredVideoUri: null,
      isVideoError: false
    };
  }

  componentDidMount() {
    axios
      .get(process.env.REACT_APP_VIMEO_SERVER, {
        headers: { Authorization: `Bearer ${process.env.REACT_APP_USER_TOKEN}` }
      })
      .then(res => {
        this.setState({ videos: res.data.data });
      });
  }

  onReady = index => () => {
    const lastIdx = this.state.videos.length - 1;
    if (index === lastIdx) this.setState({ isVideoLoaded: true });
  };

  onPlay = () => {
    this.setState({ isVideoPlay: true });
  };

  onPause = () => {
    this.setState({ isVideoPlay: false });
  };

  onError = error => {
    this.setState({ isVideoError: true });
  };

  onMouseOverImage = uri => () => {
    this.setState({ hoveredVideoUri: uri });
  };

  onMouseOutImage = index => () => {
    this.setState({ hoveredVideoUri: null });
  };

  render() {
    const settings = {
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 4
    };

    const mobileSettings = {
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };

    const { videos, isVideoLoaded, isVideoPlay, hoveredVideoUri } = this.state;

    return (
      <Container className="main-container videopage">
        <div className="videopage-main">
          <div className="videopage-main__featured">
            <ReactPlayer
              url="https://vimeo.com/90509568"
              width="100%"
              className="videopage-main__featuredvideo"
              controls
            />
          </div>
          <div className="videopage-main__event">
            <div className="videopage-main__text">BRANDED EVENTS</div>
            <div className="videopage-main__devider"></div>
          </div>
          <div className="videopage-main__videos">
            {<VideoLoader className={`${isVideoLoaded ? 'loader-hide' : 'loader-show'}`} />}
            <div className="videopage-main__desktopSlider">
              <Slider {...settings} className={`${isVideoLoaded ? 'slider-show' : 'slider-hide'}`}>
                {videos.map((item, index) => {
                  return (
                    <div key={`item_${index}`}>
                      <ReactPlayer
                        url={item.link}
                        width="90%"
                        height="164px"
                        controls
                        onReady={this.onReady(index)}
                        onPlay={this.onPlay}
                        onPause={this.onPause}
                        onError={this.onError}
                        // playing={isVideoPlay && hoveredVideoUri === item.uri && true}
                        playing={isVideoPlay && hoveredVideoUri === item.uri}
                        className={`${hoveredVideoUri === item.uri ? 'video-show' : 'video-hide'}`}
                      />
                      <div
                        className={`videopage-main__videos-thumb ${
                          hoveredVideoUri === item.uri ? 'video-hide' : 'video-show'
                        }`}
                        onMouseOver={this.onMouseOverImage(item.uri)}
                        // onMouseOut={this.onMouseOutImage(index)}
                      >
                        <img src={item.pictures.sizes[2].link} width="90%" alt="video" />
                        <div className="videopage-main__videos-playbutton">
                          <div className="videopage-main__videos-triangle" />
                        </div>
                      </div>
                    </div>
                  );
                })}
              </Slider>
            </div>
            <div className="videopage-main__mobileSlider">
              <Slider
                {...mobileSettings}
                className={`${isVideoLoaded ? 'slider-show' : 'slider-hide'}`}
              >
                {videos.map((item, index) => {
                  return (
                    <div key={`item_${index}`}>
                      <ReactPlayer
                        url={item.link}
                        width="100%"
                        height="164px"
                        controls
                        onReady={this.onReady(index)}
                        onPlay={this.onPlay}
                        onPause={this.onPause}
                        onError={this.onError}
                        playing={isVideoPlay && hoveredVideoUri === item.uri}
                      />
                    </div>
                  );
                })}
              </Slider>
            </div>
          </div>

          <div className="videopage-main__event">
            <div className="videopage-main__text">TEMP RETAIL</div>
            <div className="videopage-main__devider"></div>
          </div>
          <div className="videopage-main__videos">
            {<VideoLoader className={`${isVideoLoaded ? 'loader-hide' : 'loader-show'}`} />}
            <div className="videopage-main__desktopSlider">
              <Slider {...settings} className={`${isVideoLoaded ? 'slider-show' : 'slider-hide'}`}>
                {videos.map((item, index) => {
                  return (
                    <div key={`item_${index}`}>
                      <ReactPlayer
                        url={item.link}
                        width="90%"
                        height="164px"
                        controls
                        onReady={this.onReady(index)}
                        onPlay={this.onPlay}
                        onPause={this.onPause}
                        onError={this.onError}
                        // playing={isVideoPlay && hoveredVideoUri === item.uri && true}
                        playing={isVideoPlay && hoveredVideoUri === item.uri}
                        className={`${hoveredVideoUri === item.uri ? 'video-show' : 'video-hide'}`}
                      />
                      <div
                        className={`videopage-main__videos-thumb ${
                          hoveredVideoUri === item.uri ? 'video-hide' : 'video-show'
                        }`}
                        onMouseOver={this.onMouseOverImage(item.uri)}
                        // onMouseOut={this.onMouseOutImage(index)}
                      >
                        <img src={item.pictures.sizes[2].link} width="90%" alt="video" />
                        <div className="videopage-main__videos-playbutton">
                          <div className="videopage-main__videos-triangle" />
                        </div>
                      </div>
                    </div>
                  );
                })}
              </Slider>
            </div>
            <div className="videopage-main__mobileSlider">
              <Slider
                {...mobileSettings}
                className={`${isVideoLoaded ? 'slider-show' : 'slider-hide'}`}
              >
                {videos.map((item, index) => {
                  return (
                    <div key={`item_${index}`}>
                      <ReactPlayer
                        url={item.link}
                        width="100%"
                        height="164px"
                        controls
                        onReady={this.onReady(index)}
                        onPlay={this.onPlay}
                        onPause={this.onPause}
                        onError={this.onError}
                        playing={isVideoPlay && hoveredVideoUri === item.uri}
                      />
                    </div>
                  );
                })}
              </Slider>
            </div>
          </div>
        </div>
      </Container>
    );
  }
}

export default VideoPage;
