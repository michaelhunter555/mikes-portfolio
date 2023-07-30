import React from "react";

import { Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

import CardComponent from "./Card";
import ProjectData from "./ProjectData";

const StyledDivContainer = styled("div")`
  max-width: 1140px;
  margin: auto;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 40px;
  padding-bottom: 5rem;

  @media screen and (max-width: 600px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

const StyledTypogrpahy = styled(Typography)`
  text-align: center;
  padding: 4rem 0 2rem 0;
`;

const MyWork = () => {
  return (
    <>
      <StyledTypogrpahy variant="h2" id="myWork">
        Projects
      </StyledTypogrpahy>
      <StyledDivContainer>
        {ProjectData.map((project, i) => {
          return (
            <CardComponent
              key={i}
              imgSrc={project.imgSrc}
              title={project.title}
              text={project.text}
              view={project.view}
              youtube={project.youtube}
              source={project.source}
              stack={project.stack}
            />
          );
        })}
      </StyledDivContainer>
    </>
  );
};

export default MyWork;
