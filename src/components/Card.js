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

const StyledLiveDot = styled('div')`

.ring-container {
  position: relative;
}

.circle {
  width: 15px;
  height: 15px;
  background-color: #62bd19;
  border-radius: 50%;
  position: absolute;
  top: 23px;
  left: 23px;
}

.ringring {
  border: 3px solid #62bd19;
  -webkit-border-radius: 30px;
  height: 25px;
  width: 25px;
  position: absolute;
  left: 15px;
  top: 15px;
  -webkit-animation: pulsate 1s ease-out;
  -webkit-animation-iteration-count: infinite; 
  opacity: 0.0
}
@-webkit-keyframes pulsate {
  0% {-webkit-transform: scale(0.1, 0.1); opacity: 0.0;}
  50% {opacity: 1.0;}
  100% {-webkit-transform: scale(1.2, 1.2); opacity: 0.0;}
}`

const StyledCard = styled(Paper)(({ theme }) => ({
  borderRadius: "15px",
  border: "1px solid #bdbdbd",
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
            borderBottom: "1px solid #bdbdbd",
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
              target="_blank"
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
              target="_blank"
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
              target="_blank"
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
