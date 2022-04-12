import React from "react";
import "./playlistCard.css";
import DeleteIcon from "@mui/icons-material/Delete";

export function PlaylistCard({ cardData }) {
  const { playlistName, videoCount } = cardData;
  return (
    <div className="playlist-card-container">
      <div className="playlist-name">{playlistName}</div>
      <div className="playlist-content-hover">
        <p>{videoCount} Videos</p>
        <div className="delete-icon" title="Remove playlist">
          <DeleteIcon className="icon" />
        </div>
      </div>
    </div>
  );
}
