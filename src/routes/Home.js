import React from "react";

import { LuMilk } from "react-icons/lu";

import { Alert, Divider, Grid, Stack, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

import About from "../components/About";
import CodingJourney from "../components/CodingJourney";
import Education from "../components/Education";
import Footer from "../components/Footer";
import GitHub from "../components/Github";
import MyWork from "../components/MyWork";
import Navbar from "../components/Navbar";
import SliderImage from "../components/SliderImage";
import SmoothTransition from "../components/SmoothTransition";

const StyledGridContainer = styled(Grid)(({ theme }) => ({
  background: "black",
  [theme.breakpoints.down("sm")]: {},
}));

const StyledTypography = styled(Typography)(({ theme }) => ({
  [theme.breakpoints.down("sm")]: {
    fontSize: 45,
  },
}));

const Home = () => {
  return (
    <div>
      <SmoothTransition>
        <Navbar />
        <SliderImage />
        <Stack
          alignItems="center"
          direction="column"
          sx={{ height: 700 }}
          id="about"
        >
          <StyledTypography variant="h2" color="text.secondary">
            A little about me
          </StyledTypography>
          <About />
        </Stack>
        <StyledGridContainer
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
          spacing={1}
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
            <Stack direction="row" align="center">
              <Stack>
                <Typography variant="h2" sx={{ color: "white" }}>
                  Got Github?
                </Typography>
              </Stack>
              <Stack>
                <LuMilk style={{ color: "white" }} size={30} />
              </Stack>
            </Stack>
            <Typography variant="subtitle2" sx={{ color: "white" }}>
              Hover the icons to view my commit messages this year
            </Typography>
            <Alert severity="info">
              Order starts with most recent commit first.
            </Alert>
          </Grid>
          <Grid item xs={12} sm={6}>
            <GitHub />
          </Grid>
        </StyledGridContainer>

        <MyWork />
        <Education />
        <Divider />

        <CodingJourney />
        <Divider />
        <Footer />
      </SmoothTransition>
    </div>
  );
};

export default Home;
