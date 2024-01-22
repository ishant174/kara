import React from "react";
import "./cv.css";
function CV(props) {
  const allContent = props.dynamicContent;
  return (
    <div id="cv">
      <div className="cv_container">
        <h1>CV Highlights</h1>
        {Object.entries(allContent.cv_highlights).map(([key, value], index) => (
          <div className="highlights">
            <div className="data">
              <div className="date">
                <p>{key}</p>
              </div>
              <div className="info">
                <p> {value}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CV;
