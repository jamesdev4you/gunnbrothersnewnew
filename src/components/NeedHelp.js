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

  return (
    <Box className="boxStyles">
      <h1 className="text">Hey, Need Help?</h1>
      <Button
        sx={{
          color: "black",
          fontSize: { xs: "18px", lg: "30px" },
          "&:hover": {
            backgroundColor: "#5d8c96",
            color: "#5f0c16",
          },
        }}
        className="buttonStyles"
        href="tel:8139652281"
        variant="text"
      >
        <PhoneIcon className="phoneStyles" />
        813-965-2281
      </Button>
    </Box>
  );
}
