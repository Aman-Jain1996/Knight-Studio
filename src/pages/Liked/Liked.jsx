import React from "react";
import VideocardHorizontal from "../../components/VideoCard-Horizontal/VideocardHorizontal";
import "./Liked.css";

function Liked() {
  return (
    <div className="liked-container">
      <div className="aside-container">
        <div className="aside-image-container">
          <img
            src="https://res.cloudinary.com/ajain8479/image/upload/v1648883017/like_tqjyyw.webp"
            alt="liked-image"
          />
        </div>
        <div className="liked-content">
          <p className="liked-content-heading">Your Liked Videos</p>
          <div className="counter-container">{2} Videos</div>
        </div>
      </div>
      <div className="liked-list">
        <VideocardHorizontal />
        <VideocardHorizontal />
      </div>
    </div>
  );
}

export default Liked;
