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
  grid-gap: 2rem;
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
  color: #ffffff;
  font-weight: 600;
  letter-spacing: -0.02em;
`;

const MyWork = () => {
  return (
    <Box sx={{ padding: "4rem 1rem", background: "#000000" }}>
      <Stack direction="column" justifyContent="center" alignItems="center">
        <StyledTypography variant="h2" id="myWork">
          Projects
        </StyledTypography>
        <Paper
          elevation={0}
          sx={{
            maxWidth: "600px",
            padding: "2rem",
            borderRadius: "12px",
            marginBottom: "4rem",
            background: "rgba(255, 255, 255, 0.02)",
            border: "1px solid rgba(255, 255, 255, 0.1)",
          }}
        >
          <Typography variant="subtitle2" sx={{ color: "rgba(255, 255, 255, 0.7)", textAlign: "center", lineHeight: 1.6 }}>
            Below are successfully completed passion projects that I built
            myself, and continue to develop and improve. Repositories are
            private, but if you are an employer/recruiter and want to see them, please contact me!
          </Typography>
          <Stack
            sx={{ marginTop: "1.5rem" }}
            justifyContent="center"
            alignItems="center"
          >
            <Button
              size="small"
              component="a"
              href="https://github.com/michaelhunter555"
              startIcon={<FaGithub />}
              sx={{
                borderColor: "rgba(255, 255, 255, 0.3)",
                color: "#ffffff",
                textTransform: "none",
                "&:hover": {
                  borderColor: "rgba(255, 255, 255, 0.5)",
                  backgroundColor: "rgba(255, 255, 255, 0.05)",
                },
              }}
              variant="outlined"
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
              ios={project.ios}
              android={project.android}
            />
          );
        })}
      </StyledDivContainer>
    </Box>
  );
};

export default MyWork;
