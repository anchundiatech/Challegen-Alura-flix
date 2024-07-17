import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import './VideoCard.css';
import { VideoContext } from '../context/VideoContext';

const VideoCard = ({ video }) => {
  const { deleteVideo } = useContext(VideoContext);
  const navigate = useNavigate();

  const handleDelete = () => {
    deleteVideo(video.title);
  };

  const handleEdit = () => {
    navigate(`/edit-video/${video.title}`);
  };

  return (
    <div className="video-card">
      <a href={video.videoUrl} target="_blank" rel="noopener noreferrer">
        <img src={video.thumbnail} alt={video.title} />
      </a>
      <div className="video-card__info">
        <h4>{video.title}</h4>
        <p>{video.description}</p>
      </div>
      <div className="video-card__actions">
        <button type="button" onClick={handleEdit}>
          <FontAwesomeIcon icon={faEdit} />
        </button>
        <button type="button" onClick={handleDelete}>
          <FontAwesomeIcon icon={faTrashAlt} />
        </button>
      </div>
    </div>
  );
};

export default VideoCard;
