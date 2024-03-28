import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import Home from './pages/Home/Home';
import Programs from './pages/Programs/Programs';
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';
import Tile1 from './pages/Programs/Tile1/Tile1';
import Tile2 from './pages/Programs/Tile2/Tile2';
import Tile3 from './pages/Programs/Tile3/Tile3';
import Tile4 from './pages/Programs/Tile4/Tile4';
import './App.css';

const App = () => {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/programs" element={<Programs />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/programs/tile1" element={<Tile1 />} />
        <Route path="/programs/tile2" element={<Tile2 />} />
        <Route path="/programs/tile3" element={<Tile3 />} />
        <Route path="/programs/tile4" element={<Tile4 />} />
      </Routes>
    </Router>
  );
};

export default App;
