import React from "react";
import "./vision.css";
function Vision(props) {
  const allContent = props.dynamicContent;
  return (
    <div className="vision_container" id="vision">
      <div className="inner-container">
        <h1>My Vision</h1>
        <p>{allContent.vision}</p>
      </div>
    </div>
  );
}

export default Vision;
