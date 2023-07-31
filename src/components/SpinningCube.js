import React from "react";

import { styled } from "@mui/material/styles";

/**
 *
 * @note - This specific file was adapted from https://codepen.io/ANune/pen/YRagBy spinning cube. Please give this person all the thanks if you use the code. -mike h.
 */

const SpinningCube = () => {
  return (
    <SpinngCubeStyles>
      <div class="cube-spinner">
        <div class="face face1">1</div>
        <div class="face face2">2</div>
        <div class="face face3">3</div>
        <div class="face face4">4</div>
        <div class="face face5">5</div>
        <div class="face face6">6</div>
      </div>
    </SpinngCubeStyles>
  );
};

const SpinngCubeStyles = styled("div")`
.cube-spinner {
    -webkit-transform-style: preserve-3d;
      -moz-transform-style: preserve-3d;
      -ms-transform-style: preserve-3d;
      transform-style: preserve-3d;
    
    -webkit-animation: spinCube 12s ease-in-out infinite;
      -o-animation: spinCube 12s ease-in-out infinite;
      animation: spinCube 12s ease-in-out infinite;
    width: 120px;
    height: 120px;
  }
    
  .cube-spinner .face {
      position: absolute;
      width: 120px;
      height: 120px;
      border: 1px solid #ccc;
      background: rgba(255,255,255,0.8);
      box-shadow: inset 0 0 20px rgba(0,0,0,0.2);
      text-align: center;
      line-height: 120px;
      font-size: 100px;
    }
  
  
  
  .cube-spinner .face1 { -webkit-transform: translateZ(60px);                                }
   .cube-spinner .face2 { -webkit-transform: rotateY(90deg) translateZ(60px);                 }
   .cube-spinner .face3 { -webkit-transform: rotateY(90deg) rotateX(90deg) translateZ(60px);  }
   .cube-spinner .face4 { -webkit-transform: rotateY(180deg) rotateZ(90deg) translateZ(60px); }
   .cube-spinner .face5 { -webkit-transform: rotateY(-90deg) rotateZ(90deg) translateZ(60px); }
   .cube-spinner .face6 { -webkit-transform: rotateX(-90deg) translateZ(60px);                }
  
  
  @-webkit-keyframes spinCube {
      from  { -webkit-transform: rotateX(0deg) rotateY(0deg) rotateZ(0deg); }
       16%      { -webkit-transform: rotateY(-90deg);                           }
      33%      { -webkit-transform: rotateY(-90deg) rotateZ(90deg);            }
      50%      { -webkit-transform: rotateY(-180deg) rotateZ(90deg);           }
      66%      { -webkit-transform: rotateY(-270deg) rotateX(90deg);           }
      83%      { -webkit-transform: rotateX(90deg);                            }
    }@keyframes spincube {
      from,to {
        -moz-transform: rotateX(0deg) rotateY(0deg) rotateZ(0deg);
        -ms-transform: rotateX(0deg) rotateY(0deg) rotateZ(0deg);
        transform: rotateX(0deg) rotateY(0deg) rotateZ(0deg);
      }
      16% {
        -moz-transform: rotateY(-90deg);
        -ms-transform: rotateY(-90deg);
        transform: rotateY(-90deg);
      }
      33% {
        -moz-transform: rotateY(-90deg) rotateZ(90deg);
        -ms-transform: rotateY(-90deg) rotateZ(90deg);
        transform: rotateY(-90deg) rotateZ(90deg);
      }
      50% {
        -moz-transform: rotateY(-180deg) rotateZ(90deg);
        -ms-transform: rotateY(-180deg) rotateZ(90deg);
        transform: rotateY(-180deg) rotateZ(90deg);
      }
      66% {
        -moz-transform: rotateY(-270deg) rotateX(90deg);
        -ms-transform: rotateY(-270deg) rotateX(90deg);
        transform: rotateY(-270deg) rotateX(90deg);
      }
      83% {
        -moz-transform: rotateX(90deg);
        -ms-transform: rotateX(90deg);
        transform: rotateX(90deg);
      }`;

export default SpinningCube;
