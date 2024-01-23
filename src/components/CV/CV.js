import React from "react";
import "./cv.css";
function CV(props) {
  const allContent = props.dynamicContent;
  const sortedKeys = Object.keys(allContent.cv_highlights).sort().reverse();


  return (
    <div id="cv">
      <div className="cv_container">
        <h1>CV Highlights</h1>
        {/* {Object.entries(allContent.cv_highlights).map(([key, value], index) => ( */}
        {sortedKeys.map((year, index) => (
          <div className="highlights">
            <div className="data">
              <div className="date">
                <p>{year}</p>
              </div>
              <div className="info">
                <p>{allContent.cv_highlights[year]}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CV;
