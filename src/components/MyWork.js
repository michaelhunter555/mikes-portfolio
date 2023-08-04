import React from "react";

import { FaGithub } from "react-icons/fa6";

import { Box, Button, Paper, Stack, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

import CardComponent from "./Card";
import ProjectData from "./ProjectData";

const StyledDivContainer = styled("div")`
  max-width: 1200px;
  margin: auto;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 40px;
  padding-bottom: 5rem;

  @media screen and (max-width: 900px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media screen and (max-width: 600px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

const StyledTypography = styled(Typography)`
  text-align: center;
  padding: 4rem 0 2rem 0;
`;

const MyWork = () => {
  return (
    <Box sx={{ padding: "0 1rem" }}>
      <Stack direction="column" justifyContent="center" alignItems="center">
        <StyledTypography variant="h2" id="myWork">
          Projects
        </StyledTypography>
        <Paper
          elevation={0}
          sx={{
            maxWidth: "25rem",
            padding: "1rem",
            borderRadius: "15px",
            marginBottom: "5rem",
          }}
        >
          <Typography variant="subtitle2" color="text.secondary">
            Below is a collection of some on going and completed projects. If
            the Github repository link is not available, it means the repository
            is private. Happy to share upon request. Please note if repository
            is private, I will provide a site link and youtube video tour.You
            can view other projects im working on that aren't listed here on my
            github.
          </Typography>
          <Stack
            sx={{ marginTop: "1rem" }}
            justifyContent="center"
            alignItems="center"
          >
            <Button
              size="small"
              component="a"
              href="https://github.com/michaelhunter555"
              startIcon={<FaGithub />}
            >
              Visit my Github
            </Button>
          </Stack>
        </Paper>
      </Stack>
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
    </Box>
  );
};

export default MyWork;
