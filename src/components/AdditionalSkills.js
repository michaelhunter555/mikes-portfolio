import React from "react";

import { Link } from "react-router-dom";

import {
  Button,
  Chip,
  Divider,
  Grid,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import { styled } from "@mui/material/styles";

import { OtherChips, socialIcons } from "../utils/supplementalChips";

const StyledStack = styled(Stack)(({ theme }) => ({
  [theme.breakpoints.down("sm")]: {
    flexWrap: "wrap",
    flexDirection: "column",
    alignItems: "flex-end",
    gap: "5px",
  },
}));

const StyledPaper = styled(Paper)(({ theme }) => ({
  borderRadius: "15px",
  padding: "2rem",
  display: "flex",
  alignItems: "center",
  flexDirection: "column",
  maxWidth: "75%",
  [theme.breakpoints.down("sm")]: {
    maxWidth: "90%",
    marginTop: "1.5rem",
  },
}));

const AdditionalSkills = () => {
  return (
    <Grid
      container
      direction="row"
      justifyContent="center"
      sx={{ margin: "5rem auto" }}
    >
      <Grid
        item
        xs={12}
        sm={6}
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <Typography variant="h2" sx={{ textAlign: "center" }}>
          Worth Mentioning
        </Typography>
        <Stack
          direction="column"
          alignItems="center"
          spacing={1}
          justifyContent="center"
        >
          <Stack direction="row" spacing={1}>
            {OtherChips.map((chip, i) => (
              <Chip key={i} icon={chip.icon} label={chip.name} />
            ))}
          </Stack>
          <Stack
            justifyContent="center"
            sx={{ margin: "0 auto", maxWidth: "80%" }}
          >
            <Typography variant="subtitle2">
              My past experience with blogging, SEO, Shopify and google ads
              acted as a catalyst in pushing me towards the path of coding. I
              feel it's necessary to mention this because it's through my years
              of experience with these platforms that I realized shortcomings
              that coding could solve.
            </Typography>
          </Stack>
        </Stack>
      </Grid>

      <Grid
        item
        xs={12}
        sm={6}
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <StyledPaper
          elevation={0}
          sx={{
            borderRadius: "15px",
            padding: "2rem",
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
            maxWidth: "75%",
          }}
        >
          <Typography variant="h6">Contact Me</Typography>

          <Typography variant="subtitle2" color="text.secondary">
            If you have any questions or would like to learn more about my
            skills, work history, recommendation, etc. please don't hesitate to
            contact me.
          </Typography>

          <Divider flexItem sx={{ marginBottom: "0.5rem" }} />
          <Stack direction="row">
            <Stack justifyContent="center" alignItems="center">
              <Typography variant="subtitle2" color="text.secondary">
                Let's Connect
              </Typography>
              <Button
                size="small"
                component={Link}
                to="/contact"
                variant="outlined"
              >
                Contact
              </Button>
            </Stack>
            <Divider
              orientation="vertical"
              flexItem
              sx={{ margin: "0 1rem" }}
            />
            <StyledStack direction="row" alignItems="center" spacing={2}>
              {socialIcons.map((item, i) => (
                <Chip
                  clickable={true}
                  component="a"
                  href={item.link}
                  variant="outlined"
                  key={i}
                  label={item.name}
                  icon={item.icon}
                />
              ))}
            </StyledStack>
          </Stack>
        </StyledPaper>
      </Grid>
    </Grid>
  );
};

export default AdditionalSkills;
