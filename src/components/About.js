import React from "react";

import { FaGithub, FaLinkedin } from "react-icons/fa";

import { Avatar, Grid, Link, Stack, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

import CodeWars from "./CodeWars";
import SkillsBar from "./SkillsBar";

const userProfileData = [
  {
    field: "Name:",
    fieldValue: "Michael Hunter",
    stackDirection: "row",
    alignPosition: "center",
    color: "text.secondary",
    variant: "subtitle1",
    valueVariant: "subtitle2",
  },
  {
    field: "Location:",
    fieldValue: "Bangkok, TH",
    stackDirection: "row",
    alignPosition: "center",
    color: "text.secondary",
    variant: "subtitle1",
    valueVariant: "subtitle2",
  },
  {
    field: "Nationality",
    fieldValue: "American",

    stackDirection: "row",
    alignPosition: "center",
    color: "text.secondary",
    variant: "subtitle1",
    valueVariant: "subtitle2",
  },
  {
    field: "Skills",
    fieldValue: "React, Express, Node.js, MongoDb, TypeScript",
    stackDirection: "row",
    alignPosition: "center",
    color: "text.secondary",
    variant: "subtitle1",
    valueVariant: "subtitle2",
  },
];
//<TH title="Thailand" style={{ width: 20, height: 20}} />
//<US title="united states" style={{ width: 20, height: 20}} />

const StyledGridContainer = styled(Grid)(({ theme }) => ({
  [theme.breakpoints.down("sm")]: {
    marginLeft: 0,
    width: "100%",
  },
}));

const hotLink = "https://avatars.githubusercontent.com/u/101326530?v=4";

const About = () => {
  return (
    <StyledGridContainer
      container
      direction="row"
      spacing={2}
      justifyContent="center"
    >
      <Grid
        sx={{
          backgroundColor: "#fff",
          borderRadius: 7,
          border: "1px solid #303030",
          padding: 1,
          marginTop: 3,
        }}
      >
        {/*profile */}
        <Stack direction="row" alignItems="center" spacing={1}>
          <Stack>
            <Avatar
              sx={{ height: "auto", width: { xs: 100, sm: 200 } }}
              alt="Michael Hunter"
              src={hotLink}
            />
          </Stack>

          <Stack>
            {userProfileData.map((val, i) => (
              <Stack key={i} direction="row" alignItems="center" spacing={1}>
                <Typography
                  sx={{ fontWeight: 700 }}
                  color="text.secondary"
                  variant="subtitle1"
                >
                  {val.field}
                </Typography>
                <Stack
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    gap: "5px",
                  }}
                >
                  <Typography color="text.secondary" variant="subtitle2">
                    {val.fieldValue}{" "}
                  </Typography>
                </Stack>
              </Stack>
            ))}
            <Stack direction="row" alignItems="center" spacing={1}>
              <Typography
                sx={{ fontWeight: 700 }}
                color="text.secondary"
                variant="subtitle1"
              >
                <FaGithub />
              </Typography>
              <Typography color="text.secondary" variant="subtitle2">
                <Link href="https://github.com/michaelhunter555">
                  github.com/michaelhunter555
                </Link>
              </Typography>
            </Stack>

            <Stack direction="row" alignItems="center" spacing={1}>
              <Typography
                sx={{ fontWeight: 700 }}
                color="text.secondary"
                variant="subtitle1"
              >
                <FaLinkedin />
              </Typography>
              <Typography color="text.secondary" variant="subtitle2">
                <Link href="https://linkedin.com/in/michael-h-hunter">
                  linkedin.com/in/michael-h-hunter
                </Link>
              </Typography>
            </Stack>
          </Stack>
        </Stack>
        <Stack sx={{ textAlign: "center", marginTop: 1 }}>
          <Typography
            variant="subtitle2"
            sx={{ fontWeight: 700 }}
            color="text.secondary"
          >
            My Go-to Stack
          </Typography>
        </Stack>
        <SkillsBar />
        <CodeWars />
      </Grid>
    </StyledGridContainer>
  );
};

export default About;
