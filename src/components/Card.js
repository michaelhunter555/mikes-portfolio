import React from "react";

import { FaGithub } from "react-icons/fa";

import {
  Button,
  CardActions,
  CardContent,
  CardMedia,
  Divider,
  Paper,
  Stack,
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
          height="100%"
          alt={`${props.title}-image`}
          sx={{ borderRadius: "15px 15px 0px 0px" }}
        />
        <CardContent>
          <Stack direction="row" alignItems="center" spacing={2}>
            <Typography variant="body1" color="black">
              {props.title}
            </Typography>
            {props.stack.map((item, i) => (
              <Stack key={i} spacing={2}>
                {item}
              </Stack>
            ))}
          </Stack>
          <Typography variant="subtitle2" color="text.secondary">
            {props.text}
          </Typography>
        </CardContent>
        <Divider />
        <CardActions>
          <Button startIcon={<FaGithub />}>Github</Button>
          <Button>Live View</Button>
        </CardActions>
      </StyledStack>
    </StyledCard>
  );
};

export default CardComponent;
