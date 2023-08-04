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
}));

const StyledBoxWrapper = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  flexDirection: "column",
  padding: "0 2rem 0",
  borderRadius: "15px",
  background: theme.palette.background.paper,
}));

const StyledPaperIcons = styled(Paper)(({ theme }) => ({
  display: "flex",
  width: "100%",
  justifyContent: "space-evenly",
  padding: "1rem 1rem",
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
          style={{ fontSize: "1.8rem", padding: 0 }}
          letterHover={`${letterHover}`}
          arr={myName}
          idx={1}
        />
        <Stack>
          <Typography sx={{ color: "black" }}>
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
          letterHover={`${letterHover}`}
          arr={mySkills}
          idx={15}
        />
        <Divider flexItem />
        <Stack direction="row" spacing={2} sx={{ margin: "1rem auto" }}>
          <Button
            component="a"
            target="_blank"
            href="https://www.github.com/michaelhunter555/mikes-portfolio"
            variant="contained"
            startIcon={<FaGithub />}
          >
            View code
          </Button>
          <ScrollLink to="contact" duration={500} smooth={true}>
            <Button variant="outlined">Contact Me</Button>
          </ScrollLink>
        </Stack>
      </StyledBoxWrapper>
      <Stack sx={{ paddingTop: 2 }}>
        <ScrollLink to="about" duration={500} smooth={true}>
          <Button sx={{ color: "black" }}>
            <FaAnglesDown size={100} />
          </Button>
        </ScrollLink>
      </Stack>
    </StyledBoxContainer>
  );
};

export default SliderImage;
