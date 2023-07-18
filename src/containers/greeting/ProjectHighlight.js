import React from "react";
import "./Highlightsection.css";
import Highlightsection from "./Highlightsection";
import { Fade } from "react-reveal";

export default function Highl(props) {
  const theme = props.theme;
  return (
    <div className="main" id="Highl">
      <div className="Highl-header-div">
        <Fade bottom duration={2000} distance="20px">
          <h1 className="proj-header" style={{ color: theme.text }}>
            Here's what I do
          </h1>
        </Fade>
      </div>
      <Highlightsection theme={theme} />
    </div>
  );
}
