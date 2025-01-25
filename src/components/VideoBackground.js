import React from 'react';
import fumeeVideo from '../assets/videos/fumee.mp4' // chemin correct
import '../styles/VideoBackground.sass';

const VideoBackground = () => {
  return (
    <div className='video-section'>
      <video autoPlay loop muted playsInline className='background-video'>
        <source src={fumeeVideo} type="video/mp4" />
        Votre navigateur ne supporte pas la lecture de vidéos.
      </video>
    </div>
  );
};

export default VideoBackground;