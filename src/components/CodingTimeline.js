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
              Build Fullstack projects with Nextjs & TypeScript and continue to
              learn and test out new ideas. Join a team or collaborate on a
              project. Attend more code meetups and build network.
            </Typography>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent
            sx={{ m: "auto 0" }}
            variant="subtitle2"
            color="text.secondary"
          >
            Sometime in 2022
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
              without a doubt where the most growth took place.
            </Typography>
          </TimelineContent>
        </TimelineItem>

        <TimelineItem>
          <TimelineOppositeContent
            sx={{ m: "auto 0" }}
            variant="subtitle2"
            color="text.secondary"
          >
            Sometime in 2022
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
              Escapes Tutorial Purgatory
            </Typography>
            <Typography variant="subtitle2" color="text.secondary">
              Realized that everyone has their own approach, and that code
              alongs serve as validation for confidence building. Decided that
              endlessly solving algorithms wouldn't help me build real world
              projects. The focus shifted back to the React Library with the aim
              of gaining a deeper understanding of what exists, why it exists,
              how it's used, and when it's best used.
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
              Moved on from Codecademy to FCC with the aim to complete two
              300-hour certifications in Frontend development and Data
              Structures & Algorithms.
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
            in 2020...
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
              Start
            </Typography>
            <Typography variant="subtitle2" color="text.secondary">
              Found javaScript very complex and perplexing, and Codecademy
              provided the resources and approach which served as a soft
              introduction into programming.
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
            August 2019...
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
              Running a semi-successful e-commerce business, and had an idea for
              an app. Hired someone on Upwork and...It was a bad experience
              overall, so determined to never let this happen again, it's time
              to learn how to code.
            </Typography>
          </TimelineContent>
        </TimelineItem>
      </StyledTimeline>
    </StyledBoxComponent>
  );
};

export default CodingTimeline;
