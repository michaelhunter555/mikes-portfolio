import React, { useState } from "react";

import { FaGithub, FaYoutube, FaApple, FaAndroid } from "react-icons/fa";

import {
  Box,
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

export const FadeContentBox = styled(Box)(({ theme }) => ({
  position: "relative",
  maxHeight: 150,
  overflow: "hidden",
  "&:after": {
    content: '""',
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    height: "3em",
    background: `linear-gradient(to top, ${theme.palette.background.paper}, transparent)`,
  },
}));

const StyledCard = styled(Paper)(({ theme }) => ({
  borderRadius: "15px",
  border: "1px solid #bdbdbd",
}));

const StyledStack = styled(Stack)(({ theme }) => ({
  padding: 1,
}));

const CardComponent = (props) => {
  const [readMore, setReadMore] = useState(false);

  const handleReadMore = () => setReadMore((prev) => !prev);

  return (
    <StyledCard elevation={0}>
      <Stack>
        <CardMedia
          component="img"
          image={props.imgSrc}
          alt={`${props.title}-image`}
          sx={{
            borderRadius: "15px 15px 0px 0px",
            borderBottom: "1px solid #bdbdbd",
            width: "100%",
            height: "auto",
            objectFit: "contain",
            margin: "0 auto",
            maxHeight: { xs: props.height || "none" },
          }}
        />
      </Stack>
      <StyledStack>
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
          {readMore ? (
            <Typography
              variant="subtitle2"
              color="text.secondary"
              dangerouslySetInnerHTML={{ __html: props.text }}
            />
          ) : (
            <FadeContentBox>
              <Typography
                variant="subtitle2"
                color="text.secondary"
                dangerouslySetInnerHTML={{ __html: props.text }}
              />
            </FadeContentBox>
          )}
          <Button size="small" sx={{ fontSize: 10 }} onClick={handleReadMore}>
            {readMore ? "Read less" : "Read more"}
          </Button>
        </CardContent>

        <CardActions sx={{ width: "100%", borderTop: "1px solid #12121217" }}>
          <Stack
            direction="row"
            alignItems="center"
            justifyContent={"flex-end"}
            spacing={2}
            sx={{ width: "100%" }}
          >
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

{props.ios && (
              <Button
                size="small"
                variant="contained"
                component="a"
                target="_blank"
                href={props.source}
                startIcon={<FaApple style={{ color: "white" }} />}
                sx={{ backgroundColor: "black" }}
              >
                App Store
              </Button>
            )}

{props.android && (
              <Button
                size="small"
                variant="contained"
                component="a"
                target="_blank"
                href={props.source}
                startIcon={<FaAndroid style={{ color: "white" }} />}
                sx={{ backgroundColor: "#0070A9" }}
              >
                Google Play
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
          </Stack>
        </CardActions>
      </StyledStack>
    </StyledCard>
  );
};

export default CardComponent;
