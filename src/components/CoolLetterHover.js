import React from "react";

import { styled } from "@mui/material/styles";

const CoolLetterHover = ({ letterHover, arr, idx, style }) => {
  return (
    <span>
      {arr.map((char, i) => {
        const StyledComponent =
          letterHover === "text-animate-hover" ? TextAnimateHover : TextAnimate;
        return (
          <StyledComponent
            key={char + i}
            style={style}
            className={`${letterHover} _${i + idx}`}
          >
            {char}
          </StyledComponent>
        );
      })}
    </span>
  );
};

const TextAnimate = styled("span")`
  display: inline-block;
  opacity: 0;
  animation: bounceIn 0.3s;
  animation-fill-mode: forwards;
  min-width: 10px;
  color: #000000;
  font-size: 2.5rem;
  font-weight: 600;
  padding: 0.6rem 0 1rem;
  transition: fade;

  ${(props) =>
    Array.from(
      { length: 35 },
      (_, i) => `
      &._${i + 1} {
        animation-delay: ${(i + 1) / 10}s;
      }
    `
    )}
`;

const TextAnimateHover = styled("div")`
  min-width: 10px;
  display: inline-block;
  animation-fill-mode: both;
  color: #000000;
  font-size: 2.5rem;
  font-weight: 600;
  padding: 0.6rem 0 1rem;

  &:hover {
    animation: rubberBand 0.3s;
    color: rgb(2, 18, 74);
  }
`;

export default CoolLetterHover;
