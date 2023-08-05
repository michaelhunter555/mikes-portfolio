import React from "react";

import { ThemeProvider } from "@mui/material";

import ScrollToTop from "./components/ScrollToTop";
import Home from "./routes/Home";
import { siteTheme } from "./utils/sitetheme";

function App() {
  return (
    <ThemeProvider theme={siteTheme}>
      <ScrollToTop />
      <Home />
    </ThemeProvider>
  );
}

export default App;
