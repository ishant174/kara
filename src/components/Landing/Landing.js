import React from "react";
import "./landing.css";
import { useState } from "react";
import girl from "../../Images/girl.png";
import arrow from "../../Images/arrow-right.svg"
function Landing(props) {
  // const { name } = props;
  const allContent = props.dynamicContent;
  const [hideState, sethide] = useState(false);
  function handelHide() {
    sethide((hideState) => !hideState);
  }
  let checkHide = hideState ? "active" : null;

  const hashtags = allContent.hashtags.split(",");
  //   const generateCategory = () => {
  //     const elements = [];

  //     for (let i = 0; i < items.length; i++) {

  //     }
  // for (const category in allContent.categories) {
  //   if (allContent.categories.hasOwnProperty(category)) {
  //     const value = allContent.categories[category];
  //     console.log(`${category}: ${value}`);
  //     elements.push(<li key={i}>{items[i]}</li>);
  //   }
  // }
  //     return elements;
  //   };
  let contentss = allContent.heading.split("SPLIT")

  return (
    <div id="landing_container">
      <div className="landing_innerContainer">
        <div className="landing_info">
          <h1 className="landing_heading">
            I’m <span className="special_heading">{props.name}</span>,<br />
            {/* {allContent.heading} */}
            {contentss[0]}
            <br />
            {contentss[1]}
            <br />
            {contentss[2]}

          </h1>
          <div className="stand_box">
            <span className="border"></span>
            <p className="standbox_title">WHAT I STAND FOR:</p>
            <div className="tags">
              {hashtags.map((hash) => (
                <p>#{hash}</p>
              ))}
            </div>
          </div>
          <div className="animation_region animation_region_pc">
            {Object.entries(allContent.categories).map(
              ([key, value], index) => (
                <div className="anim">
                  <div className="inner_anim">
                    <p className="top_hide" >{key}</p>
                    <p className="special_hide">{value}</p>
                  </div>
                </div>
              )
            )}
          </div>

          <div className="animation_region animation_region_mobile">
            {Object.entries(allContent.categories).map(
              ([key, value], index) => (
                <div className="anim">
                  <div className="inner_anim">
                    <p className="top_hide" onClick={handelHide}>{key} <span><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <g id="arrow-right-02">
                        <path id="Vector" d="M20 12L3 12" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        <path id="Vector_2" d="M15 17C15 17 20 13.3176 20 12C20 10.6824 15 7 15 7" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                      </g>
                    </svg></span></p>
                    <p  className="special_hide"><span>{value}</span></p>
                  </div>
                </div>
              )
            )}
          </div>

        </div>

        <div className="landing_img">
          <img src={allContent.userimg} />
          <div className={`img_name ${allContent.name}`}>
            <p>{allContent.name}</p>
            <small>(SHE/HER)</small>
          </div>
        </div>
      </div>

      <div className="marquee_outer_wrapper">
        <div className="marquee">
          <div className="track">
            <div className="content">
              <h1>Self-Realization </h1>
              <h1>~</h1>
              <h1>Emerging Market Opportunities</h1>
              <h1>~</h1>
              <h1>DECENTRALIZING CURRENCIES & TECHNOLOGIES</h1>
              <h1>~</h1>
              <h1>COLLABORATIVE WEB3-4 ECOSYSTEM GROWTH</h1>
              <h1>~</h1>
              <h1>Inclusive Platforms</h1>
              <h1>~</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Landing;
