import React from 'react';
import './index.scss';
import Home from './routes/Home';
import Contact from './routes/Contact';
import About from './routes/About';
import Projects from './routes/Projects';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';


function App() {
  const location = useLocation();
  return (
    <div>
      <AnimatePresence exitBeforeEnter>
      <Routes location={location}
      key={location.pathname}>
        <Route path="/" element={<Home />}/>
        <Route path="/projects" element={<Projects />}/>
        <Route path="/about" element={<About />}/>
        <Route path="/contact" element={<Contact />}/>
      </Routes>
      </AnimatePresence>
    </div>
  );
}

export default App;
