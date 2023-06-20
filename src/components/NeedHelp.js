import React from "react";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import PhoneIcon from "@mui/icons-material/Phone";

export default function NeedHelp() {
  const buttonStyles = {
    color: "#95242a",
    backgroundColor: "#5d8c96",
    fontSize: "30px",
    padding: "auto",
    "&:hover": {
      backgroundColor: "#5d8c96",
      color: "#DB0F27",
    },
  };

  const boxStyles = {
    width: "100%",
    height: "90px",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#5d8c96",
  };

  const phoneStyles = {
    color: "#95242a",
    marginLeft: "20px",
    marginRight: "5px",
  };

  return (
    <Box sx={boxStyles}>
      <h1 className="text">Hey, Need Help?</h1>
      <PhoneIcon sx={phoneStyles} />
      <Button
        style={{
          color: "#95242a",
          fontSize: "30px",
          "&:hover": {
            backgroundColor: "#5d8c96",
            color: "#5f0c16",
          },
        }}
        className="buttonStyles"
        href="tel:8139652281"
        variant="text"
      >
        813-965-2281
      </Button>
    </Box>
  );
}
