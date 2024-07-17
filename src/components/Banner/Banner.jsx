import React, { useEffect, useState } from 'react';
import './Banner.css';

const Banner = ({ videos }) => {
  const [currentVideo, setCurrentVideo] = useState(null);
  const [progress, setProgress] = useState(0);
  const [opacity, setOpacity] = useState(1);

  useEffect(() => {
    if (videos.length > 0) {
      const changeVideo = () => {
        const randomIndex = Math.floor(Math.random() * videos.length);
        setCurrentVideo(videos[randomIndex]);
        setProgress(0);
        setOpacity(1);
      };

      const startTransition = () => {
        setOpacity(0);
        setTimeout(changeVideo, 1000);
      };

      changeVideo();
      const intervalId = setInterval(startTransition, 5000);

      const progressIntervalId = setInterval(() => {
        setProgress((prev) => (prev < 100 ? prev + 2 : 0));
      }, 100);

      return () => {
        clearInterval(intervalId);
        clearInterval(progressIntervalId);
      };
    }
  }, [videos]);

  return (
    <div className="banner">
      {currentVideo && (
        <>
          <img
            src={currentVideo.thumbnail}
            alt={currentVideo.title}
            className="banner__image"
            style={{ opacity: opacity }}
          />
          <div className="banner__info" style={{ opacity: opacity }}>
            <h2 className="banner__title">{currentVideo.title}</h2>
            <p className="banner__description">{currentVideo.description}</p>
            <a href={currentVideo.videoUrl} target="_blank" rel="noopener noreferrer" className="banner__button">
              Ver Video
            </a>
          </div>
          <div className="banner__progress-bar">
            <div className="banner__progress" style={{ width: `${progress}%` }}></div>
          </div>
        </>
      )}
    </div>
  );
};

export default Banner;
