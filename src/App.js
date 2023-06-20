import "./App.css";
import "./index.css";
import React from "react";
import Home from "./pageComponents/Home";
import Contact from "./pageComponents/Contact";
import PriceEstimate from "./pageComponents/PriceEstimate";
import Services from "./pageComponents/Services";
import AboutUs from "./pageComponents/AboutUs";
import Footer from "./components/Footer";
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

      <HamburgerMenu color="primary" colors="secondary" />
      <NeedHelp />
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/contact" element={<Contact />} />
        <Route path="/serviceestimate" element={<PriceEstimate />} />
        <Route path="/services" element={<Services />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="*" element={<Home />} />
      </Routes>
      <Footer />
    </ThemeProvider>
  );
}

export default App;
