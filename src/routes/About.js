import React from 'react';

import Content from '../components/Content';
import DefHeroImg from '../components/DefHeroImg';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import SmoothTransition from '../components/SmoothTransition';
import TabContainer from '../components/TabContainer';

const About = () => {
  return (
    <div>
      <SmoothTransition>
        <Navbar />
        <DefHeroImg
          header="About Me"
          text="My Story | Education | Philosophy | Experience"
        />
        <TabContainer />
        <Content />
        <Footer />
      </SmoothTransition>
    </div>
  );
};

export default About;
