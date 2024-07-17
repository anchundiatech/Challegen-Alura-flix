import React from 'react';
import VideoCard from './VideoCard';
import './CategoryList.css';

const CategoryList = ({ videos }) => {
  const categories = [...new Set(videos.map(video => video.category))];

  return (
    <div className="category-list-container">
      <div className="category-list">
        {categories.map(category => (
          <div key={category} className="category">
            <h3>{category}</h3>
            <div className="videos">
              {videos.filter(video => video.category === category).map(video => (
                <VideoCard key={video.title} video={video} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryList;
