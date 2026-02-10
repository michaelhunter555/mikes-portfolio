import React from "react";

import { Box, Chip, Stack, styled, Typography } from "@mui/material";
import { FaLinkedin, FaGithub } from "react-icons/fa";

const StyledStackContainer = styled(Stack)(({ theme }) => ({
  margin: "1rem auto",
  flexWrap: "wrap",
  gap: "5px",
  [theme.breakpoints.down("sm")]: {
    flexWrap: "wrap",
    gap: "5px",
  },
}));

const CodingCertifications = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        maxWidth: { xs: "100%", md: "60%" },
        margin: "5rem auto",
        padding: "4rem 1rem",
        background: "#000000",
      }}
    >
      <Typography variant="h2" sx={{ color: "#ffffff", fontWeight: 600, marginBottom: 1 }}>
        Let's Connect and Build.
      </Typography>
      <Typography sx={{ color: "rgba(255, 255, 255, 0.7)", marginBottom: 2 }} variant="subtitle2">
        I'm a team player and ready for a challenge. My only limit is my imagination and as I learn that sometimes our biggest limitations come from within and to overcome them, we have to face them head on.
      </Typography>
      <StyledStackContainer
        direction="row"
        spacing={1}
        sx={{ margin: "1rem auto" }}
      >
        <Chip component="a" href="https://www.linkedin.com/in/michael-h-hunter/" target="_blank" sx={{ color: "#ffffff", fontSize: '30px', padding: '16px' }} variant="outlined" icon={<FaLinkedin size={20} style={{ color: "#0A66C2" }} />} label="LinkedIn" />
        <Chip component="a" href="https://www.github.com/michaelhunter555" target="_blank" sx={{ color: "#ffffff", fontSize: '30px', padding: '16px' }} variant="outlined" icon={<FaGithub size={20} style={{ color: "#fff" }} />} label="Github" />
      </StyledStackContainer>

    </Box>
  );
};

export default CodingCertifications;
