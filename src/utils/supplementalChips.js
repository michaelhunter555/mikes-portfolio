import { BiLogoFirebase, BiLogoHeroku } from "react-icons/bi";
import { BsStackOverflow } from "react-icons/bs";
import { FaFreeCodeCamp } from "react-icons/fa6";
import { SiCodecademy, SiMui, SiUdemy, SiVercel } from "react-icons/si";
import { TbBrandVscode } from "react-icons/tb";

export const supplementalChips = [
  {
    icon: (
      <FaFreeCodeCamp
        size={20}
        style={{
          color: "white",
          backgroundColor: "black",
          borderRadius: "50%",
        }}
      />
    ),
    name: "FreeCodeCamp",
  },
  {
    icon: (
      <BsStackOverflow
        size={20}
        style={{
          color: "#F47F24",
        }}
      />
    ),
    name: "Stackoverflow",
  },
  {
    icon: (
      <SiMui
        size={20}
        style={{
          color: "#007fff",
        }}
      />
    ),
    name: "MUI Docs",
  },
  {
    icon: (
      <SiCodecademy
        size={20}
        style={{
          color: "black",
        }}
      />
    ),
    name: "Codecademy",
  },

  {
    icon: (
      <SiUdemy
        size={20}
        style={{
          color: "white",
          backgroundColor: "#6567a5",
          borderRadius: "50%",
        }}
      />
    ),
    name: "Udemy",
  },
  {
    icon: (
      <TbBrandVscode
        size={20}
        style={{
          color: "#0078d7",
        }}
      />
    ),
    name: "VSCode",
  },
];

export const supplementalProfileChips = [
  {
    icon: (
      <BiLogoHeroku
        size={20}
        style={{
          color: "white",
          backgroundColor: "#6567a5",
          borderRadius: "50%",
        }}
      />
    ),
    name: "Heroku",
  },
  {
    icon: (
      <BiLogoFirebase
        size={20}
        style={{
          color: "white",
          backgroundColor: "#FFA611",
          borderRadius: "50%",
        }}
      />
    ),
    name: "Firebase",
  },

  {
    icon: (
      <SiVercel
        style={{
          color: "black",
        }}
      />
    ),
    name: "Vercel",
  },
];
