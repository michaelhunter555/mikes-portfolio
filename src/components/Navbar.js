import React, { useState } from "react";

import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";

import { styled } from "@mui/material";

const Navbar = () => {
  const [mobile, setMobile] = useState(false);
  const [navScroll, setNavScroll] = useState(false);

  const handleMobileClick = () => setMobile(!mobile);
  const handleNavHover = () => {
    if (window.scrollY >= 100) {
      setNavScroll(true);
    } else {
      setNavScroll(false);
    }
  };
  window.addEventListener("scroll", handleNavHover);

  return (
    <StyledNavbar>
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
            <ScrollLink to="about" smooth={true} duration={500}>
              About
            </ScrollLink>
          </li>
          <li className="link">
            <ScrollLink to="myWork" smooth={true} duration={500}>
              MyWork
            </ScrollLink>
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
    </StyledNavbar>
  );
};

const StyledNavbar = styled("div")`
  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem;
    border-bottom: 1px solid rgb(0, 0, 0);
    position: fixed;
    width: 100%;
    z-index: 10;
    background-color: rgb(0, 0, 0);
  }

  .header-scroll {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem;
    border-bottom: 1px solid rgb(0, 0, 0);
    position: fixed;
    width: 100%;
    z-index: 10;
    background-color: rgba(0, 0, 0, 0.75);
    box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.5);
  }

  .nav-menu {
    display: flex;
  }

  .nav-menu li {
    padding: 0 1rem;
    list-style: none;
    color: white;
  }

  .nav-menu li a {
    font-size: 15px;
    font-weight: 600;
    color: white;
  }

  .link {
    position: relative;
  }
  .link:hover::before {
    content: "";
    position: absolute;
    top: 100%;
    width: 70%;
    transform: translate(-50%, -50%);
    left: 50%;
    right: 50%;
    height: 4px;
    border-radius: 2px;
    background: linear-gradient(111.3deg, #9c27b0 9.6%, #00bcd4 93.6%);
  }

  .hamburger-icon {
    display: none;
  }

  .site-name {
    position: relative;
    color: white;
  }
  .site-name::before {
    content: "";
    position: absolute;
    top: 100%;
    width: 100%;
    left: 0;
    height: 4px;
    border-radius: 3px;
    background: linear-gradient(111.3deg, #9c27b0, #00bcd4 93.6%);
    color: white;
  }

  @media screen and (max-width: 1040px) {
    .nav-menu {
      flex-direction: column;
      justify-content: center;
      align-items: center;
      width: 100%;
      height: 100vh;
      background: rgba(0, 0, 0, 0.95);
      position: absolute;
      top: 0;
      left: -100%;
      z-index: -3;
      transition: 0.7s ease-in;
    }

    .nav-menu.active {
      left: 0;
      z-index: 3;
    }

    .nav-menu li {
      padding: 1rem 0;
    }

    .nav-menu li a {
      font-size: 2rem;
    }

    .hamburger-icon {
      display: initial;
      z-index: 3;
      cursor: pointer;
    }
  }
`;

export default Navbar;
