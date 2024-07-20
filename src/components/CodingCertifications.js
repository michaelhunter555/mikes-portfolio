import React from "react";

import { Box, Chip, Stack, styled, Typography } from "@mui/material";

import { supplementalChips } from "../utils/supplementalChips";

const StyledStackContainer = styled(Stack)(({ theme }) => ({
  margin: "1rem auto",
  flexWrap: "wrap",
  gap: "5px",
  [theme.breakpoints.down("sm")]: {
    flexWrap: "wrap",
    gap: "5px",
  },
}));
const StyledChip = styled(Chip)(({ theme }) => ({
  [theme.breakpoints.down("sm")]: {},
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
      }}
    >
      <Typography variant="h2" color="text.secondary">
        Places I Frequent
      </Typography>
      <Typography color="text.secondary" variant="subtitle2">
        Supplemental learning, reading documentation & contiously reafirming and
        advancing my learning.
      </Typography>
      <StyledStackContainer
        direction="row"
        spacing={1}
        sx={{ margin: "1rem auto" }}
      >
        {supplementalChips.map((chip, i) => (
          <StyledChip
            variant="outlined"
            key={i}
            icon={chip.icon}
            label={chip.name}
            sx={{
              backgroundColor: "#fff",
              fontSize: "1rem",
            }}
          />
        ))}
      </StyledStackContainer>
      {/* <TableContainer component={Paper} sx={{ borderRadius: "15px" }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>
                <Typography color="text.primary" variant="body1">
                  Learning
                </Typography>
              </TableCell>
              <TableCell>
                <Typography color="text.primary" variant="body1">
                  Curriculum
                </Typography>
              </TableCell>
              <TableCell>
                <Typography color="text.primary" variant="body1">
                  Languages
                </Typography>
              </TableCell>
              <TableCell>
                <Typography color="text.primary" variant="body1">
                  Certification
                </Typography>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {codingJourneyTable.map(
              (
                { id, learning, curriculum, language, certificationLink },
                i
              ) => (
                <TableRow key={id}>
                  <TableCell>{learning}</TableCell>
                  <TableCell>{curriculum}</TableCell>
                  <TableCell>{language}</TableCell>
                  <TableCell>{certificationLink}</TableCell>
                </TableRow>
              )
            )}
          </TableBody>
        </Table>
      </TableContainer> */}
    </Box>
  );
};

export default CodingCertifications;
