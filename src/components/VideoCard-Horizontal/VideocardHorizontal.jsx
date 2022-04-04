import React from "react";
import "./VideocardHorizontal.css";
import DeleteIcon from "@mui/icons-material/Delete";
import AccessTimeIcon from "@mui/icons-material/AccessTime";

export function VideocardHorizontal() {
  const date = new Date();
  return (
    <div className="videocard-horizontal-container">
      <div className="videocard-horizontal-image">
        <img
          src="https://res.cloudinary.com/ajain8479/image/upload/v1648884661/Rudra_dytwer.webp"
          alt=""
        />
      </div>
      <div className="videocard-horizontal-content">
        <div className="content-title">Aman</div>
        <div className="content-desc">Jain</div>
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
