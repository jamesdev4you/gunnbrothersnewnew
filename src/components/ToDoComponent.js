import React from "react";
import ToDoList from "../components/ToDoList";
import Box from "@mui/material/Box";
import ComponentTitle from "./ComponentTitle";
import "./styles.css";

export default function ToDoComponent(props) {
  return (
    <div className="to-do-section">
      <ComponentTitle words={props.word} />
      <div className="to-do-section-image-and-list">
        <div
          className="customer-service-image"
          style={{
            backgroundImage: `url(${props.src})`,
          }}
        />
        <div className="to-do-section-desc-and-list">
          <div className="to-do-section-desc-container">
            <h2 className="to-do-section-desc-text">{props.desc}</h2>
          </div>
          <ToDoList
            BoxOne={props.BoxOne}
            BoxTwo={props.BoxTwo}
            BoxThree={props.BoxThree}
          />
        </div>
      </div>
    </div>
  );
}
