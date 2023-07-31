import { FaReact } from "react-icons/fa";
import { SiJavascript } from "react-icons/si";

import { Chip } from "@mui/material";

export const codingJourneyTable = [
  {
    id: 1,
    learning: (
      <img alt="fcc" src={`https://logo.clearbit.com/freecodecamp.org`} />
    ),
    curriculum: "300-hours of Frontend Development Libraries",
    language: <FaReact size={20} style={{ color: "#61DBFB" }} />,
    certificationLink: (
      <Chip
        component="a"
        href="https://www.freecodecamp.org/certification/MichaelHezekiahHunter/front-end-development-libraries"
        variant="outlined"
        size="small"
        clickable={true}
        label="view"
      />
    ),
  },
  {
    id: 2,
    learning: (
      <img alt="fcc" src={`https://logo.clearbit.com/freecodecamp.org`} />
    ),
    curriculum: "300-hours Data Structures & Algorithms",
    language: (
      <SiJavascript
        size={20}
        style={{ color: "yellow", backgroundColor: "black" }}
      />
    ),
    certificationLink: (
      <Chip
        component="a"
        href="https://www.freecodecamp.org/certification/MichaelHezekiahHunter/javascript-algorithms-and-data-structures"
        variant="outlined"
        size="small"
        clickable={true}
        label="view"
      />
    ),
  },

  {
    id: 3,
    learning: (
      <img
        alt="codecademy"
        src={`https://logo.clearbit.com/codecademy.com`}
        width="25px"
      />
    ),
    curriculum: "React Native",
    language: <FaReact size={20} style={{ color: "#61DBFB" }} />,
    certificationLink: (
      <Chip
        component="a"
        href="https://www.codecademy.com/profiles/farangdam/certificates/458aef4eef5f5130685423fc15e6493d"
        variant="outlined"
        size="small"
        clickable={true}
        label="view"
      />
    ),
  },

  {
    id: 4,
    learning: (
      <img
        alt="codecademy"
        src={`https://logo.clearbit.com/codecademy.com`}
        width="25px"
      />
    ),
    curriculum: "Advanced React",
    language: <FaReact size={20} style={{ color: "#61DBFB" }} />,
    certificationLink: (
      <Chip
        component="a"
        href="https://www.codecademy.com/profiles/farangdam/certificates/13ffe064f6504262a9e9e3cf76be9bf3"
        variant="outlined"
        size="small"
        clickable={true}
        label="view"
      />
    ),
  },

  {
    id: 5,
    learning: (
      <img
        alt="codecademy"
        src={`https://logo.clearbit.com/codecademy.com`}
        width="25px"
      />
    ),
    curriculum: "React",
    language: <FaReact size={20} style={{ color: "#61DBFB" }} />,
    certificationLink: (
      <Chip
        component="a"
        href="https://www.codecademy.com/profiles/farangdam/certificates/af00e5032d0a68cc84879983f5d8333b"
        variant="outlined"
        size="small"
        clickable={true}
        label="view"
      />
    ),
  },

  {
    id: 6,
    learning: (
      <img
        alt="codecademy"
        src={`https://logo.clearbit.com/codecademy.com`}
        width="25px"
      />
    ),
    curriculum: "Intermediate JavaScript",
    language: (
      <SiJavascript
        size={20}
        style={{ color: "yellow", backgroundColor: "black" }}
      />
    ),
    certificationLink: (
      <Chip
        component="a"
        href="https://www.codecademy.com/profiles/farangdam/certificates/512386fdc7f6c934f98b01e6afa8285a"
        variant="outlined"
        size="small"
        clickable={true}
        label="view"
      />
    ),
  },

  {
    id: 7,
    learning: (
      <img
        alt="codecademy"
        src={`https://logo.clearbit.com/codecademy.com`}
        width="25px"
      />
    ),
    curriculum: "Basic JavaScript",
    language: (
      <SiJavascript
        size={20}
        style={{ color: "yellow", backgroundColor: "black" }}
      />
    ),
    certificationLink: (
      <Chip
        component="a"
        href="https://www.codecademy.com/profiles/farangdam/certificates/705dcb15de0da4dd9d9fc4f3274b430e"
        variant="outlined"
        size="small"
        clickable={true}
        label="view"
      />
    ),
  },
];
