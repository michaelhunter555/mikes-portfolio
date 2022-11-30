import './TabContainer.scss';

import React, { useState } from 'react';

import mikeImg from '../assets/michaelHunter.png';

const TabContainer = (props) => {
  const [tab, setTab] = useState(1);

  const changeTabHandler = (index) => {
    setTab(index);
  };

  return (
    <div className="app">
      <div className="mike-img">
        <img src={mikeImg} alt="mike" />
      </div>
      <div className="box">
        <div className="tabs">
          <div
            onClick={() => changeTabHandler(1)}
            className={tab === 1 ? "tab active-tab" : "tab"}
          >
            About Me
          </div>
          <div
            onClick={() => changeTabHandler(2)}
            className={tab === 2 ? "tab active-tab" : "tab"}
          >
            Educatation
          </div>
          <div
            onClick={() => changeTabHandler(3)}
            className={tab === 3 ? "tab active-tab" : "tab"}
          >
            Philos
          </div>
          <div
            onClick={() => changeTabHandler(4)}
            className={tab === 4 ? "tab active-tab" : "tab"}
          >
            Work History
          </div>
        </div>

        {/*contents */}
        <div className="content-tabs">
          <div
            className={
              tab === 1
                ? "content-tab-inner active-content"
                : "content-tab-inner"
            }
          >
            <h2> About</h2>
            <p>
              I was born in Queens, Ny and raised in Pennsylvania. I first got
              into tech when I 23/24. At the time, I had taken part in a course
              to learn high-ticket Dropshipping. Since then and to this day, I
              have gone on to create and manage various e-commerce websites and
              blogs
            </p>
          </div>

          <div
            className={
              tab === 2
                ? "content-tab-inner active-content"
                : "content-tab-inner"
            }
          >
            <h2>School</h2>
            <p>
              <b>formal:</b>
            </p>
            <p>
              Bachelors: Temple University - Philadelphia, PA -2012
              Communications & Advertising
              <br />
            </p>
            <p>MBA: University of Liverpool - Liverpool, UK - 2020</p>
            <br />
            <br />
            <p>
              FreeCodeCamp: Data Structures & Algorithms
              <br />
              CodeCademy: Javascript, Advanced JavaScript, React.js
              <br />
              JavaScript: Understanding the weird parts
              <br />
              React Hooks, Router & Redux by Maximilian Schwarzmuller
              <br />
              React Native - ios & Android App development
              <br />
              React, Node.js, Express & MongoDB
            </p>
          </div>

          <div
            className={
              tab === 3
                ? "content-tab-inner active-content"
                : "content-tab-inner"
            }
          >
            <h2> An Idealist at heart</h2>
            <p>
              While I believe absoluteness allows us to move forward, I don't
              belive anything in life is truly set in stone.
            </p>
          </div>

          <div
            className={
              tab === 4
                ? "content-tab-inner active-content"
                : "content-tab-inner"
            }
          >
            <h2>Employed</h2>
            <p>2012 - 2015: English Teacher - Highschool</p>
            <p>2015 - 2021: Owner/Manager - ProFitnessDeals.com</p>
            <p>
              2018 - present: Stamford University Lecturer - Google & Facebook
              consultant.
            </p>
            <p>2020 - present: MyFireDirect - Owner/Manager</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TabContainer;
