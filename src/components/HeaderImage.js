import "./styles.css";
import React from "react";
import ContactButton from "./ContactButton";

export default function HeaderImage(props) {
  return (
    <div
      className="header-image"
      style={{
        backgroundImage: `url(${props.src})`,
      }}
    >
      <div className="header-image-div">
        <div className="align-row">
          <div className="header-line" />
          <h1 className="header-boxwordsone">{props.boxWords.word1}</h1>
          <div className="header-line" />
        </div>
        <div className="align-row">
          <h1 className="header-boxwordstwo">{props.boxWords.word2}</h1>
        </div>
        <div className="align-row">
          <h1 className="header-boxwordsthree">{props.boxWords.word3}</h1>
        </div>
        <div className="align-row">
          <ContactButton />
        </div>
      </div>
    </div>
  );
}
