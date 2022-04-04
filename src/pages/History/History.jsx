import React from "react";
import { VideocardHorizontal } from "../../components";

function History() {
  return (
    <>
      <h2 className="page-heading">Watch History</h2>
      <div className="liked-container">
        <div className="aside-container">
          <div className="aside-image-container">
            <img
              src="https://res.cloudinary.com/ajain8479/image/upload/v1648887690/undraw_reading_time_re_phf7_s2rpf3.svg"
              alt="watch-history-image"
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

export { History };
