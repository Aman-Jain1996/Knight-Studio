import React from "react";
import "./playlistCard.css";
import DeleteIcon from "@mui/icons-material/Delete";
import { DeletePlaylist } from "../../Utlis";
import { useAuth, useData } from "../../contexts";
import { useNavigate } from "react-router-dom";

export function PlaylistCard({ cardData }) {
  const { state, dispatch } = useData();
  const { token } = useAuth();
  const { _id, title, videos, deleteEnabled } = cardData;
  const navigate = useNavigate();

  return (
    <div className="playlist-card-container">
      <div className="playlist-name">{title}</div>
      <div className="playlist-content-hover">
        <p
          onClick={() =>
            title === "Liked Videos"
              ? navigate("/liked")
              : title === "Watch Later Videos"
              ? navigate("/later")
              : navigate(`/playlists/${_id}`)
          }
        >
          {videos.length} Videos
        </p>
        {deleteEnabled && (
          <div
            className="delete-icon"
            title="Remove playlist"
            onClick={() => DeletePlaylist(dispatch, token, _id)}
          >
            <DeleteIcon className="icon" />
          </div>
        )}
      </div>
    </div>
  );
}
