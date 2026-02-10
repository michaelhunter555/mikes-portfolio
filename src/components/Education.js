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
        padding: "4rem 1rem",
        background: "#000000",
      }}
    >
      <Typography variant="h2" sx={{ color: "#ffffff", fontWeight: 600, marginBottom: 3 }}>
        Education
      </Typography>
      <TableContainer 
        component={Paper} 
        sx={{ 
          borderRadius: "12px",
          background: "rgba(255, 255, 255, 0.02)",
          border: "1px solid rgba(255, 255, 255, 0.1)",
        }}
      >
        <Table sx={{
          "& .MuiTableCell-root": {
            borderColor: "rgba(255, 255, 255, 0.1)",
          },
        }}>
          <TableHead>
            <TableRow>
              <TableCell>
                <Typography sx={{ color: "#ffffff", fontWeight: 600 }} variant="body1">
                  Level
                </Typography>
              </TableCell>
              <TableCell>
                <Typography sx={{ color: "#ffffff", fontWeight: 600 }} variant="body1">
                  University
                </Typography>
              </TableCell>
              <TableCell>
                <Typography sx={{ color: "#ffffff", fontWeight: 600 }} variant="body1">
                  Name
                </Typography>
              </TableCell>
              <TableCell>
                <Typography sx={{ color: "#ffffff", fontWeight: 600 }} variant="body1">
                  Discipline
                </Typography>
              </TableCell>
              <TableCell>
                <Typography sx={{ color: "#ffffff", fontWeight: 600 }} variant="body1">
                  Graduated
                </Typography>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell>
                <Typography sx={{ color: "rgba(255, 255, 255, 0.7)" }}>Bachelors</Typography>
              </TableCell>
              <TableCell>
                <Avatar src={`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDxQRRjiG1vRq4IFxO85cs2Yt_vTXuFZwV5Q&s`}></Avatar>
              </TableCell>
              <TableCell>
                <Typography sx={{ color: "rgba(255, 255, 255, 0.7)" }}>
                  Western Governors University
                </Typography>
              </TableCell>
              <TableCell>
                <Typography sx={{ color: "rgba(255, 255, 255, 0.7)" }}>
                  Software Engineering
                </Typography>
              </TableCell>
              <TableCell>
                <Typography sx={{ color: "rgba(255, 255, 255, 0.7)" }}>
                  April 2025 - Present
                </Typography>
              </TableCell>
            </TableRow>

            <TableRow>
              <TableCell>
                <Typography sx={{ color: "rgba(255, 255, 255, 0.7)" }}>Masters</Typography>
              </TableCell>
              <TableCell>
                <Avatar
                  src={`https://www.liverpool.ac.uk/media/timetables-app-icon.jpg`}
                ></Avatar>
              </TableCell>
              <TableCell>
                <Typography sx={{ color: "rgba(255, 255, 255, 0.7)" }}>
                  University of Liverpool
                </Typography>
              </TableCell>
              <TableCell>
                <Typography sx={{ color: "rgba(255, 255, 255, 0.7)" }}>MBA</Typography>
              </TableCell>
              <TableCell>
                <Typography sx={{ color: "rgba(255, 255, 255, 0.7)" }}>Sept 2020</Typography>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <Typography sx={{ color: "rgba(255, 255, 255, 0.7)" }}>Bachelors</Typography>
              </TableCell>
              <TableCell>
                <Avatar src={`https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/Temple_T_logo.svg/960px-Temple_T_logo.svg.png`}></Avatar>
              </TableCell>
              <TableCell>
                <Typography sx={{ color: "rgba(255, 255, 255, 0.7)" }}>
                  Temple University
                </Typography>
              </TableCell>
              <TableCell>
                <Typography sx={{ color: "rgba(255, 255, 255, 0.7)" }}>Communications</Typography>
              </TableCell>
              <TableCell>
                <Typography sx={{ color: "rgba(255, 255, 255, 0.7)" }}>May 2012</Typography>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default Education;
