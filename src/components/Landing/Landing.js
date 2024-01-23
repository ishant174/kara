import React from "react";
import "./landing.css";

function Landing(props) {
  // const { name } = props;
  const allContent = props.dynamicContent;

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

  return (
    <div id="landing_container">
      <div className="landing_innerContainer">
        <div className="landing_info">
          <h1 className="landing_heading">
            I’m <span className="special_heading">{props.name}</span>
            {allContent.heading}
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
          <div className="animation_region">
            {Object.entries(allContent.categories).map(
              ([key, value], index) => (
                <div className="anim">
                  <div className="inner_anim">
                    <p className="top_hide">{key}</p>
                    <p className="special_hide">{value}</p>
                  </div>
                </div>
              )
            )}
          </div>
        </div>

        <div className="landing_img">
          <img src="https://kara.siher.eth.limo/images/karafuture.png" alt="" />
          <div className="img_name">
            <p>{allContent.name}</p>
            <small>(SHE/HER)</small>
          </div>
        </div>
      </div>

      <div className="marquee_outer_wrapper">
        <div className="marquee">
          <div className="track">
            <div className="content">
              <h1>~ Collaborative web3-4 </h1>
              <h1>~ Focused</h1>
              <h1>~ decentralizing currencies & technologies</h1>

              <h1>~ Collaborative web3-4 ecosystem growth</h1>
              <h1>~ Focused</h1>
              <h1>~ decentralizing currencies & technologies</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Landing;
