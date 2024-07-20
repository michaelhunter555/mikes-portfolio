import React from "react";

import { Grid } from "@mui/material";

import CodingCertifications from "./CodingCertifications";

const CodingJourney = () => {
  return (
    <Grid container sx={{ padding: "1rem" }}>
      <CodingCertifications />
    </Grid>
  );
};

export default CodingJourney;
