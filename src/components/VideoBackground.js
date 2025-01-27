import React from 'react';
import '../styles/VideoBackground.sass';

const VideoBackground = () => {
  return (
    <div className='video-section'>
      <video autoPlay loop muted playsInline className='background-video'>
        <source src="/videos/fumee1080.mp4" type="video/mp4" />
        Votre navigateur ne supporte pas la lecture de vidéos.
      </video>
    </div>
  );
};

export default VideoBackground;