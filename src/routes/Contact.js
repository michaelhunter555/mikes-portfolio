import React from "react";

import DefHeroImg from "../components/DefHeroImg";
import Footer from "../components/Footer";
import Form from "../components/Form";
import Navbar from "../components/Navbar";
import SmoothTransition from "../components/SmoothTransition";

const Contact = () => {
  return (
    <div>
      <SmoothTransition>
        <Navbar />
        <DefHeroImg
          header="Contact Me"
          text="Easy to get along with, I care about your happiness, and I hope you enjoy my company."
        />
        <Form />
        <Footer />
      </SmoothTransition>
    </div>
  );
};

export default Contact;
