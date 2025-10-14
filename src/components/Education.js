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
        maxWidth: { xs: "100%", sm: "100%", md: "70%", lg: "50%" },
        margin: "5rem auto",
        padding: "0 1rem",
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
                <Avatar src={`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDxQRRjiG1vRq4IFxO85cs2Yt_vTXuFZwV5Q&s`}></Avatar>
              </TableCell>
              <TableCell>
                <Typography color="text.secondary">
                  Western Governors University
                </Typography>
              </TableCell>
              <TableCell>
                <Typography color="text.secondary">
                  Software Engineering
                </Typography>
              </TableCell>
              <TableCell>
                <Typography color="text.secondary">
                  April 2025 - Present
                </Typography>
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
                <Typography color="text.secondary">Communications</Typography>
              </TableCell>
              <TableCell>
                <Typography color="text.secondary">May 2012</Typography>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default Education;
