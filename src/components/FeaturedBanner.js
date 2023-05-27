import "./FeaturedBanner.scss";

import React from "react";

import { FaNodeJs, FaReact } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { SiExpress, SiMongodb } from "react-icons/si";
import { useMediaQuery } from "react-responsive";

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
      <h1>MERN Stack Development</h1>
      <div className="featured-experience__banner">
        <span className="javascript__banner">
          <IoLogoJavascript size={renderIconSize.size} />
        </span>
        <span className="react__banner">
          <FaReact size={renderIconSize.size} />
        </span>
        <span className="node__banner">
          <FaNodeJs size={renderIconSize.size} />
        </span>
        <div className="express__banner">
          <SiExpress size={renderIconSize.size} />
        </div>
        <span className="mongodb__banner">
          <SiMongodb size={renderIconSize.size} />
        </span>
      </div>
    </div>
  );
};

export default FeaturedBanner;
