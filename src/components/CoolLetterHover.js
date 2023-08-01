import "./CoolLetterHover.scss";

import React from "react";

const CoolLetterHover = ({ letterHover, arr, idx }) => {
  return (
    <span>
      {arr.map((char, i) => (
        <span key={char + i} className={`${letterHover} _${i + idx}`}>
          {char}
        </span>
      ))}
    </span>
  );
};

export default CoolLetterHover;
