import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { VideocardHorizontal } from "../../components";
import { useAuth, useData } from "../../contexts";
import { GetPlaylists, GetSinglePlaylist } from "../../Utlis";
import "../Liked/Liked.css";
import "./SinglePlaylist.css";

function SinglePlaylist() {
  const { token } = useAuth();
  const { state, dispatch } = useData();
  const { playlistId } = useParams();
  const [playListData, setPlaylistData] = useState("");

  useEffect(() => {
    (async () => {
      await GetPlaylists(dispatch, token);
      const [data] = state.playlists.filter((play) => play._id === playlistId);
      setPlaylistData(data);
    })();
  }, [state.playlists]);

  return (
    <>
      {playListData !== "" && (
        <>
          <h2 className="page-heading">{playListData?.title.toUpperCase()}</h2>
          <div className="liked-container">
            <div className="aside-container">
              <div className="aside-image-container">
                <img
                  src={
                    "https://res.cloudinary.com/ajain8479/image/upload/v1649613906/undraw_playlist_re_1oed_so8zmv.svg"
                  }
                  alt="liked-image"
                />
              </div>
              <div className="liked-content">
                <div className="playlist-desc-container">
                  <span>Description :</span>
                  {playListData?.description}
                </div>
                <div className="counter-container">
                  {playListData?.videos.length} Videos
                </div>
              </div>
            </div>
            {playListData.videos.length === 0 ? (
              <div className="no-item-content">
                No videos added to the playlist{" "}
                <Link to="/explore">Explore</Link>
              </div>
            ) : (
              <div className="liked-list">
                {playListData?.videos.map((video) => (
                  <VideocardHorizontal
                    key={video._id}
                    cardData={video}
                    from="video"
                    playlistId={playlistId}
                  />
                ))}
              </div>
            )}
          </div>
        </>
      )}
    </>
  );
}

export { SinglePlaylist };
