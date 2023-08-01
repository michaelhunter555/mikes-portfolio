import { BiLogoFirebase, BiLogoHeroku, BiLogoTypescript } from "react-icons/bi";
import { BsStackOverflow, BsTelegram } from "react-icons/bs";
import {
  FaFacebook,
  FaFreeCodeCamp,
  FaLinkedin,
  FaReact,
  FaShopify,
} from "react-icons/fa6";
import { FcGoogle } from "react-icons/fc";
import {
  SiCodecademy,
  SiCodewars,
  SiLeetcode,
  SiMui,
  SiNextdotjs,
  SiUdemy,
  SiVercel,
} from "react-icons/si";
import { TbBrandVscode, TbSeo } from "react-icons/tb";

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
      <FaReact
        size={20}
        style={{
          color: "#61DBFB",
        }}
      />
    ),
    name: "React.dev",
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
  {
    icon: (
      <SiNextdotjs
        size={20}
        style={{
          color: "#000",
        }}
      />
    ),
    name: "Nextjs Docs",
  },
  {
    icon: (
      <BiLogoTypescript
        size={20}
        style={{
          color: "#3178c6",
        }}
      />
    ),
    name: "TypeScript Docs",
  },
  {
    icon: (
      <SiLeetcode
        size={20}
        style={{
          color: "#0078d7",
        }}
      />
    ),
    name: "Leetcode",
  },
  {
    icon: (
      <SiCodewars
        size={20}
        style={{
          color: "#000",
          borderRadius: "50%",
        }}
      />
    ),
    name: "Codewars",
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

export const OtherChips = [
  {
    icon: (
      <FaShopify
        size={20}
        style={{
          color: " #96bf48",
        }}
      />
    ),
    name: "Shopify",
  },
  {
    icon: <FcGoogle size={20} />,
    name: "Google Ads & Analytics",
  },

  {
    icon: (
      <TbSeo
        style={{
          color: "black",
        }}
      />
    ),
    name: "SEO",
  },
];

export const socialIcons = [
  {
    icon: <FaFacebook size={20} style={{ color: "#1877F2" }} />,
    name: "Facebook",
    link: "https://www.facebook.com/michael.hunter.902",
  },

  {
    icon: (
      <FaLinkedin
        size={20}
        style={{
          color: "#0A66C2",
        }}
      />
    ),
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/michael-h-hunter/",
  },
  {
    icon: (
      <BsTelegram
        size={20}
        style={{
          color: "#0088CC",
        }}
      />
    ),
    name: "Telegram",
    link: "/",
  },
];
