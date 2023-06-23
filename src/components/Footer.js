import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { NavLink } from "react-router-dom";
import InstagramIcon from "@mui/icons-material/Instagram";
import IconButton from "@material-ui/core/IconButton";
import "../index.css";

export default function Footer() {
  return (
    <Box
      sx={{
        borderTop: "1px solid black",
        width: "100%",
        height: "100%",
        backgroundColor: "#B9B9B9",
      }}
    >
      <Box
        sx={{
          width: "90%",
          height: "auto",
          margin: "auto",
          display: "flex",
          justifyContent: "space-around",
          alignItems: "start",
          flexWrap: "wrap",
        }}
      >
        <Box
          sx={{
            width: {
              xl: "20%",
              lg: "20%",
              md: "50%",
              sm: "50%",
              xs: "90%",
            },
            height: "90%",
            display: "flex",
            flexDirection: "column",
            alignItems: "start",
            padding: "30px",
          }}
        >
          <Typography
            sx={{
              fontFamily: "Ubuntu",
              marginBottom: "20px",
              borderBottom: "1px solid black",
            }}
          >
            {" "}
            Pages{" "}
          </Typography>
          <NavLink
            style={{
              textDecoration: "none",
              color: "black",
              fontFamily: "Ubuntu",
              fontSize: "16px",
              margin: "3px",
            }}
            to="/home"
          >
            Home
          </NavLink>
          <NavLink
            style={{
              textDecoration: "none",
              color: "black",
              fontFamily: "Ubuntu",
              fontSize: "16px",
              margin: "3px",
            }}
            to="/contact"
          >
            Contact
          </NavLink>
          <NavLink
            style={{
              textDecoration: "none",
              color: "black",
              fontFamily: "Ubuntu",
              fontSize: "16px",
              margin: "3px",
            }}
            to="/serviceestimate"
          >
            Service Estimate
          </NavLink>
          <NavLink
            style={{
              textDecoration: "none",
              color: "black",
              fontFamily: "Ubuntu",
              fontSize: "16px",
              margin: "3px",
            }}
            to="/services"
          >
            Services
          </NavLink>
          <NavLink
            style={{
              textDecoration: "none",
              color: "black",
              fontFamily: "Ubuntu",
              fontSize: "16px",
              margin: "3px",
            }}
            to="/aboutus"
          >
            About Us
          </NavLink>
        </Box>
        <Box
          sx={{
            width: {
              xl: "20%",
              lg: "20%",
              md: "50%",
              sm: "50%",
              xs: "90%",
            },
            height: "90%",
            display: "flex",
            flexDirection: "column",
            alignItems: "start",
            padding: "30px",
          }}
        >
          <Typography
            sx={{
              fontFamily: "Ubuntu",
              marginBottom: "20px",
              borderBottom: "1px solid black",
            }}
          >
            {" "}
            Services{" "}
          </Typography>
          <NavLink
            style={{
              textDecoration: "none",
              color: "black",
              fontFamily: "Ubuntu",
              fontSize: "16px",
              margin: "3px",
            }}
            to="/services"
          >
            Insulation
          </NavLink>
          <NavLink
            style={{
              textDecoration: "none",
              color: "black",
              fontFamily: "Ubuntu",
              fontSize: "18px",
              margin: "3px",
            }}
            to="/services"
          >
            HVAC
          </NavLink>
        </Box>
        <Box
          sx={{
            width: {
              xl: "20%",
              lg: "20%",
              md: "50%",
              sm: "50%",
              xs: "90%",
            },
            height: "90%",
            display: "flex",
            flexDirection: "column",
            alignItems: "start",
            padding: "30px",
          }}
        >
          <Typography
            sx={{
              fontFamily: "Ubuntu",
              marginBottom: "20px",
              borderBottom: "1px solid black",
            }}
          >
            {" "}
            Contact{" "}
          </Typography>
          <NavLink
            style={{
              textDecoration: "none",
              color: "black",
              fontFamily: "Ubuntu",
              fontSize: "16px",
              margin: "3px",
            }}
            to="/contact"
          >
            813-965-2281
          </NavLink>
          <IconButton
            sx={{ padding: "0px", "&:hover": { backgroundColor: "none" } }}
          >
            <InstagramIcon
              onClick={(event) =>
                (window.location.href =
                  "https://www.instagram.com/gunnbrothershvacllc/")
              }
              style={{
                color: "#DB0F27",
                width: 30,
                height: 30,
              }}
            />
          </IconButton>
        </Box>
        <Box
          sx={{
            width: {
              xl: "20%",
              lg: "20%",
              md: "50%",
              sm: "50%",
              xs: "90%",
            },
            height: "90%",
            display: "flex",
            flexDirection: "column",
            alignItems: "start",
            padding: "30px",
          }}
        >
          <Typography
            sx={{
              fontFamily: "Ubuntu",
              marginBottom: "20px",
              borderBottom: "1px solid black",
            }}
          >
            {" "}
            Hours{" "}
          </Typography>
          <Typography sx={{ fontFamily: "Ubuntu" }}>
            {" "}
            M: 10:00am-10:00pm{" "}
          </Typography>
          <Typography sx={{ fontFamily: "Ubuntu" }}>
            {" "}
            Tu: 10:00am-10:00pm{" "}
          </Typography>
          <Typography sx={{ fontFamily: "Ubuntu" }}>
            {" "}
            Wed: 10:00am-10:00pm{" "}
          </Typography>
          <Typography sx={{ fontFamily: "Ubuntu" }}>
            {" "}
            Th: 10:00am-10:00pm{" "}
          </Typography>
          <Typography sx={{ fontFamily: "Ubuntu" }}>
            {" "}
            Fri: 10:00am-10:00pm{" "}
          </Typography>
          <Typography sx={{ fontFamily: "Ubuntu" }}>
            {" "}
            Sat: 10:00am-10:00pm{" "}
          </Typography>
          <Typography sx={{ fontFamily: "Ubuntu" }}>
            {" "}
            Sun: 10:00am-10:00pm{" "}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}
