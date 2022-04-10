import React from "react";
import VideocardHorizontal from "../../components/VideoCard-Horizontal/VideocardHorizontal";

function WatchLater() {
  return (
    <>
      <h2 className="page-heading">Watch Later</h2>
      <div className="liked-container">
        <div className="aside-container">
          <div className="aside-image-container">
            <img
              src="https://res.cloudinary.com/ajain8479/image/upload/v1648897778/undraw_save_to_bookmarks_re_8ajf_htnrkk.svg"
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

export { WatchLater };
