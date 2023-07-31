import React, { useEffect, useState } from "react";

import { FaGithub, FaReact, FaSass } from "react-icons/fa";
import { FaAnglesDown } from "react-icons/fa6";
import { SiJavascript, SiMui } from "react-icons/si";
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
  <FaGithub size={40} />,
  <SiJavascript
    size={40}
    style={{ backgroundColor: "black", color: "yellow" }}
  />,
  <FaReact size={40} style={{ color: "#61DBFB" }} />,
  <FaSass size={40} style={{ color: "#CD6799" }} />,
  <SiMui size={40} style={{ color: "#007fff" }} />,
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
  padding: "2rem",
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
      <CoolLetterHover letterHover={`${letterHover}`} arr={myName} idx={1} />
      <StyledBoxWrapper>
        <Stack>
          <Typography sx={{ color: "black" }}>
            I built this portfolio with
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
          <Button variant="contained" startIcon={<FaGithub />}>
            View code
          </Button>
          <Button variant="outlined">Contact Me</Button>
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
