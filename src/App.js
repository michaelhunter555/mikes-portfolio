import './index.scss';

import React from 'react';

import {
  Route,
  Routes,
  useLocation,
} from 'react-router-dom';

import ScrollToTop from './components/ScrollToTop';
import About from './routes/About';
import Contact from './routes/Contact';
import Home from './routes/Home';
import Projects from './routes/Projects';

function App() {
  const location = useLocation();
  return (
    <>
      <ScrollToTop />
      <animationConfiguration exitBeforeEnter>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </animationConfiguration>
    </>
  );
}

export default App;
