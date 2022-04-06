import React from "react";
import { Link } from "react-router-dom";
import "./Homebanner.css";

function Homebanner({ imageUrl, heading, content, reversed }) {
  return (
    <div className="homebanner-container">
      <div
        className="homebanner-content"
        style={{ order: reversed === "true" ? 1 : -1 }}
      >
        <div className="banner-content-heading">{heading}</div>
        <p className="banner-content-para">{content}</p>
        <div className="homebanner-button-container">
          <Link to="" className="homebanner-button-link">
            Browse Now
          </Link>
        </div>
      </div>
      <div className="homebanner-image">
        <img src={imageUrl} alt="banner-image" />
      </div>
    </div>
  );
}

export default Homebanner;
