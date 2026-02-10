import React from "react";

import { LuMilk } from "react-icons/lu";

import { Alert, Divider, Grid, Stack, Typography, useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";
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
  background: "#000000",
  padding: "4rem 2rem",
  [theme.breakpoints.down("sm")]: {
    padding: "2rem 1rem",
  },
}));

const StyledTypography = styled(Typography)(({ theme }) => ({
  color: "#ffffff",
  fontWeight: 600,
  letterSpacing: "-0.02em",
  [theme.breakpoints.down("sm")]: {
    fontSize: 36,
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
          sx={{ 
            minHeight: 700, 
            padding: "6rem 2rem 4rem",
            background: "#000000",
          }}
          id="about"
        >
          <StyledTypography variant="h2" sx={{ marginBottom: 4 }}>
            My Profile
          </StyledTypography>
          <About />
        </Stack>
        <Stack sx={{ marginBottom: 4, padding: "4rem 2rem", background: "#000000" }} alignItems="center" justifyContent="center">
        <StyledTypography variant="h4" sx={{ marginBottom: 3 }}>
            Recent YT videos
          </StyledTypography>
          <Stack sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: { xs: 'column', md: 'row' }, gap: 2}}>

          <iframe 
            width={iframeDims.width} 
            height={iframeDims.height} 
            src="https://www.youtube.com/embed/VYoTBOFhJQc?si=Hfb0KL0DhIyyD480" 
            title="YouTube video player" 
            frameBorder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            referrerPolicy="strict-origin-when-cross-origin" 
            allowFullScreen
            style={{ borderRadius: '8px' }}
          ></iframe>
          <iframe 
            width={iframeDims.width} 
            height={iframeDims.height} 
            src="https://www.youtube.com/embed/MAsIi7F-nAo?si=H3m6i6jWxCDjdi1g" 
            title="YouTube video player" 
            frameBorder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            referrerPolicy="strict-origin-when-cross-origin" 
            allowFullScreen
            style={{ borderRadius: '8px' }}
          ></iframe>
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
            <Stack direction="row" align="center" spacing={1}>
              <Stack>
                <Typography variant="h2" sx={{ color: "#ffffff", fontWeight: 600 }}>
                  Got Github?
                </Typography>
              </Stack>
              <Stack>
                <LuMilk style={{ color: "#ffffff" }} size={30} />
              </Stack>
            </Stack>
            <Typography variant="subtitle2" sx={{ color: "rgba(255, 255, 255, 0.7)", marginTop: 1 }}>
              Hover the icons to view my commit messages this year
            </Typography>
            <Alert 
              severity="info"
              sx={{
                marginTop: 2,
                backgroundColor: "rgba(255, 255, 255, 0.05)",
                border: "1px solid rgba(255, 255, 255, 0.1)",
                color: "rgba(255, 255, 255, 0.9)",
              }}
            >
              Order starts with most recent commit first.
            </Alert>
          </Grid>
          <Grid item xs={12} sm={6}>
            <GitHub />
          </Grid>
        </StyledGridContainer>

        <MyWork />
        <Education />
        <Divider sx={{ borderColor: "rgba(255, 255, 255, 0.1)", margin: "4rem 0" }} />

        <CodingJourney />
  
 
        <Footer />
      </SmoothTransition>
    </div>
  );
};

export default Home;
