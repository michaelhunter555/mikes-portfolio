import "./Card.scss";

import React from "react";

import { FaYoutube } from "react-icons/fa";

const Card = (props) => {
  return (
    <div className="project-card">
      <img src={props.imgSrc} alt="shopify" />
      <h2 className="p-title">{props.title}</h2>
      <div className="p-details">
        <p>{props.text}</p>
      </div>
      <div className={props.view ? "p-btns" : "btn btn-single"}>
        {props.view && (
          <a href={props.view} className="btn" rel="noreferrer" target="_blank">
            Demo
          </a>
        )}
        {props.youtube && (
          <a
            href={props.youtube}
            style={{
              backgroundColor: "red",
              borderRadius: "6px",
              padding: "6px",
            }}
            rel="noreferrer"
            target="_blank"
          >
            Youtube Tour
            <FaYoutube />
          </a>
        )}
        {!props.view && !props.youtube && (
          <a
            href={props.source}
            className="btn-single"
            rel="noreferrer"
            target="_blank"
          >
            View Github
          </a>
        )}
        {props.view && (
          <a
            href={props.source}
            className="btn"
            rel="noreferrer"
            target="_blank"
          >
            Github
          </a>
        )}
      </div>
    </div>
  );
};

export default Card;
