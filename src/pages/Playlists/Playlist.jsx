import React, { useEffect } from "react";
import { PlaylistCard } from "../../components";
import { useData } from "../../contexts";
import "./Playlist.css";

function Playlist() {
  const { state, setIsAddModalOpen } = useData();

  useEffect(() => {}, [state.playlists]);

  return (
    <>
      <div className="heading-container">
        <h2 className="playlist-heading">My Playlists</h2>
        <div
          className="create-playlist-button"
          onClick={() => {
            setIsAddModalOpen(true);
          }}
        >
          Create New Playlist
        </div>
      </div>
      <div className="playlists-container">
        <PlaylistCard
          cardData={{
            title: "Liked Videos",
            description:
              "All the videos that you have liked will appear under this playlist",
            videos: [...state.likes],
            deleteEnabled: false,
          }}
        />
        <PlaylistCard
          cardData={{
            title: "Watch Later Videos",
            description:
              "All the videos that you have marked to Watch Later will appear under this playlist",
            videos: [...state.watchLater],
            deleteEnabled: false,
          }}
        />
        {state.playlists.length !== 0 &&
          state.playlists.map((playlist) => (
            <PlaylistCard
              key={playlist._id}
              cardData={{ ...playlist, deleteEnabled: true }}
            />
          ))}
      </div>
    </>
  );
}

export { Playlist };
