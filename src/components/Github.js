import React, { useEffect, useState } from "react";

import { FaGithub } from "react-icons/fa";

import {
  Box,
  CircularProgress,
  Divider,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import Tooltip, { tooltipClasses } from "@mui/material/Tooltip";

const StyledCommitsBox = styled(Box)(({ theme }) => ({
  padding: 3,
  display: "flex",
  flexDirection: "row",
  flexWrap: "wrap",
  gap: "5px",
  boxSizing: "border-box",
}));

const StyledBoxContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  maxWidth: "100%",
}));

const StyledPaper = styled(Paper)(({ theme }) => ({
  backgroundColor: "transparent",
  border: "1px solid black",
}));

const username = process.env.REACT_APP_GITHUB_USERNAME;
const GIT_TOKEN = process.env.REACT_APP_GITHUB_API_TOKEN;
const url = `https://api.github.com/search/commits?q=author:${username}+author-date:%3E2023-01-01&sort=author-date&per_page=100`;
const headers = {
  Authorization: `token ${GIT_TOKEN}`,
  Accept: "application/vnd.github.cloak-preview+json",
};

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

const GitHub = () => {
  const [gitHubCommits, setGitHubCommits] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const getCommits = async () => {
      try {
        setIsLoading(true);
        const response = await fetch(url, { headers });
        if (!response.ok) {
          throw new Error("There was an error with the request.");
        }
        const data = await response.json();
        const commits = data.items;
        const commitMessages = commits.map((commit) => commit.commit.message);
        setGitHubCommits(commitMessages);
        setIsLoading(false);
      } catch (error) {
        setIsLoading(false);
        console.error("Error getting the commit count.", error);
      }
    };
    getCommits();
  }, []);

  let gitCommits = [];
  for (let i = 0; i < gitHubCommits.length; i++) {
    gitCommits.push(<FaGithub style={{ fontSize: "14px" }} />);
  }

  return (
    <StyledBoxContainer>
      <StyledPaper
        elevation={2}
        sx={{
          height: { xs: "100%", sm: 300 },
          width: { xs: "100%", sm: 500 },
          borderRadius: 8,
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Stack direction="column" alignItems="center">
          <Stack>
            <FaGithub size={30} style={{ color: "white" }} />
          </Stack>

          <Stack>
            <Typography variant="body1" color="white">
              via GitHub API
            </Typography>
          </Stack>
          <Divider orientation="vertical" sx={{ color: "white" }} flexItem />
          <Stack alignItems="center">
            <Typography variant="body1" color="white">
              My last {gitHubCommits?.length} commits
            </Typography>
            <StyledCommitsBox>
              {!isLoading &&
                gitHubCommits?.map((item, i) => (
                  <React.Fragment key={i}>
                    <HtmlTooltip title={`${item}`}>
                      <StyledCommitsBox
                        sx={{
                          padding: 0,
                          margin: 0,
                          "&:hover": { color: "blue" },
                        }}
                      >
                        <FaGithub
                          size={25}
                          style={{
                            color: "white",
                            "&:hover": { color: "gray" },
                          }}
                        />
                      </StyledCommitsBox>
                    </HtmlTooltip>
                  </React.Fragment>
                ))}
              {isLoading && <CircularProgress sx={{ color: "white" }} />}
            </StyledCommitsBox>
          </Stack>
        </Stack>
      </StyledPaper>
    </StyledBoxContainer>
  );
};

export default GitHub;
