import React from "react";

import { Grid } from "@mui/material";

import CodingCertifications from "./CodingCertifications";

const CodingJourney = () => {
  return (
    <Grid container sx={{ padding: "1rem", background: "#000000" }}>
      <CodingCertifications />
    </Grid>
  );
};

export default CodingJourney;
