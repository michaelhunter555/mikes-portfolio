import React from "react";

import { FaCode, FaFire, FaFreeCodeCamp } from "react-icons/fa6";
import { GiBackPain } from "react-icons/gi";
import { SiCodecademy } from "react-icons/si";

import LaptopMacIcon from "@mui/icons-material/LaptopMac";
import {
  Timeline,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineItem,
  TimelineOppositeContent,
  TimelineSeparator,
} from "@mui/lab";
import { Box, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

const StyledBoxComponent = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  [theme.breakpoints.down("sm")]: {
    width: "100%",
  },
}));

const StyledTimeline = styled(Timeline)(({ theme }) => ({
  [theme.breakpoints.down("sm")]: {
    flexDirection: "column-reverse",
  },
  [theme.breakpoints.down("sm")]: {
    width: "100%",
  },
}));

const CodingTimeline = () => {
  return (
    <StyledBoxComponent>
      <Typography variant="h4" color="text.secondary">
        A brief timeline of my learning...
      </Typography>
      <StyledTimeline position="alternate">
        <TimelineItem>
          <TimelineOppositeContent
            sx={{ m: "auto 0" }}
            align="right"
            variant="subtitle2"
            color="text.secondary"
          >
            2023 and onward...
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineConnector />
            <TimelineDot>
              <FaCode />
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent sx={{ py: "12px", px: 2 }}>
            <Typography variant="h6" component="span">
              Determined
            </Typography>
            <Typography variant="subtitle2" color="text.secondary">
              Deployed AjarnJobs.com and will continue MERN stack development.
              Exploring Fullstack projects with Nextjs & TypeScript and continue
              to learn and test out new ideas. Completed FCC Frontend course -
              May 2023.
            </Typography>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent
            sx={{ m: "auto 0" }}
            variant="subtitle2"
            color="text.secondary"
          >
            Nov - Dec 2022
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineConnector />
            <TimelineDot>
              <LaptopMacIcon />
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent sx={{ py: "12px", px: 2 }}>
            <Typography variant="h6" component="span">
              Building Real Projects
            </Typography>
            <Typography variant="subtitle2" color="text.secondary">
              After sometime, concepts and approaches started to click. By
              adopting and adapting those concepts to bring ideas to life is
              without a doubt where the most growth took place. Dives into
              full-stack javaScript development.
            </Typography>
          </TimelineContent>
        </TimelineItem>

        <TimelineItem>
          <TimelineOppositeContent
            sx={{ m: "auto 0" }}
            variant="subtitle2"
            color="text.secondary"
          >
            October 2022
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineConnector />
            <TimelineDot color="error">
              <FaFire />
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent sx={{ py: "12px", px: 2 }}>
            <Typography variant="h6" component="span">
              Becoming Capable
            </Typography>
            <Typography variant="subtitle2" color="text.secondary">
              The focus shifted back to the React Library with the aim of
              gaining a deeper understanding of what exists, why it exists, how
              it's used, and when it's best used. Completed 3/5 front end
              projects for FCC course, started to explore personal ideas and
              starting own projects.
            </Typography>
          </TimelineContent>
        </TimelineItem>

        <TimelineItem>
          <TimelineOppositeContent
            sx={{ m: "auto 0" }}
            align="right"
            variant="subtitle2"
            color="text.secondary"
          >
            in 2021-2022...
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineConnector />
            <TimelineDot variant="outlined">
              <FaFreeCodeCamp />
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent sx={{ py: "12px", px: 2 }}>
            <Typography variant="h6" component="span">
              600 hours of FCC
            </Typography>
            <Typography variant="subtitle2" color="text.secondary">
              Completed a few courses and Moved on to FCC with the aim to
              complete 300-hour certifications in Frontend development and Data
              Structures & Algorithms. Completes DSA course Sept. 2022. Tests
              understanding through leetcode & codewars.
            </Typography>
          </TimelineContent>
        </TimelineItem>

        <TimelineItem>
          <TimelineOppositeContent
            sx={{ m: "auto 0" }}
            align="right"
            variant="subtitle2"
            color="text.secondary"
          >
            January 2021
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineConnector />
            <TimelineDot variant="outlined">
              <SiCodecademy />
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent sx={{ py: "12px", px: 2 }}>
            <Typography variant="h6" component="span">
              Structured Learning
            </Typography>
            <Typography variant="subtitle2" color="text.secondary"></Typography>
          </TimelineContent>
        </TimelineItem>

        <TimelineItem>
          <TimelineOppositeContent
            sx={{ m: "auto 0" }}
            align="right"
            variant="subtitle2"
            color="text.secondary"
          >
            August 2020
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineConnector />
            <TimelineDot variant="outlined">
              <GiBackPain />
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent sx={{ py: "12px", px: 2 }}>
            <Typography variant="h6" component="span">
              Why?
            </Typography>
            <Typography variant="subtitle2" color="text.secondary">
              Running a semi-successful shopify website. Was comfortable with
              shopify liquid and HTML & CSS, but had no grasp of javaScript.
              feeling limited in that sense, decided it was time to embark on a
              journey to master a programming language. Starts researching and
              deciding on programming language to learn before eventually
              settling on JavaScript & React.
            </Typography>
          </TimelineContent>
        </TimelineItem>
      </StyledTimeline>
    </StyledBoxComponent>
  );
};

export default CodingTimeline;
