import React from "react";
import "./playlistCard.css";
import DeleteIcon from "@mui/icons-material/Delete";

export function PlaylistCard() {
  return (
    <div className="playlist-card-container">
      <div className="playlist-name">Playlist 1</div>
      <div className="playlist-content-hover">
        <p>10 Videos</p>
        <div className="delete-icon" title="Remove playlist">
          <DeleteIcon className="icon" />
        </div>
      </div>
    </div>
  );
}
