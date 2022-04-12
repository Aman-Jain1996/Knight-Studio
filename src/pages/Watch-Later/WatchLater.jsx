import React from "react";
import { VideocardHorizontal } from "../../components";
import { useData } from "../../contexts";

function WatchLater() {
  const { state } = useData();
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
            <div className="counter-container">
              {state.watchLater.length} Videos
            </div>
          </div>
        </div>
        {state.watchLater.length === 0 ? (
          <div className="no-item-content">No Watch Later videos </div>
        ) : (
          <div className="liked-list">
            {state.watchLater.map((later) => (
              <VideocardHorizontal key={later._id} cardData={later} />
            ))}
          </div>
        )}
      </div>
    </>
  );
}

export { WatchLater };
