import React from "react";

import { FaGithub, FaLinkedin } from "react-icons/fa";

import { Avatar, Chip, Grid, Link, Stack, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

import ProfilePhoto from "../assets/profilePhoto.png";
import { supplementalProfileChips } from "../utils/supplementalChips";
import { userProfileData } from "../utils/userProfileData";
import CodeWars from "./CodeWars";
import SkillsBar from "./SkillsBar";

const StyledGridContainer = styled(Grid)(({ theme }) => ({
  [theme.breakpoints.down("sm")]: {
    marginLeft: 0,
    width: "100%",
    padding: "0 1rem",
  },
}));

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
          backgroundColor: "rgba(255, 255, 255, 0.02)",
          borderRadius: "12px",
          border: "1px solid rgba(255, 255, 255, 0.1)",
          padding: 3,
          marginTop: 3,
          backdropFilter: "blur(10px)",
        }}
      >
        {/*profile */}
        <Stack direction="row" alignItems="center" spacing={1}>
          <Stack>
            <Avatar
              sx={{ height: "auto", width: { xs: 100, sm: 200 } }}
              alt="Michael Hunter"
              src={ProfilePhoto}
            />
          </Stack>

          <Stack>
            {userProfileData.map((val, i) => (
              <Stack key={i} direction="row" alignItems="center" spacing={1}>
                <Typography
                  sx={{ fontWeight: 600, color: "#ffffff" }}
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
                  <Typography sx={{ color: "rgba(255, 255, 255, 0.7)" }} variant="subtitle2">
                    {val.fieldValue}{" "}
                  </Typography>
                </Stack>
              </Stack>
            ))}
            <Stack direction="row" alignItems="center" spacing={1}>
              <Typography
                sx={{ fontWeight: 600, color: "#ffffff" }}
                variant="subtitle1"
              >
                <FaGithub />
              </Typography>
              <Typography sx={{ color: "rgba(255, 255, 255, 0.7)" }} variant="subtitle2">
                <Link href="https://github.com/michaelhunter555" sx={{ color: "rgba(255, 255, 255, 0.7)", "&:hover": { color: "#ffffff" } }}>
                  github.com/michaelhunter555
                </Link>
              </Typography>
            </Stack>

            <Stack direction="row" alignItems="center" spacing={1}>
              <Typography
                sx={{ fontWeight: 600, color: "#ffffff" }}
                variant="subtitle1"
              >
                <FaLinkedin />
              </Typography>
              <Typography sx={{ color: "rgba(255, 255, 255, 0.7)" }} variant="subtitle2">
                <Link href="https://linkedin.com/in/michael-h-hunter" sx={{ color: "rgba(255, 255, 255, 0.7)", "&:hover": { color: "#ffffff" } }}>
                  linkedin.com/in/michael-h-hunter
                </Link>
              </Typography>
            </Stack>
          </Stack>
        </Stack>

        <Stack sx={{ textAlign: "center", marginTop: 2 }}>
          <Typography
            variant="subtitle2"
            sx={{ fontWeight: 600, color: "#ffffff" }}
          >
            Knowledgeability & Core Competencies:
          </Typography>
        </Stack>
        <SkillsBar />
        <Stack
          direction="row"
          alignItems="center"
          spacing={2}
          sx={{ margin: "1rem ", flexWrap: "wrap", gap: "3px" }}
        >
          <Typography variant="subtitle2" sx={{ color: "#ffffff", fontWeight: 600 }}>
            Additional:
          </Typography>
          {supplementalProfileChips.map((item, i) => (
            <Chip
              variant="outlined"
              key={i}
              icon={item.icon}
              label={item.name}
              sx={{
                borderColor: "rgba(255, 255, 255, 0.2)",
                color: "rgba(255, 255, 255, 0.8)",
                "&:hover": {
                  borderColor: "rgba(255, 255, 255, 0.4)",
                  backgroundColor: "rgba(255, 255, 255, 0.05)",
                },
              }}
            />
          ))}
        </Stack>
        <CodeWars />
      </Grid>
    </StyledGridContainer>
  );
};

export default About;
