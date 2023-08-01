import "./index.scss";
import "animate.css";

import React from "react";

import { Route, Routes, useLocation } from "react-router-dom";

import { ThemeProvider } from "@mui/material";

import ScrollToTop from "./components/ScrollToTop";
import Contact from "./routes/Contact";
import Home from "./routes/Home";
import { siteTheme } from "./utils/sitetheme";

function App() {
  const location = useLocation();
  return (
    <ThemeProvider theme={siteTheme}>
      <ScrollToTop />
      <animationConfiguration exitBeforeEnter>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />

          <Route path="/contact" element={<Contact />} />
        </Routes>
      </animationConfiguration>
    </ThemeProvider>
  );
}

export default App;
