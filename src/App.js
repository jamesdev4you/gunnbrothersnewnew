import "./App.css";
import "./index.css";
import React from "react";
import Home from "./pageComponents/Home";
import Contact from "./pageComponents/Contact";
import PriceEstimate from "./pageComponents/PriceEstimate";
import Services from "./pageComponents/Services";
import AboutUs from "./pageComponents/AboutUs";
import FooterMenu from "./components/FooterMenu";
import NeedHelp from "./components/NeedHelp";
import HamburgerMenu from "./components/HamburgerMenu";
import CssBaseline from "@material-ui/core/CssBaseline";
import { ThemeProvider } from "@material-ui/core/styles";
import { createTheme } from "@material-ui/core/styles";
import { Route, Routes } from "react-router-dom";

const theme = createTheme({
  palette: {
    primary: {
      main: "#000000",
    },
    secondary: {
      main: "#98c1d9",
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <NeedHelp />
      <HamburgerMenu color="primary" colors="secondary" />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/contact" element={<Contact />} />
        <Route exact path="/serviceestimate" element={<PriceEstimate />} />
        <Route exact path="/services" element={<Services />} />
        <Route exact path="/aboutus" element={<AboutUs />} />
      </Routes>
      <FooterMenu />
    </ThemeProvider>
  );
}

export default App;
