import "./styles.css";
import Logo from "../assets/Logo.png";
import PhoneIcon from "@mui/icons-material/Phone";
import InstagramIcon from "@mui/icons-material/Instagram";
import Box from "@material-ui/core/Box";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import Link from "@mui/material/Link";

export default function FooterMenu() {
  return (
    <Box className="footerContainer">
      <div className="footerGunnLogo">
        <Box
          className="Logo"
          component="img"
          style={{
            height: "120px",
          }}
          alt="Gunn Brothers Logo"
          src={Logo}
        />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "start",
            justifyContent: "center",
          }}
        >
          <Typography style={{ fontSize: "20px" }}>
            ©2023 Gunn Brothers
          </Typography>
          <Typography style={{ fontSize: "15px" }}>
            Made by @JamesDev4You
          </Typography>
        </div>
      </div>
      <div
        style={{
          display: "flex",
        }}
      >
        <PhoneIcon style={{ color: "#95242a", paddingTop: "3px" }} />
        <Link
          href="tel:8139652281"
          underline="none"
          style={{
            fontSize: "20px",
            marginLeft: "5px",
            color: "#95242a",
            "&:hover": { color: "#95242a" },
          }}
        >
          813-965-2281
        </Link>
      </div>
      <div className="footerInstagram">
        <IconButton
          style={{
            backgroundColor: "#98c1d9",
          }}
        >
          <InstagramIcon
            onClick={(event) => (window.location.href = "#")}
            style={{
              color: "#95242a",
              width: 100,
              height: 100,
            }}
          />
        </IconButton>
      </div>
    </Box>
  );
}
