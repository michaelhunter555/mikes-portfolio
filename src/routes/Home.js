import React from "react";

import { LuMilk } from "react-icons/lu";

import { Alert, Divider, Grid, Stack, Typography, useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { styled } from "@mui/material/styles";

import About from "../components/About";
import AdditionalSkills from "../components/AdditionalSkills";
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
  const theme = useTheme();
  const isMdUp = useMediaQuery(theme.breakpoints.up("md"));
  const isSmUp = useMediaQuery(theme.breakpoints.up("sm"));
  const iframeDims = isMdUp
    ? { width: 560, height: 315 }
    : isSmUp
    ? { width: 480, height: 270 }
    : { width: 320, height: 180 };

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
            My Profile
          </StyledTypography>
          <About />
        </Stack>
        <Stack sx={{ marginBottom: 2}} alignItems="center" justifyContent="center">
        <StyledTypography variant="h4" color="text.secondary">
            Recent YT videos
          </StyledTypography>
          <Stack sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: { xs: 'column', md: 'row' }, gap: 2}}>

          <iframe width={iframeDims.width} height={iframeDims.height} src="https://www.youtube.com/embed/VYoTBOFhJQc?si=Hfb0KL0DhIyyD480" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
          <iframe width={iframeDims.width} height={iframeDims.height} src="https://www.youtube.com/embed/MAsIi7F-nAo?si=H3m6i6jWxCDjdi1g" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
          </Stack>

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
        <AdditionalSkills />
        <Divider />
        <Footer />
      </SmoothTransition>
    </div>
  );
};

export default Home;
