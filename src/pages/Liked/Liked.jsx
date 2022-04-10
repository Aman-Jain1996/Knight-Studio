import React from "react";
import VideocardHorizontal from "../../components/VideoCard-Horizontal/VideocardHorizontal";
import "./Liked.css";

function Liked() {
  return (
    <>
      <h2 className="page-heading">Liked Videos</h2>
      <div className="liked-container">
        <div className="aside-container">
          <div className="aside-image-container">
            <img
              src="https://res.cloudinary.com/ajain8479/image/upload/v1648909278/undraw_like_dislike_re_dwcj_ujcvnq.svg"
              alt="liked-image"
            />
          </div>
          <div className="liked-content">
            <div className="counter-container">{2} Videos</div>
          </div>
        </div>
        <div className="liked-list">
          <VideocardHorizontal />
          <VideocardHorizontal />
        </div>
      </div>
    </>
  );
}

export { Liked };
