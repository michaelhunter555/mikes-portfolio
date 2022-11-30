import React from 'react'
import Navbar from '../components/Navbar';
import SliderImage from '../components/SliderImage';
import Footer from '../components/Footer';
import SmoothTransition from '../components/SmoothTransition';
import FeaturedBanner from '../components/FeaturedBanner';
import MyWork from '../components/MyWork';

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
  )
}

export default Home