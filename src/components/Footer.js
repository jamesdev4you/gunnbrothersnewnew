import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
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
          <Typography sx={{ fontFamily: "Ubuntu" }}>
            <Link href="/home" sx={{ textDecoration: "none", color: "black" }}>
              {" "}
              Home{" "}
            </Link>
          </Typography>
          <Typography sx={{ fontFamily: "Ubuntu" }}>
            {" "}
            <Link
              href="/contact"
              sx={{ textDecoration: "none", color: "black" }}
            >
              Contact
            </Link>{" "}
          </Typography>
          <Typography sx={{ fontFamily: "Ubuntu" }}>
            {" "}
            <Link
              href="/serviceestimate"
              sx={{ textDecoration: "none", color: "black" }}
            >
              Service Estimate
            </Link>{" "}
          </Typography>
          <Typography sx={{ fontFamily: "Ubuntu" }}>
            {" "}
            <Link
              href="/services"
              sx={{ textDecoration: "none", color: "black" }}
            >
              Services
            </Link>{" "}
          </Typography>
          <Typography sx={{ fontFamily: "Ubuntu" }}>
            {" "}
            <Link
              href="/aboutus"
              sx={{ textDecoration: "none", color: "black" }}
            >
              About Us
            </Link>{" "}
          </Typography>
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
          <Typography sx={{ fontFamily: "Ubuntu" }}>
            {" "}
            <Link
              href="/services"
              sx={{ textDecoration: "none", color: "black" }}
            >
              Insulation
            </Link>{" "}
          </Typography>
          <Typography sx={{ fontFamily: "Ubuntu" }}>
            {" "}
            <Link
              href="/services"
              sx={{ textDecoration: "none", color: "black" }}
            >
              HVAC
            </Link>{" "}
          </Typography>
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
          <Typography sx={{ fontFamily: "Ubuntu" }}>
            <Link
              href="tel:8139652281"
              sx={{ textDecoration: "none", color: "black" }}
            >
              813-965-2281{" "}
            </Link>{" "}
          </Typography>
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
