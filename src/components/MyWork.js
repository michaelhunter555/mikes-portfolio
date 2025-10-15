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
  grid-template-columns: repeat(1, 1fr);
  grid-gap: 40px;
  padding-bottom: 5rem;

  @media screen and (max-width: 900px) {
    grid-template-columns: repeat(1, 1fr);
    justify-content: center;
    width: 90%;
  }

  @media screen and (max-width: 600px) {
    grid-template-columns: repeat(1, 1fr);
    justify-content: center;
    width: 90%;
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
            Below are successfully completed passion projects that I built
            myself, and continue to develop and improve. Repositories are
            private, but if you are an employer/recruiter and want to see them, please contact me!
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
              View my other work
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
              height={project.height}
              width={project.width}
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
