import React from "react";
import "./value.css";
import watermark from "../../Images/watermark.png";
import rupay from "../../Images/rupay.png";

function Value(props) {
  const allContent = props.dynamicContent;
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
              Powered By <img src={watermark} alt="" />
            </small>
          </div>
          <div className="video">
            <img
              src="https://kara.siher.eth.limo/images/karafuture.png"
              alt=""
            />
          </div>
        </div>
      </div>

      <div className="value_links">
        <a href=""> WeAreSi3</a>
        <a href="">Unlocking NFT´s for Meta Impact</a>
        <a href="">Diversity in the New Economy</a>
      </div>
      <div className="pay_btns">
        <button className="support">Support Kara In Crypto </button>
        <button className="Rupay">
          <img src={rupay} alt="" />
        </button>
      </div>
    </div>
  );
}

export default Value;
