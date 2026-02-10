import React, { useEffect, useState } from "react";

import { FaGithub, FaReact } from "react-icons/fa";
import { FaAnglesDown } from "react-icons/fa6";
import { SiJavascript, SiMui, SiVercel } from "react-icons/si";
import { Link as ScrollLink } from "react-scroll";

import {
  Box,
  Button,
  Divider,
  Paper,
  Stack,
  styled,
  Typography,
} from "@mui/material";

import CoolLetterHover from "../components/CoolLetterHover";

const icons = [
  <FaReact size={40} style={{ color: "#61DBFB" }} />,
  <SiMui size={40} style={{ color: "#007fff" }} />,
  <SiJavascript
    size={40}
    style={{ color: "yellow", backgroundColor: "black" }}
  />,
  <SiVercel size={40} />,
];

const StyledBoxContainer = styled(Box)(({ theme }) => ({
  height: "100vh",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "column",
  background: "linear-gradient(180deg, #000000 0%, #0a0a0a 100%)",
  position: "relative",
  "&::before": {
    content: '""',
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: "radial-gradient(circle at 50% 50%, rgba(255, 255, 255, 0.03) 0%, transparent 70%)",
    pointerEvents: "none",
  },
}));

const StyledBoxWrapper = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  flexDirection: "column",
  padding: "3rem 2rem",
  borderRadius: "12px",
  background: "rgba(255, 255, 255, 0.02)",
  border: "1px solid rgba(255, 255, 255, 0.1)",
  backdropFilter: "blur(10px)",
  maxWidth: "800px",
  width: "90%",
  zIndex: 1,
}));

const StyledPaperIcons = styled(Paper)(({ theme }) => ({
  display: "flex",
  width: "100%",
  justifyContent: "space-evenly",
  padding: "1.5rem 1rem",
  background: "rgba(255, 255, 255, 0.02)",
  border: "1px solid rgba(255, 255, 255, 0.05)",
  borderRadius: "8px",
  boxShadow: "none",
}));

const SliderImage = () => {
  const [letterHover, setLetterHover] = useState("text-animate");
  const mySkills = [
    "F",
    "u",
    "l",
    "l",
    "-",
    "S",
    "t",
    "a",
    "c",
    "k",
    " ",
    "D",
    "e",
    "v",
  ];

  const myName = "Michael Hunter".split("");

  useEffect(() => {
    let timeOut = setTimeout(() => {
      setLetterHover("text-animate-hover");
    }, 4000);
    return () => clearTimeout(timeOut);
  }, []);

  return (
    <StyledBoxContainer>
      <StyledBoxWrapper>
        <CoolLetterHover
          style={{ fontSize: "1.8rem", padding: 0, color: "#ffffff" }}
          letterHover={`${letterHover}`}
          arr={myName}
          idx={1}
        />
        <Stack>
          <Typography sx={{ color: "rgba(255, 255, 255, 0.6)", fontSize: "14px", marginTop: 2 }}>
            Built & Hosts this portfolio with:
          </Typography>
        </Stack>
        <StyledPaperIcons elevation={2}>
          {icons.map((item, i) => (
            <Stack direction="row" key={i}>
              <Stack>{item}</Stack>
            </Stack>
          ))}
        </StyledPaperIcons>
        <CoolLetterHover
        style={{ color: "#ffffff" }}
          letterHover={`${letterHover}`}
          arr={mySkills}
          idx={15}
        />
        <Divider flexItem />
        <Stack direction="row" spacing={2} sx={{ margin: "1.5rem auto 0" }}>
          <Button
            component="a"
            target="_blank"
            href="https://www.github.com/michaelhunter555/mikes-portfolio"
            variant="contained"
            startIcon={<FaGithub />}
            sx={{
              backgroundColor: "#ffffff",
              color: "#000000",
              "&:hover": {
                backgroundColor: "rgba(255, 255, 255, 0.9)",
              },
            }}
          >
            View code
          </Button>
          <ScrollLink to="contact" duration={500} smooth={true}>
            <Button 
              variant="outlined"
              sx={{
                borderColor: "rgba(255, 255, 255, 0.3)",
                color: "#ffffff",
                "&:hover": {
                  borderColor: "rgba(255, 255, 255, 0.5)",
                  backgroundColor: "rgba(255, 255, 255, 0.05)",
                },
              }}
            >
              Contact Me
            </Button>
          </ScrollLink>
        </Stack>
      </StyledBoxWrapper>
      <Stack sx={{ paddingTop: 4, zIndex: 1 }}>
        <ScrollLink to="about" duration={500} smooth={true}>
          <Button sx={{ color: "rgba(255, 255, 255, 0.6)", "&:hover": { color: "#ffffff" } }}>
            <FaAnglesDown size={40} />
          </Button>
        </ScrollLink>
      </Stack>
    </StyledBoxContainer>
  );
};

export default SliderImage;
