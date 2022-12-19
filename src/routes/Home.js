import React from 'react';

import FeaturedBanner from '../components/FeaturedBanner';
import Footer from '../components/Footer';
import MyWork from '../components/MyWork';
import Navbar from '../components/Navbar';
import SliderImage from '../components/SliderImage';
import SmoothTransition from '../components/SmoothTransition';

const Home = () => {
  return (
    <div>
      <SmoothTransition>
        <Navbar />
        <SliderImage />
        <FeaturedBanner />
        <MyWork />
        <Footer />
      </SmoothTransition>
    </div>
  );
};

export default Home;
