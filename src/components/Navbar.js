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
            <ScrollLink
              to="about"
              smooth={true}
              duration={500}
              onClick={handleMobileClick}
            >
              Profile
            </ScrollLink>
          </li>
          <li className="link">
            <ScrollLink
              to="myWork"
              smooth={true}
              duration={500}
              onClick={handleMobileClick}
            >
              Projects
            </ScrollLink>
          </li>
          <li className="link">
            <ScrollLink
              to="education"
              smooth={true}
              duration={500}
              onClick={handleMobileClick}
            >
              Education
            </ScrollLink>
          </li>
          <li className="link">
            <ScrollLink
              onClick={handleMobileClick}
              to="contact"
              smooth={true}
              duration={500}
            >
              Contact
            </ScrollLink>
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
  a {
    text-decoration: none;
  }
  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 2rem;
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    position: fixed;
    width: 100%;
    z-index: 10;
    background-color: rgba(0, 0, 0, 0.8);
    backdrop-filter: blur(12px);
    transition: all 0.3s ease;
  }

  .header-scroll {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 2rem;
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    position: fixed;
    width: 100%;
    z-index: 10;
    background-color: rgba(0, 0, 0, 0.95);
    backdrop-filter: blur(12px);
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
  }

  .nav-menu {
    display: flex;
    gap: 0.5rem;
  }

  .nav-menu li {
    padding: 0 0.75rem;
    list-style: none;
    color: rgba(255, 255, 255, 0.7);
  }

  .nav-menu li a {
    font-size: 14px;
    font-weight: 500;
    color: rgba(255, 255, 255, 0.7);
    transition: color 0.2s ease;
  }

  .nav-menu li a:hover {
    color: #ffffff;
  }

  .link {
    position: relative;
    cursor: pointer;
  }
  .link:hover::before {
    content: "";
    position: absolute;
    top: 100%;
    width: 100%;
    left: 0;
    height: 2px;
    border-radius: 1px;
    background: #ffffff;
  }

  .hamburger-icon {
    display: none;
  }

  .site-name {
    position: relative;
    color: #ffffff;
    font-size: 18px;
    font-weight: 600;
    letter-spacing: -0.02em;
  }
  .site-name::before {
    content: "";
    position: absolute;
    top: 100%;
    width: 100%;
    left: 0;
    height: 2px;
    border-radius: 1px;
    background: #ffffff;
  }

  @media screen and (max-width: 1040px) {
    .header, .header-scroll {
      padding: 1rem;
    }

    .nav-menu {
      flex-direction: column;
      justify-content: center;
      align-items: center;
      width: 100%;
      height: 100vh;
      background: rgba(0, 0, 0, 0.98);
      position: absolute;
      top: 0;
      left: -100%;
      z-index: -3;
      transition: 0.3s ease-in;
      gap: 0;
    }

    .nav-menu.active {
      left: 0;
      z-index: 3;
    }

    .nav-menu li {
      padding: 1.5rem 0;
    }

    .nav-menu li a {
      font-size: 1.5rem;
      color: rgba(255, 255, 255, 0.9);
    }

    .hamburger-icon {
      display: initial;
      z-index: 3;
      cursor: pointer;
    }
  }
`;

export default Navbar;
