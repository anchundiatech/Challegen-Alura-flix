import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { VideoContext } from '../context/VideoContext';
import './NewVideo.css';

const NewVideo = () => {
  const { addVideo } = useContext(VideoContext);
  const navigate = useNavigate();

  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('');
  const [thumbnail, setThumbnail] = useState('');
  const [videoUrl, setVideoUrl] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newVideo = { title, category, thumbnail, videoUrl, description };
    addVideo(newVideo);
    navigate('/');
  };

  return (
    <div className="new-video"> {NewVideo}
      <h2>Nuevo Video</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Título:
          <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} required />
        </label>
        <label>
          Categoría:
          <select value={category} onChange={(e) => setCategory(e.target.value)} required>
            <option value="">Seleccionar...</option>
            <option value="Front end">Front end</option>
            <option value="Back End">Back End</option>
            <option value="Innovación y gestión">Innovación y gestión</option>
          </select>
        </label>
        <label>
          URL de la Miniatura:
          <input type="text" value={thumbnail} onChange={(e) => setThumbnail(e.target.value)} required />
        </label>
        <label>
          URL del Video:
          <input type="text" value={videoUrl} onChange={(e) => setVideoUrl(e.target.value)} required />
        </label>
        <label>
          Descripción:
          <textarea value={description} onChange={(e) => setDescription(e.target.value)} required />
        </label>
        <div className='new-video__actions'>
        <button className='btn-primary' type="submit">Guardar Video</button>
        <button className='btn-secondary' type="reset">Cancelar</button>
        </div>

      </form>
    </div>
  );
};

export default NewVideo;
