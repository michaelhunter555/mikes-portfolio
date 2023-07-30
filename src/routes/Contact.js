import React from "react";

import Footer from "../components/Footer";
import Form from "../components/Form";
import Navbar from "../components/Navbar";
import SmoothTransition from "../components/SmoothTransition";

const Contact = () => {
  return (
    <div>
      <SmoothTransition>
        <Navbar />

        <Form />
        <Footer />
      </SmoothTransition>
    </div>
  );
};

export default Contact;
