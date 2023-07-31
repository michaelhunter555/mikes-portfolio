import React from "react";

import { FaCode, FaFreeCodeCamp } from "react-icons/fa6";
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

const CodingTimeline = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Typography variant="h4" color="text.secondary">
        A brief timeline of my ongoing learning
      </Typography>
      <Timeline position="alternate">
        <TimelineItem>
          <TimelineOppositeContent
            sx={{ m: "auto 0" }}
            align="right"
            variant="body2"
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
              Life Passion Found
            </Typography>
            <Typography>
              I plan to continue to code, build projects, collaborate and
              explore. Most importantly, test my ideas and encourage others who
              are in my position.
            </Typography>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent
            sx={{ m: "auto 0" }}
            variant="body2"
            color="text.secondary"
          >
            Sometime in 2022
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineConnector />
            <TimelineDot color="primary">
              <LaptopMacIcon />
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent sx={{ py: "12px", px: 2 }}>
            <Typography variant="h6" component="span">
              Building Real Projects
            </Typography>
            <Typography>
              After sometime, I finally started to get my own ideas. About
              halfway through my FCC frontend projects, I decided to stray off
              and start building out my ideas. This is without a doubt where the
              most growth took place.
            </Typography>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent
            sx={{ m: "auto 0" }}
            align="right"
            variant="body2"
            color="text.secondary"
          >
            in 2022...
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineConnector />
            <TimelineDot color="primary" variant="outlined">
              <FaFreeCodeCamp />
            </TimelineDot>
            <TimelineConnector sx={{ bgcolor: "secondary.main" }} />
          </TimelineSeparator>
          <TimelineContent sx={{ py: "12px", px: 2 }}>
            <Typography variant="h6" component="span">
              FCC & 300-hour courses
            </Typography>
            <Typography>
              Eventually Codecademy could only take me so far and I was becoming
              compentent enough that the whole idea behind their training was
              starting to hold me back. So, I moved on to FCC complete two
              300-hour certification courses while building 5 frontend projects
              and learning intermediate DSA.
            </Typography>
          </TimelineContent>
        </TimelineItem>

        <TimelineItem>
          <TimelineOppositeContent
            sx={{ m: "auto 0" }}
            align="right"
            variant="body2"
            color="text.secondary"
          >
            in 2020...
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineConnector sx={{ bgcolor: "secondary.main" }} />
            <TimelineDot color="secondary">
              <SiCodecademy />
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent sx={{ py: "12px", px: 2 }}>
            <Typography variant="h6" component="span">
              Queue the Codecademy
            </Typography>
            <Typography>
              A good friend and mentor advises me to learn html, css, then
              javaScript. I found it all very complex and perplexing, and
              Codecademy had the baby steps I needed.
            </Typography>
          </TimelineContent>
        </TimelineItem>

        <TimelineItem>
          <TimelineOppositeContent
            sx={{ m: "auto 0" }}
            align="right"
            variant="body2"
            color="text.secondary"
          >
            August 2019...
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineConnector sx={{ bgcolor: "secondary.main" }} />
            <TimelineDot color="secondary">
              <GiBackPain />
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent sx={{ py: "12px", px: 2 }}>
            <Typography variant="h6" component="span">
              Why did I do that...?
            </Typography>
            <Typography>
              I was running a successful e-commerce business, and got an idea
              for an app. Hired someone on Upwork and...It was a bad experience
              overall, so determined to never let this happen again, it's time
              to learn how to code.
            </Typography>
          </TimelineContent>
        </TimelineItem>
      </Timeline>
    </Box>
  );
};

export default CodingTimeline;
