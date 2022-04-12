import React from "react";
import "./VideocardHorizontal.css";
import DeleteIcon from "@mui/icons-material/Delete";
import AccessTimeIcon from "@mui/icons-material/AccessTime";

export function VideocardHorizontal({ cardData }) {
  const { imageUrl, title, creator } = cardData;
  const date = new Date();
  return (
    <div className="videocard-horizontal-container">
      <div className="videocard-horizontal-image">
        <img src={imageUrl} alt="like-image-banner" />
      </div>
      <div className="videocard-horizontal-content">
        <div className="content-title">{title}</div>
        <div className="content-desc">{creator}</div>
        <div className="timestamp">
          <span>
            <AccessTimeIcon />
          </span>
          {date.toDateString()}
        </div>
      </div>
      <div className="card-actionContainer">
        <div title="Remove from liked videos">
          <DeleteIcon className="icon" />
        </div>
      </div>
    </div>
  );
}
