import React from 'react';
import Loader from 'react-loaders';
import './style.scss';

const VideoLoader = ({ className }) => (
  <div className={`feed-loader ${className}`}>
    <Loader type="ball-pulse" active />
  </div>
);

export default VideoLoader;
