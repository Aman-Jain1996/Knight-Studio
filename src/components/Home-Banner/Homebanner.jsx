import React from "react";
import { Link } from "react-router-dom";
import "./Homebanner.css";

export function Homebanner({ imageUrl, heading, content, reversed }) {
  return (
    <div
      style={{ backgroundColor: reversed !== "true" && "white" }}
      className="homebanner-container"
    >
      <div
        className="homebanner-content"
        style={{ order: reversed === "true" ? 1 : -1 }}
      >
        <div className="banner-content-heading">{heading}</div>
        <p className="banner-content-para">{content}</p>
        <Link to="/explore" className="homebanner-button-link">
          <div className="homebanner-button-container">Browse Now</div>
        </Link>
      </div>
      <div className="homebanner-image">
        <img src={imageUrl} alt="banner-image" />
      </div>
    </div>
  );
}
