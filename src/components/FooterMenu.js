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
      <div className="footer-phone">
        <PhoneIcon style={{ color: "#DB0F27" }} />
        <Link
          href="tel:8139652281"
          underline="none"
          style={{
            fontSize: "29px",
            marginLeft: "5px",
            color: "#DB0F27",
            "&:hover": { color: "#DB0F27" },
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
            onClick={(event) =>
              (window.location.href =
                "https://www.instagram.com/gunnbrothershvacllc/")
            }
            style={{
              color: "#DB0F27",
              width: 100,
              height: 100,
            }}
          />
        </IconButton>
      </div>
    </Box>
  );
}
