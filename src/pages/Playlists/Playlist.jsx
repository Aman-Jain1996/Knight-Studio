import React from "react";
import { PlaylistCard } from "../../components";
import "./Playlist.css";

function Playlist() {
  return (
    <>
      <div className="heading-container">
        <h2 className="playlist-heading">My Playlists</h2>
        <div className="create-playlist-button">Create New Playlist</div>
      </div>
      <div className="playlists-container">
        <PlaylistCard />
        <PlaylistCard />
        <PlaylistCard />
        <PlaylistCard />
        <PlaylistCard />
      </div>
    </>
  );
}

export { Playlist };
