import React, { createContext, useState } from 'react';

export const VideoContext = createContext();

export const VideoProvider = ({ children }) => {
  const [videos, setVideos] = useState([
   
    {
      title: 'Aprendiendo a utilizar Figma',
      category: 'Front end',
      thumbnail: 'https://i.ytimg.com/vi/UuAX5azcvDQ/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLBv35TL2JpK7AdWOdaO3y-W5LdKwA',
      videoUrl: 'https://www.youtube.com/watch?v=9bFHsd3o1w0',
      description: 'Aprendiendo a utilizar Figma',
    },
    {
      title: 'Equipo Front End',
      category: 'Front end',
      thumbnail: 'https://i.ytimg.com/vi/rpvrLaBQwgg/maxresdefault.jpg',
      videoUrl: 'https://www.youtube.com/watch?v=9bFHsd3o1w0',
      description: 'Equipo Front End',
    },
    {
      title: 'Simplificando tu código en Java: Conoce los enum #AluraMás',
      category: 'Back End',
      thumbnail: 'https://i.ytimg.com/vi/EoPvlE85XAQ/hqdefault.jpg',
      videoUrl: 'https://youtu.be/EoPvlE85XAQ?si=7gLgHTav4kcarbiw',
      description: 'Spring Framework. ¿Qué es ? #AluraMás',
    },
    {
      title: '¿Qué es SQL y NoSQL?',
      category: 'Back End',
      thumbnail: 'https://i.ytimg.com/vi/cLLKVd5CNLc/maxresdefault.jpg',
      videoUrl: 'https://youtu.be/cLLKVd5CNLc?si=x9V7ZrkBQFSJqFhW',
      description: '¿Qué es SQL y NoSQL?',
    },
    {
      title: 'Spring Framework. ¿Qué es ? #AluraMás',
      category: 'Back End',
      thumbnail: 'https://i.ytimg.com/vi/t-iqt1b2qqk/maxresdefault.jpg',
      videoUrl: 'https://youtu.be/t-iqt1b2qqk?si=e5XKRng-25OOoGT9',
      description: 'Spring Framework. ¿Qué es ? #AluraMás',
    },

    {
      title: '¿Que son las soft skills?',
      category: 'innovación y gestión',
      thumbnail: 'https://i.ytimg.com/vi/vhwspfvI52k/maxresdefault.jpg',
      videoUrl: 'https://www.youtube.com/watch?v=wWxHIKL_nwA',
      description: 'que son las soft skills?',
    },
    {
      title: 'Las 7 Soft Skills mas deseadas',
      category: 'innovación y gestión',
      thumbnail: 'https://i.ytimg.com/vi/YhR7Zp8NUzE/maxresdefault.jpg',
      videoUrl: 'https://youtu.be/YhR7Zp8NUzE?si=uCfy4ywhe_ymcMUr',
      description: 'que son las soft skills?',
    },
    {
      title: ' ¿Metodologías ágiles ?',
      category: 'innovación y gestión',
      thumbnail: 'https://i.ytimg.com/vi/6N3OkLCfK-0/maxresdefault.jpg',
      videoUrl: 'https://youtu.be/6N3OkLCfK-0?si=MNGvFOFX-VYegwjX',
      description: '¿Metodologías ágiles ?',
    }


  ]);

  const addVideo = (video) => {
    setVideos([...videos, video]);
  };

  const deleteVideo = (videoTitle) => {
    const updatedVideos = videos.filter(video => video.title !== videoTitle);
    setVideos(updatedVideos);
  };

  const editVideo = (editedVideo) => {
    const updatedVideos = videos.map(video =>
      video.title === editedVideo.title ? editedVideo : video
    );
    setVideos(updatedVideos);
  };

  return (
    <VideoContext.Provider value={{ videos, addVideo, deleteVideo, editVideo }}>
      {children}
    </VideoContext.Provider>
  );
};
