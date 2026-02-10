import React from "react";

import { Divider, Grid, Stack, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

const FooterGridStyles = styled(Grid)(({ theme }) => ({
  padding: "1rem",
  [theme.breakpoints.down("sm")]: {
    padding: "0.25rem",
  },
}));

const date = new Date();
const year = date.getFullYear();

const Footer = () => {
  return (
    <FooterGridStyles 
      container 
      direction="row"
      sx={{
        background: "#000000",
        borderTop: "1px solid rgba(255, 255, 255, 0.1)",
        padding: "2rem 1rem",
      }}
    >
      <Grid item xs={12} sm={6}>
        <Typography variant="subtitle2" sx={{ color: "rgba(255, 255, 255, 0.6)" }}>
          © {year} MichaelHunter.dev
        </Typography>
      </Grid>
      <Divider variant="middle" orientation="vertical" sx={{ borderColor: "rgba(255, 255, 255, 0.1)" }} />
      <Grid item xs={12} sm={5}>
        <Stack direction="row" spacing={1}></Stack>
      </Grid>
      <Divider variant="middle" orientation="vertical" sx={{ borderColor: "rgba(255, 255, 255, 0.1)" }} />
    </FooterGridStyles>
  );
};

export default Footer;
