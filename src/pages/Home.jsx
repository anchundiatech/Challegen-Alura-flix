// Home.js
import React, { useContext } from 'react';
import Banner from '../components/Banner/Banner';
import CategoryList from '../components/CategoryList';
import { VideoContext } from '../context/VideoContext';

const Home = () => {
  const { videos } = useContext(VideoContext);

  return (
    <div>
      <Banner videos={videos} />
      <CategoryList videos={videos} />
    </div>
  );
};

export default Home;
