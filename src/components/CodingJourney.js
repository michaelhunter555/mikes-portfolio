import React from "react";

import { Grid } from "@mui/material";

import CodingCertifications from "./CodingCertifications";
import CodingTimeline from "./CodingTimeline";

const CodingJourney = () => {
  return (
    <Grid container sx={{ padding: "1rem" }}>
      <Grid
        item
        xs={12}
        sm={6}
        sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
      >
        <CodingTimeline />
      </Grid>
      <Grid item xs={12} sm={6}>
        <CodingCertifications />
      </Grid>
    </Grid>
  );
};

export default CodingJourney;
