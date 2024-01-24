import React from "react";
import "./value.css";
import watermark from "../../Images/watermark1.svg";
import rupay from "../../Images/rupay.png";
import power from "../../Images/Powered By.svg";
import ReactPlayer from "react-player";

function Value(props) {
  const allContent = props.dynamicContent;
  console.log(allContent);
  return (
    <div className="value_container" id="value">
      <div className="value_content">
        <h1 className="value_heading">MY VALUE</h1>
        <p>{allContent.value}</p>
      </div>

      <div className="value_media" id="media">
        <div className="video_box">
          <div className="video-heading">
            <h1>Si Her TV</h1>
            <div className="lines">
              <span className="bold_line"></span>
              <span className="light_line"></span>
            </div>
            <small>
              <img
                src="https://kara.siher.eth.limo/images/Powered%20by%20Livepeer.png"
                alt=""
              />
            </small>
          </div>
          <div className="video">
            <iframe
              src={allContent.uservideo}
              frameborder="0"
              allowfullscreen
              allow="autoplay; encrypted-media; picture-in-picture;cover"
              sandbox="allow-same-origin allow-scripts"
              width="100"
              height="100"
            ></iframe>
          </div>
        </div>
      </div>

      <div className="value_links">
        {Object.entries(allContent.links).map(([key, value], index) => (
          <a href={value}> {key}</a>
        ))}
        {/* <a href=""> WeAreSi3</a>
        <a href="">Unlocking NFT´s for Meta Impact</a>
        <a href="">Diversity in the New Economy</a> */}
      </div>
      <div className="pay_btns">
        <button className="support">Support Kara In Crypto </button>
        {/* <button className="Rupay">
          <img src={rupay} alt="" />
        </button> */}
      </div>
    </div>
  );
}

export default Value;
