import React from "react";
import "./styles.css";
import HomeIcons from "./HomeIcons";
import { Grid } from "@material-ui/core";

export default function HomePageGrid(props) {
  return (
    <Grid container spacing={2} className="grid">
      <Grid item xs={12}>
        <HomeIcons homeIcons={props.BoxOne} />
      </Grid>
      <Grid item xs={12}>
        <HomeIcons homeIcons={props.BoxTwo} />
      </Grid>
      <Grid item xs={12}>
        <HomeIcons homeIcons={props.BoxThree} />
      </Grid>
    </Grid>
  );
}
