import './Content.scss';

import React from 'react';

import { Link } from 'react-router-dom';

import GlassyContent from './GlassyContent';

const Content = () => {
  let propsContent = <p>Learn More About Me!</p>;
  let propsWords = (
    <p>This is the end duh nuh nuh beautiful friend, the end...</p>
  );

  return (
    <div className="content-container">
      <div className="left-side">
        <h1>Who Am I?</h1>
        <p>Just your typical neighborhood super hero.</p>
        <Link to="/contact">
          <button className="btn">Contact</button>
        </Link>
      </div>

      <div className="right-side">
        <div className="glassy-container">
          <GlassyContent content={propsContent} words={propsWords} />
        </div>
      </div>
    </div>
  );
};

export default Content;
