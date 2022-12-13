import './Navbar.scss';

import React, { useState } from 'react';

import {
  FaBars,
  FaTimes,
} from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [mobile, setMobile] = useState(false);
  const handleMobileClick = () => setMobile(!mobile);

  const [navScroll, setNavScroll] = useState(false);
  const handleNavHover = () => {
    if (window.scrollY >= 100) {
      setNavScroll(true);
    } else {
      setNavScroll(false);
    }
  };
  window.addEventListener("scroll", handleNavHover);

  return (
    <div className={!navScroll ? "header" : "header-scroll"}>
      <Link to="/">
        <h1 className="site-name">&lt;MichaelHunter /&gt;</h1>
      </Link>

      <ul className={!mobile ? "nav-menu" : "nav-menu active"}>
        <li className="link">
          <Link onClick={handleMobileClick} to="/">
            Home
          </Link>
        </li>
        <li className="link">
          <Link onClick={handleMobileClick} to="/about">
            About
          </Link>
        </li>
        <li className="link">
          <Link onClick={handleMobileClick} to="/projects">
            My Work
          </Link>
        </li>
        <li className="link">
          <Link onClick={handleMobileClick} to="/contact">
            Contact
          </Link>
        </li>
      </ul>
      <div className="hamburger-icon" onClick={handleMobileClick}>
        {mobile ? (
          <FaTimes size={20} style={{ color: "white" }} />
        ) : (
          <FaBars size={20} style={{ color: "white" }} />
        )}
      </div>
    </div>
  );
};

export default Navbar;
