import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { makeStyles } from "@material-ui/core";
import AppBar from "@material-ui/core/AppBar";
import ToolBar from "@material-ui/core/Toolbar";
import Container from "@material-ui/core/Container";
import Logo from "../assets/Logo.png";
import Box from "@material-ui/core/Box";
import Hidden from "@material-ui/core/Hidden";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import Divider from "@material-ui/core/Divider";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";

const navigationLinks = [
  { name: "Home", href: "/" },
  { name: "Contact", href: "/contact" },
  { name: "Service Estimate", href: "/serviceestimate" },
  { name: "Services", href: "/services" },
  { name: "About Us", href: "/aboutus" },
];

const useStyles = makeStyles((theme) => ({
  active: {
    color: "#95242a",
  },
  link: {
    marginRight: 30,
    fontSize: "20px",
    transition: "background .5s, color .5s",
    textDecoration: "none",
    color: "black",
    "&:hover": {
      color: "#95242a",
    },
  },
  Logo: {
    marginRight: "auto",
  },
  Button: {
    backgroundColor: "#293241",
  },
  List: {
    backgroundColor: "#98c1d9",
  },
  Paper: {
    backgroundColor: "#98c1d9",
  },
  Div: {
    backgroundColor: "#98c1d9",
  },
  Divider: {
    backgroundColor: "#98c1d9",
  },
}));

export default function HamburgerMenu(props) {
  const styles = useStyles();
  const [open, setOpen] = useState(false);
  return (
    <AppBar
      elevation={0}
      style={{
        backgroundColor: "#c1d8de",
        borderBottom: "1px solid black",
      }}
      position="sticky"
    >
      <Container maxWidth="xl">
        <ToolBar disableGutters>
          <Box
            className={styles.Logo}
            component="img"
            style={{
              height: "120px",
            }}
            alt="Gunn Brothers Logo"
            src={Logo}
          />
          <Hidden smDown>
            {navigationLinks.map((item) => (
              <NavLink
                className={styles.link}
                activeClassName={styles.active}
                color={props.color}
                variant="button"
                underline="none"
                to={item.href}
              >
                {item.name}
              </NavLink>
            ))}
          </Hidden>
          <Hidden mdUp>
            <IconButton onClick={() => setOpen(true)}>
              <MenuIcon />
            </IconButton>
          </Hidden>
        </ToolBar>
      </Container>
      <SwipeableDrawer
        anchor="right"
        open={open}
        onOpen={() => setOpen(true)}
        onClose={() => setOpen(false)}
        classes={{ paper: styles.Paper }}
      >
        <div
          onClick={() => setOpen(false)}
          onKeyPress={() => setOpen(false)}
          role="button"
          tabIndex={0}
          className={styles.Div}
        >
          <IconButton>
            <ChevronRightIcon />
          </IconButton>
        </div>
        <Divider className={styles.Divider} />
        <List className={styles.List}>
          {navigationLinks.map((item) => (
            <ListItem key={item.name}>
              <NavLink
                activeClassName={styles.active}
                className={styles.link}
                color={props.color}
                variant="button"
                underline="none"
                to={item.href}
              >
                {item.name}
              </NavLink>
            </ListItem>
          ))}
        </List>
      </SwipeableDrawer>
    </AppBar>
  );
}
