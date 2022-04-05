import React from "react";
import { PlaylistCard } from "../../components";
import { useData } from "../../contexts";
import "./Playlist.css";

function Playlist() {
  const { state } = useData();
  return (
    <>
      <div className="heading-container">
        <h2 className="playlist-heading">My Playlists</h2>
        <div className="create-playlist-button">Create New Playlist</div>
      </div>
      <div className="playlists-container">
        <PlaylistCard
          cardData={{
            playlistName: "Liked Videos",
            videoCount: state.likes.length,
          }}
        />
        <PlaylistCard
          cardData={{
            playlistName: "Watch Later Videos",
            videoCount: state.watchLater.length,
          }}
        />
        {state.playlists.length !== 0 &&
          state.playlists.map((playlist) => (
            <PlaylistCard cardData={playlist} />
          ))}
      </div>
    </>
  );
}

export { Playlist };
