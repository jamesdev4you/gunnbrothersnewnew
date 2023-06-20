import "./styles.css";
import React, { Fragment, useRef, useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import IconButton from "@material-ui/core/IconButton";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 500,
    border: "3px solid #95242a",
    backgroundColor: "#c1d8de",
    margin: "auto",
    boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
    paddingTop: "8px",
  },
  cardActions: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  },
  cardContent: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  iconButton: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "0",
    paddingTop: "11px",
    paddingLeft: "11px",
    "&:hover": {
      backgroundColor: "#c1d8de",
    },
  },
  icon: {
    transform: "scale(1.4)",
    color: "#95242a",
  },
  icons: {
    transform: "scale(2)",
    color: "#dd919d",
  },
}));

export default function HomeIcons(props) {
  const [hoverRef, isHovered] = useHover();

  function useHover() {
    const [value, setValue] = useState(false);

    const ref = useRef(null);

    const handleMouseOver = () => setValue(true);
    const handleMouseOut = () => setValue(false);

    useEffect(() => {
      const node = ref.current;
      if (node) {
        node.addEventListener("mouseover", handleMouseOver);
        node.addEventListener("mouseout", handleMouseOut);
        return () => {
          node.removeEventListener("mouseover", handleMouseOver);
          node.removeEventListener("mouseout", handleMouseOut);
        };
      }
    });
    return [ref, value];
  }

  function DescriptionDisplay() {
    return (
      <div
        style={{
          textAlign: "center",
          fontFamily: "Ubuntu",
          color: "#dd919d",
        }}
      >
        <h2 style={{ fontFamily: "Ubuntu" }}>{props.homeIcons.details}</h2>
      </div>
    );
  }

  function TextDisplay() {
    return (
      <h1
        style={{
          color: "#95242a",
          fontSize: "30px",
          fontFamily: "Ubuntu",
        }}
      >
        {props.homeIcons.name}
      </h1>
    );
  }

  const classes = useStyles();

  return (
    <Fragment>
      <Card className={classes.root} ref={hoverRef}>
        <CardContent className={classes.cardContent}>
          {isHovered ? null : TextDisplay()}
          <IconButton
            component={Link}
            to={props.homeIcons.to}
            className={classes.iconButton}
          >
            {isHovered ? (
              <props.homeIcons.icon className={classes.icons} />
            ) : (
              <props.homeIcons.icon
                className={classes.icon}
                sx={{ paddingBottom: "0px" }}
              />
            )}
          </IconButton>
        </CardContent>
        <CardActions className={classes.cardActions}>
          <div>{isHovered ? DescriptionDisplay() : null}</div>
        </CardActions>
        <Collapse>
          <CardContent></CardContent>
        </Collapse>
      </Card>
    </Fragment>
  );
}
