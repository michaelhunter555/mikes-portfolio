import './SliderImage.scss';

import React, {
  useEffect,
  useState,
} from 'react';

import {
  FaGithub,
  FaHtml5,
  FaReact,
  FaSass,
} from 'react-icons/fa';
import { IoLogoJavascript } from 'react-icons/io5';
import { Link } from 'react-router-dom';

import Mike from '../assets/michaelHunter.png';
import CoolLetterHover from '../components/CoolLetterHover';

const SliderImage = () => {
  const [letterHover, setLetterHover] = useState("text-animate");
  const mySkills = ["R", "e", "a", "c", "t", ".", "J", "S", " ", "D", "e", "v"];

  useEffect(() => {
    let timeOut = setTimeout(() => {
      setLetterHover("text-animate-hover");
    }, 4000);
    return () => clearTimeout(timeOut);
  }, []);

  return (
    <div className="home-slide">
      <div className="overlay">
        <img className="mike-image" src={Mike} alt="mike" />
      </div>
      <div className="content">
        {/* Center Icons in direct center, right now it 's not so straight... :( */}
        <p>I'm Mike and I built this with:</p>
        <div className="skills-background shine">
          <span className="javascript-icon" alt="javaScript">
            <IoLogoJavascript />
          </span>
          <span className="react-icon">
            <FaReact />
          </span>
          <span className="html-icon">
            <FaHtml5 />
          </span>
          <span className="scss-icon">
            <FaSass />
          </span>
        </div>
        <CoolLetterHover
          letterHover={`${letterHover}`}
          arr={mySkills}
          idx={1}
        />
        <p
          style={{
            backgroundColor: "rgb(202 240 255)",
            color: "black",
            fontWeight: "bold",
            borderRadius: "3px",
          }}
        >
          Michael Hezekiah Hunter
        </p>
        <div>
          <Link to="/projects" className="btn">
            Projects
          </Link>
          <Link to="/contact" className="btn btncontact">
            Contact
          </Link>
        </div>
        <div>
          <a
            href="https://github.com/idioticbrilliance/mikes-portfolio"
            rel="noreferrer"
            target="_blank"
          >
            <p
              style={{
                fontSize: 13,
                flex: 1,
                flexDirection: "row",
                padding: "1rem",
              }}
            >
              See the code for this portfolio.
              <FaGithub alt="view this code" />
            </p>
          </a>
        </div>
      </div>
    </div>
  );
};

export default SliderImage;
