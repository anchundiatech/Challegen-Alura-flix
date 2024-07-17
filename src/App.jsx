import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import NewVideo from './pages/NewVideo';
import EditVideo from './pages/EditVideo'; // Importa el componente EditVideo
import Header from './components/Cabecera/Header';

const App = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/new-video" element={<NewVideo />} />
        <Route path="/edit-video/:title" element={<EditVideo />} /> {/* Añade la ruta para editar videos */}
      </Routes>
    </div>
  );
};

export default App;
