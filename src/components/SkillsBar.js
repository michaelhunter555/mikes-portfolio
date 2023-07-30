import React from "react";

import {
  SiExpress,
  SiMongodb,
  SiNodedotjs,
  SiReact,
  SiTypescript,
} from "react-icons/si";

import { Link, Stack, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import Tooltip, { tooltipClasses } from "@mui/material/Tooltip";

const SkillsBarDiv = styled("div")(({ theme }) => ({
  backgroundColor: "#fff",
  border: "1px solid #adadad",
  padding: "1.5rem",
  borderRadius: "50px",
  marginTop: 3,
  "&:hover": {
    border: "1px solid lightblue",
  },
}));

const HtmlTooltip = styled(({ className, ...props }) => (
  <Tooltip {...props} classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: "#f7f7f7",
    color: "rgba(0, 0, 0, 0.87)",
    maxWidth: 220,
    fontSize: theme.typography.pxToRem(12),
    border: "1px solid #dadde9",
  },
}));

const SkillsBar = () => {
  return (
    <SkillsBarDiv>
      <Stack direction="row" justifyContent="space-evenly" spacing={2}>
        <HtmlTooltip
          title={
            <React.Fragment>
              <SiExpress size={20} style={{ color: "#999" }} />
              <Typography color="inherit">
                Express - Node.js framework
              </Typography>
              <Typography color="text.secondary" paragraph>
                I have a competent understanding of Express and it is my
                prefered backend framework of choice for asynchronous
                programming.
              </Typography>
              <Link href="https://www.expressjs.com" target="_blank">
                Visit Website
              </Link>
            </React.Fragment>
          }
          arrow
        >
          <div>
            <SiExpress size={30} style={{ color: "#999" }} />
          </div>
        </HtmlTooltip>

        <HtmlTooltip
          title={
            <React.Fragment>
              <SiMongodb size={20} style={{ color: "#3FA037" }} />
              <Typography color="inherit">MongoDb - Database</Typography>
              <Typography color="text.secondary" paragraph>
                A non-relational document database that provides me support for
                Json(BSON) storage
              </Typography>
              <Link href="https://www.mongodb.com" target="_blank">
                Visit Website
              </Link>
            </React.Fragment>
          }
          arrow
        >
          <div>
            <SiMongodb size={30} style={{ color: "#3FA037" }} />
          </div>
        </HtmlTooltip>

        <HtmlTooltip
          title={
            <React.Fragment>
              <SiNodedotjs size={20} style={{ color: "#3C873A" }} />
              <Typography color="inherit">Node.js</Typography>
              <Typography color="text.secondary" paragraph>
                An asynchronous, cross-platform, open-server environment I use
                for server-side programming.
              </Typography>
              <Link href="https://nodejs.org" target="_blank">
                Visit Website
              </Link>
            </React.Fragment>
          }
          arrow
        >
          <div>
            <SiNodedotjs size={30} style={{ color: "#3C873A" }} />
          </div>
        </HtmlTooltip>

        <HtmlTooltip
          title={
            <React.Fragment>
              <SiTypescript size={20} style={{ color: "#3178c6" }} />
              <Typography color="inherit">TypeScript</Typography>
              <Typography color="text.secondary" paragraph>
                TypeScript features like interface, type aliases, generics,
                tuples, etc. make our code easier to understand, collaborated
                with and debugged.{" "}
              </Typography>

              <Link href="https://typescriptlang.org" target="_blank">
                Visit Website
              </Link>
            </React.Fragment>
          }
          arrow
        >
          <div>
            <SiTypescript size={30} style={{ color: "#3178c6" }} />
          </div>
        </HtmlTooltip>

        <HtmlTooltip
          title={
            <React.Fragment>
              <SiReact size={20} style={{ color: "#61DBFB" }} />
              <Typography color="inherit">React</Typography>
              <Typography color="text.secondary" paragraph>
                React is used for building user-interfaces for web, mobile and
                desktop apps. I started out with React after gaining competence
                in vanilla javaScript. As a frontend javaScript library, I am
                most competent in React.
              </Typography>
              <Link href="https://react.dev/" target="_blank">
                Visit Website
              </Link>
            </React.Fragment>
          }
          arrow
        >
          <div>
            <SiReact size={30} style={{ color: "#61DBFB" }} />
          </div>
        </HtmlTooltip>
      </Stack>
    </SkillsBarDiv>
  );
};

export default SkillsBar;
