import React from "react";
import { VideocardHorizontal } from "../../components";
import { useData } from "../../contexts";

function History() {
  const { state } = useData();
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
            <div className="counter-container">
              {state.history.length} Videos
            </div>
          </div>
        </div>
        {state.history.length === 0 ? (
          <div className="no-item-content">Nothing in Watch History</div>
        ) : (
          <div className="liked-list">
            {state.history.map((history) => (
              <VideocardHorizontal key={history._id} cardData={history} />
            ))}
          </div>
        )}
      </div>
    </>
  );
}

export { History };
