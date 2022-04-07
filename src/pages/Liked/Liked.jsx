import React from "react";
import { VideocardHorizontal } from "../../components";
import { useData } from "../../contexts";
import "./Liked.css";

function Liked() {
  const { state } = useData();

  return (
    <>
      <h2 className="page-heading">Liked Videos</h2>
      <div className="liked-container">
        <div className="aside-container">
          <div className="aside-image-container">
            <img
              src={
                "https://res.cloudinary.com/ajain8479/image/upload/v1648909278/undraw_like_dislike_re_dwcj_ujcvnq.svg"
              }
              alt="liked-image"
            />
          </div>
          <div className="liked-content">
            <div className="counter-container">{state.likes.length} Videos</div>
          </div>
        </div>
        {state.likes.length === 0 ? (
          <div className="no-item-content">No liked videos</div>
        ) : (
          <div className="liked-list">
            {state.likes.map((like) => (
              <VideocardHorizontal key={like._id} cardData={like} from="like" />
            ))}
          </div>
        )}
      </div>
    </>
  );
}

export { Liked };
