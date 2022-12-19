import './index.scss';

import React from 'react';

import { AnimatePresence } from 'framer-motion';
import {
  Route,
  Routes,
  useLocation,
} from 'react-router-dom';

import About from './routes/About';
import Contact from './routes/Contact';
import Home from './routes/Home';
import Projects from './routes/Projects';

function App() {
  const location = useLocation();
  return (
    <>
      <AnimatePresence exitBeforeEnter>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </AnimatePresence>
    </>
  );
}

export default App;
