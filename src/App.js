import React from 'react';
import Home from './pages/home';
import './styles/style.css';
import TopPics from './pages/top-picks';

import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="top-picks" element={<TopPics />} />
    </Routes>
  );
}

export default App;
