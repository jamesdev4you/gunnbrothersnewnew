import "./styles.css";
import React from "react";
import Button from "@mui/material/Button";
import { NavLink } from "react-router-dom";

export default function ContactButton() {
  return (
    <NavLink underline="none" className="contact-button" to="/contact">
      Contact Us Now
    </NavLink>
  );
}
