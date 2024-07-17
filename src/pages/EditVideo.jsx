import React, { useState, useContext } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { VideoContext } from '../context/VideoContext';
import './EditVideo.css'; // Importa el archivo CSS

const EditVideo = () => {
  const { videos, editVideo } = useContext(VideoContext);
  const { title } = useParams();
  const navigate = useNavigate();

  const videoToEdit = videos.find(video => video.title === title);

  const [newTitle, setNewTitle] = useState(videoToEdit.title);
  const [category, setCategory] = useState(videoToEdit.category);
  const [thumbnail, setThumbnail] = useState(videoToEdit.thumbnail);
  const [videoUrl, setVideoUrl] = useState(videoToEdit.videoUrl);
  const [description, setDescription] = useState(videoToEdit.description);

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedVideo = { title: newTitle, category, thumbnail, videoUrl, description };
    editVideo(updatedVideo);
    navigate('/');
  };

  return (
    <div className="edit-video"> {/* Añadir clase edit-video */}
      <h2>Editar Video</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Título:
          <input type="text" value={newTitle} onChange={(e) => setNewTitle(e.target.value)} required />
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
        <button type="submit">Guardar Cambios</button>
      </form>
    </div>
  );
};

export default EditVideo;
