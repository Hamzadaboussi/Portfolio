import React from "react";
import "./Highlightsection.css";

import { Fade } from "react-reveal";



function Highlightsection(props) {
  const theme = props.theme;
  return (
    <div>
      
            <div className="project-main-div">
              

              <div className="projectname-text-div">
                <Fade right duration={1000}>
                  <h1 className="projectname-heading" style={{ color: theme.text }}>
                    Projects Highlight
                  </h1>
                </Fade>
                <Fade right duration={1500}>
                <img
              src="./1.jpg" 
              alt="Project 1"
              className="project-image"
              
            />
                </Fade>
                <Fade right duration={1000}>
                  <h1 className="projectname-heading" style={{ color: theme.text }}>
                  project1
                  </h1>
                </Fade>
                <Fade right duration={1500}>
                <img
              src="./2.jpg" 
              alt="Project 2"
              className="project-image"
            />
                </Fade>
              </div>
            </div>
          
          
    </div>
  );
}

export default Highlightsection;
