import React from "react";
import "./styles.css";

export default function ComponentTitle(props) {
  return (
    <div className="align-row-component-title">
      <div className="header-line" />
      <h1 className="component-title-header">{props.words}</h1>
      <div className="header-line" />
    </div>
  );
}
