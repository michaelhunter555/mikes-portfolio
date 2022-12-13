import './Content.scss';

import React from 'react';

import { Link } from 'react-router-dom';

import GlassyContent from './GlassyContent';

const Content = () => {
  let propsContent = <p>Learn More About Me!</p>;
  let propsWords = (
    <p>
      If you would like to learn more about me, please feel free to contact me.
    </p>
  );

  return (
    <div className="content-container">
      <div className="left-side">
        <h1>Who Am I?</h1>
        <p>Michael, and I find purpose in coding, relationships and family.</p>
        <Link to="/contact">
          <button className="btn">Contact</button>
        </Link>
      </div>

      <div className="right-side">
        <GlassyContent content={propsContent} words={propsWords} />
      </div>
    </div>
  );
};

export default Content;
