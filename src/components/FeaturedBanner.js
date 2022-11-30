import './FeaturedBanner.scss';

import React from 'react';

import {
  FaHtml5,
  FaReact,
  FaSass,
} from 'react-icons/fa';
import {
  IoLogoCss3,
  IoLogoJavascript,
  IoLogoPython,
} from 'react-icons/io5';
import { SiFlask } from 'react-icons/si';
import { useMediaQuery } from 'react-responsive';

const mobilePhoneView = {
  size: "30px",
};
const desktopView = {
  size: "55px",
};

const FeaturedBanner = () => {
  const desktopOrMobile = useMediaQuery({ maxWidth: `1040px` });
  const renderIconSize = desktopOrMobile ? mobilePhoneView : desktopView;

  return (
    <div className="container-experience">
      <div className="border-test"></div>
      <h1>My Toolbox</h1>
      <div className="featured-experience__banner">
        <span className="javascript__banner">
          <IoLogoJavascript size={renderIconSize.size} />
        </span>
        <span className="react__banner">
          <FaReact size={renderIconSize.size} />
        </span>
        <span className="css__banner">
          <IoLogoCss3 size={renderIconSize.size} />
        </span>
        <span className="html__banner">
          <FaHtml5 size={renderIconSize.size} />
        </span>
        <span className="scss__banner">
          {" "}
          <FaSass size={renderIconSize.size} />
        </span>
        <span className="python__banner">
          <IoLogoPython size={renderIconSize.size} />
        </span>
        <div className="flask__banner">
          <SiFlask size={renderIconSize.size} />
        </div>
      </div>
    </div>
  );
};

export default FeaturedBanner;
