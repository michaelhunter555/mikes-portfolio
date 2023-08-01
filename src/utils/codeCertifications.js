import { FaFreeCodeCamp, FaReact } from "react-icons/fa6";
import { SiCodecademy, SiJavascript } from "react-icons/si";

import { Chip } from "@mui/material";

export const codingJourneyTable = [
  {
    id: 1,
    learning: <FaFreeCodeCamp size={30} />,
    curriculum: "300-hours of Frontend Development Libraries",
    language: <FaReact size={20} style={{ color: "#61DBFB" }} />,
    certificationLink: (
      <Chip
        component="a"
        href="https://www.freecodecamp.org/certification/MichaelHezekiahHunter/front-end-development-libraries"
        target="_blank"
        variant="outlined"
        size="small"
        clickable={true}
        label="view"
      />
    ),
  },
  {
    id: 2,
    learning: <FaFreeCodeCamp size={30} />,
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
        target="_blank"
        variant="outlined"
        size="small"
        clickable={true}
        label="view"
      />
    ),
  },

  {
    id: 3,
    learning: <SiCodecademy size={30} />,
    curriculum: "React Native",
    language: <FaReact size={20} style={{ color: "#61DBFB" }} />,
    certificationLink: (
      <Chip
        component="a"
        href="https://www.codecademy.com/profiles/farangdam/certificates/458aef4eef5f5130685423fc15e6493d"
        target="_blank"
        variant="outlined"
        size="small"
        clickable={true}
        label="view"
      />
    ),
  },

  {
    id: 4,
    learning: <SiCodecademy size={30} />,
    curriculum: "Advanced React",
    language: <FaReact size={20} style={{ color: "#61DBFB" }} />,
    certificationLink: (
      <Chip
        component="a"
        href="https://www.codecademy.com/profiles/farangdam/certificates/13ffe064f6504262a9e9e3cf76be9bf3"
        target="_blank"
        variant="outlined"
        size="small"
        clickable={true}
        label="view"
      />
    ),
  },

  {
    id: 5,
    learning: <SiCodecademy size={30} />,
    curriculum: "React",
    language: <FaReact size={20} style={{ color: "#61DBFB" }} />,
    certificationLink: (
      <Chip
        component="a"
        href="https://www.codecademy.com/profiles/farangdam/certificates/af00e5032d0a68cc84879983f5d8333b"
        target="_blank"
        variant="outlined"
        size="small"
        clickable={true}
        label="view"
      />
    ),
  },

  {
    id: 6,
    learning: <SiCodecademy size={30} />,
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
        target="_blank"
        variant="outlined"
        size="small"
        clickable={true}
        label="view"
      />
    ),
  },

  {
    id: 7,
    learning: <SiCodecademy size={30} />,
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
        target="_blank"
        variant="outlined"
        size="small"
        clickable={true}
        label="view"
      />
    ),
  },
];
