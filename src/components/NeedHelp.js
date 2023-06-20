import React from "react";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import PhoneIcon from "@mui/icons-material/Phone";

export default function NeedHelp() {
  return (
    <Box className="boxStyles">
      <h1 className="text">Hey, Need Help?</h1>
      <Button
        sx={{
          color: "black",
          fontSize: { xs: "18px", lg: "30px" },
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
