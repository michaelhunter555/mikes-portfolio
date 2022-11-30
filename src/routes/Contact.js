import React from 'react'
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import DefHeroImg from '../components/DefHeroImg';
import Form from '../components/Form';
import SmoothTransition from '../components/SmoothTransition';

const Contact = () => {
  return (
    <div>
      <SmoothTransition>
      <Navbar />
      <DefHeroImg header="Contact Me" text="stimulating discussions or classic banter?"/>
      <Form />
      <Footer />
      </SmoothTransition>
    </div>
  )
}

export default Contact