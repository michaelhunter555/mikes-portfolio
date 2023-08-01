import { createTheme } from "@mui/material";

export const siteTheme = createTheme({
  components: {
    MuiBackdrop: {
      styleOverrides: {
        root: {
          backgroundColor: "#61616129",
        },
      },
    },
  },
});
