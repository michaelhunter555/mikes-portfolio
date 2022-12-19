import React from 'react';

import DefHeroImg from '../components/DefHeroImg';
import Footer from '../components/Footer';
import MyWork from '../components/MyWork';
import Navbar from '../components/Navbar';
import SmoothTransition from '../components/SmoothTransition';

const Projects = () => {
  return (
    <div>
      <SmoothTransition>
        <Navbar />
        <DefHeroImg
          header="My Projects"
          text="A display of my skills & understanding."
        />
        <MyWork />
        <Footer />
      </SmoothTransition>
    </div>
  );
};

export default Projects;
