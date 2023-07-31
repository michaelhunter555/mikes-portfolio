import React from "react";

import { FaGithub, FaYoutube } from "react-icons/fa";

import {
  Button,
  CardActions,
  CardContent,
  CardMedia,
  Paper,
  Stack,
  Tooltip,
  Typography,
} from "@mui/material";
import { styled } from "@mui/material/styles";

const StyledCard = styled(Paper)(({ theme }) => ({
  borderRadius: "15px",
  border: "1px solid black",
}));

const StyledStack = styled(Stack)(({ theme }) => ({
  padding: 1,
}));

const CardComponent = (props) => {
  return (
    <StyledCard elevation={0}>
      <StyledStack>
        <CardMedia
          component="img"
          image={props.imgSrc}
          height="300px"
          alt={`${props.title}-image`}
          sx={{
            borderRadius: "15px 15px 0px 0px",
            borderBottom: "1px solid black",
          }}
        />
        <CardContent>
          <Stack direction="row" alignItems="center" spacing={2}>
            <Typography variant="body1" color="black">
              {props.title}
            </Typography>
            {props.stack.map((item, i) => (
              <Stack key={i} spacing={2}>
                <Tooltip title={item.name} placement="top">
                  <div>{item.icon}</div>
                </Tooltip>
              </Stack>
            ))}
          </Stack>
          <Typography variant="subtitle2" color="text.secondary">
            {props.text.length > 200
              ? props.text.substring(0, 225)
              : props.text}
          </Typography>
        </CardContent>

        <CardActions>
          {props.view && (
            <Button
              size="small"
              variant="contained"
              component="a"
              href={props.view}
            >
              View
            </Button>
          )}

          {props.source && (
            <Button
              size="small"
              variant="contained"
              component="a"
              href={props.source}
              startIcon={<FaGithub style={{ color: "white" }} />}
              sx={{ backgroundColor: "black" }}
            >
              Github
            </Button>
          )}

          {props.youtube && (
            <Button
              size="small"
              variant="outlined"
              component="a"
              href={props.youtube}
              startIcon={<FaYoutube style={{ color: "red" }} />}
              sx={{ color: "black", borderColor: "black" }}
            >
              Youtube
            </Button>
          )}
        </CardActions>
      </StyledStack>
    </StyledCard>
  );
};

export default CardComponent;
