import React, { useEffect, useState } from "react";

import { SiCodewars } from "react-icons/si";

import {
  Box,
  Button,
  Grid,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import { styled } from "@mui/material/styles";

const StyledCard = styled("div")(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  padding: 5,
  margin: "0 auto",
}));

const userId = "sleepcoding555";
const date = new Date();

const CodeWars = () => {
  const [user, setUser] = useState(null);
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    const getCodeWarsUser = async (userName) => {
      const response = await fetch(
        `https://www.codewars.com/api/v1/users/${userName}`
      );

      if (!response.ok) {
        throw new Error(
          "Please review your code as there was an issue with retreiving data."
        );
      }

      const data = await response.json();
      setUser(data);
    };
    getCodeWarsUser(userId);
  }, []);
  console.log(user);

  const showKataDataHandler = () => {
    setToggle((prev) => !prev);
  };

  return (
    <>
      <StyledCard>
        <Grid
          container
          direction="column"
          spacing={1}
          justifyContent="flex-start"
          alignItems="center"
        >
          <Grid item sx={{ marginTop: 2 }}>
            <Stack>
              <Button
                startIcon={<SiCodewars size={20} />}
                size="small"
                variant="outlined"
                onClick={showKataDataHandler}
                sx={{ color: "#333", borderColor: "#333" }}
              >
                {toggle ? "Close Table" : "CodeWars Stats"}
              </Button>
            </Stack>
          </Grid>
        </Grid>
      </StyledCard>
      {toggle && (
        <TableContainer sx={{ margin: "0 auto" }}>
          <Typography
            sx={{ marginLeft: 2, fontSize: 11 }}
            variant="subtitle2"
            color="text.secondary"
          >
            as of {date.toISOString().split("T")[0]} via CodeWars API
          </Typography>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>rank</TableCell>
                <TableCell>color</TableCell>
                <TableCell>points</TableCell>
                <TableCell>score</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {user && (
                <TableRow>
                  <TableCell>
                    {Math.abs(user.ranks.languages.javascript.rank)}
                  </TableCell>
                  <TableCell>{user.ranks.languages.javascript.color}</TableCell>
                  <TableCell>{user.ranks.languages.javascript.score}</TableCell>
                  <TableCell>
                    <Box
                      sx={{
                        height: "10px",
                        width: "10px",
                        backgroundColor: user.ranks.languages.javascript.color,
                      }}
                    ></Box>
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
      )}
    </>
  );
};

export default CodeWars;
