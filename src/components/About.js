import React from "react";

import { FaGithub, FaLinkedin } from "react-icons/fa";

import { Avatar, Chip, Grid, Link, Stack, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

import { supplementalProfileChips } from "../utils/supplementalChips";
import { userProfileData } from "../utils/userProfileData";
import SkillsBar from "./SkillsBar";

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
            My Stack
          </Typography>
        </Stack>
        <SkillsBar />
        <Stack
          direction="row"
          alignItems="center"
          spacing={1}
          sx={{ marginTop: "1rem" }}
        >
          <Typography variant="subtitle2" color="text.secondary">
            Additional:
          </Typography>
          {supplementalProfileChips.map((item, i) => (
            <Chip
              variant="outlined"
              key={i}
              icon={item.icon}
              label={item.name}
            />
          ))}
        </Stack>
      </Grid>
    </StyledGridContainer>
  );
};

export default About;
