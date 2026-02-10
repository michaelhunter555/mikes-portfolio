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
    background: `linear-gradient(to top, rgba(0, 0, 0, 0.8), transparent)`,
  },
}));

const StyledCard = styled(Paper)(({ theme }) => ({
  borderRadius: "12px",
  border: "1px solid rgba(255, 255, 255, 0.1)",
  background: "rgba(255, 255, 255, 0.02)",
  backdropFilter: "blur(10px)",
  transition: "all 0.3s ease",
  "&:hover": {
    borderColor: "rgba(255, 255, 255, 0.2)",
    transform: "translateY(-4px)",
    boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.3), 0 10px 10px -5px rgba(0, 0, 0, 0.2)",
  },
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
            borderRadius: "12px 12px 0px 0px",
            borderBottom: "1px solid rgba(255, 255, 255, 0.1)",
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
            <Typography variant="body1" sx={{ color: "#ffffff", fontWeight: 600 }}>
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
              sx={{ color: "rgba(255, 255, 255, 0.7)", lineHeight: 1.6 }}
              dangerouslySetInnerHTML={{ __html: props.text }}
            />
          ) : (
            <FadeContentBox>
              <Typography
                variant="subtitle2"
                sx={{ color: "rgba(255, 255, 255, 0.7)", lineHeight: 1.6 }}
                dangerouslySetInnerHTML={{ __html: props.text }}
              />
            </FadeContentBox>
          )}
          <Button 
            size="small" 
            sx={{ 
              fontSize: 12, 
              color: "rgba(255, 255, 255, 0.6)",
              "&:hover": { color: "#ffffff" },
              textTransform: "none",
            }} 
            onClick={handleReadMore}
          >
            {readMore ? "Read less" : "Read more"}
          </Button>
        </CardContent>

        <CardActions sx={{ width: "100%", borderTop: "1px solid rgba(255, 255, 255, 0.1)" }}>
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
                sx={{
                  backgroundColor: "#ffffff",
                  color: "#000000",
                  textTransform: "none",
                  "&:hover": {
                    backgroundColor: "rgba(255, 255, 255, 0.9)",
                  },
                }}
              >
                View
              </Button>
            )}

            {props.source && (
              <Button
                size="small"
                variant="outlined"
                component="a"
                target="_blank"
                href={props.source}
                startIcon={<FaGithub />}
                sx={{
                  borderColor: "rgba(255, 255, 255, 0.3)",
                  color: "#ffffff",
                  textTransform: "none",
                  "&:hover": {
                    borderColor: "rgba(255, 255, 255, 0.5)",
                    backgroundColor: "rgba(255, 255, 255, 0.05)",
                  },
                }}
              >
                Github
              </Button>
            )}

{props.ios && (
              <Button
                size="small"
                variant="outlined"
                component="a"
                target="_blank"
                href={props.ios}
                startIcon={<FaApple />}
                sx={{
                  borderColor: "rgba(255, 255, 255, 0.3)",
                  color: "#ffffff",
                  textTransform: "none",
                  "&:hover": {
                    borderColor: "rgba(255, 255, 255, 0.5)",
                    backgroundColor: "rgba(255, 255, 255, 0.05)",
                  },
                }}
              >
                App Store
              </Button>
            )}

{props.android && (
              <Button
                size="small"
                variant="outlined"
                component="a"
                target="_blank"
                href={props.android}
                startIcon={<FaAndroid />}
                sx={{
                  borderColor: "rgba(255, 255, 255, 0.3)",
                  color: "#ffffff",
                  textTransform: "none",
                  "&:hover": {
                    borderColor: "rgba(255, 255, 255, 0.5)",
                    backgroundColor: "rgba(255, 255, 255, 0.05)",
                  },
                }}
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
                startIcon={<FaYoutube style={{ color: "#ff0000" }} />}
                sx={{
                  borderColor: "rgba(255, 255, 255, 0.3)",
                  color: "#ffffff",
                  textTransform: "none",
                  "&:hover": {
                    borderColor: "rgba(255, 255, 255, 0.5)",
                    backgroundColor: "rgba(255, 255, 255, 0.05)",
                  },
                }}
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
