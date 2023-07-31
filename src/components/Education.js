import React from "react";

import {
  Avatar,
  Box,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";

const Education = () => {
  return (
    <Box
      id="education"
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        maxWidth: "800px",
        margin: "5rem auto",
      }}
    >
      <Typography variant="h2" color="text.secondary">
        Education
      </Typography>
      <TableContainer component={Paper} sx={{ borderRadius: "15px" }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>
                <Typography color="text.primary" variant="body1">
                  Level
                </Typography>
              </TableCell>
              <TableCell>
                <Typography color="text.primary" variant="body1">
                  University
                </Typography>
              </TableCell>
              <TableCell>
                <Typography color="text.primary" variant="body1">
                  Name
                </Typography>
              </TableCell>
              <TableCell>
                <Typography color="text.primary" variant="body1">
                  Discipline
                </Typography>
              </TableCell>
              <TableCell>
                <Typography color="text.primary" variant="body1">
                  Graduated
                </Typography>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell>
                <Typography color="text.secondary">Bachelors</Typography>
              </TableCell>
              <TableCell>
                <Avatar src={`https://logo.clearbit.com/temple.edu`}></Avatar>
              </TableCell>
              <TableCell>
                <Typography color="text.secondary">
                  Temple University
                </Typography>
              </TableCell>
              <TableCell>
                <Typography color="text.secondary">
                  Comm Arts/Advertising
                </Typography>
              </TableCell>
              <TableCell>
                <Typography color="text.secondary">May 2012</Typography>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <Typography color="text.secondary">Masters</Typography>
              </TableCell>
              <TableCell>
                <Avatar
                  src={`https://logo.clearbit.com/liverpool.ac.uk`}
                ></Avatar>
              </TableCell>
              <TableCell>
                <Typography color="text.secondary">
                  University of Liverpool
                </Typography>
              </TableCell>
              <TableCell>
                <Typography color="text.secondary">MBA</Typography>
              </TableCell>
              <TableCell>
                <Typography color="text.secondary">Sept 2020</Typography>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default Education;
