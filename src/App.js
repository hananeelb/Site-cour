import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Index from './Composant/Index';
import Home from './Composant/Home';
import Apprende from './Composant/Apprendre';
import Menu from './Composant/Menu';
import CoursContent from './Composant/CoursContent';

function App() {
  return (
    
      <Routes>
        <Route path="/" element={<Home />} />   
        <Route path="/home" element={<Home />} />    {/* Page Home */}
        <Route path="/apprendre" element={<Apprende />} />
        <Route path="/courscontent" element={<CoursContent />} />
      </Routes>
  );
}

export default App;
