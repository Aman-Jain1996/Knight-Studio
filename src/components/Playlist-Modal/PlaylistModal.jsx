import React, { useState } from "react";
import "./PlaylistModal.css";
import CloseIcon from "@mui/icons-material/Close";
import AddBoxIcon from "@mui/icons-material/AddBox";
import { useAuth, useData } from "../../contexts";
import {
  useCreateNewPlaylist,
  useDislikeVideo,
  useLikeVideo,
  useRemoveWatchLater,
  useWatchLaterVideo,
} from "../../custom-hooks";
import {
  AddNewPlaylist,
  AddVideoToPlaylist,
  RemoveVideoFromPlaylist,
} from "../../Utlis";

export const PlaylistModal = () => {
  const { token } = useAuth();
  const { dispatch, state, setIsPlaylistModalOpen, modalData } = useData();
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");

  const playLists = state.playlists;
  const isLiked = state.likes?.find((like) => like._id === modalData._id);
  const isWatchLater = state.watchLater?.find(
    (later) => later._id === modalData._id
  );

  const LikeLaterChangeHandler = (e, name) => {
    switch (name) {
      case "like":
        if (e.target.checked) useLikeVideo(dispatch, modalData, token);
        else useDislikeVideo(dispatch, modalData._id, token);
        break;
      case "later":
        if (e.target.checked) useWatchLaterVideo(dispatch, modalData, token);
        else useRemoveWatchLater(dispatch, modalData._id, token);
        break;

      default:
        break;
    }
  };

  const changeHandler = (e, playListId) => {
    if (e.target.checked) {
      AddVideoToPlaylist(dispatch, token, playListId, modalData);
    } else {
      RemoveVideoFromPlaylist(dispatch, token, playListId, modalData._id);
    }
  };

  return (
    <div
      className="playlist-modal-container"
      onClick={() => {
        setIsPlaylistModalOpen(false);
      }}
    >
      <div className="playlist-modal" onClick={(e) => e.stopPropagation()}>
        <div className="modal-heading-container">
          <h5 className="modal-heading">Add to ...</h5>
          <span className="close-icon">
            <CloseIcon
              className="icon"
              onClick={() => setIsPlaylistModalOpen(false)}
            />
          </span>
        </div>

        <div className="playlist-list-container">
          <div className="playlist-list">
            <div className="playlist-item">
              <input
                type="checkbox"
                id="liked"
                checked={isLiked ? isLiked : false}
                onChange={(e) => LikeLaterChangeHandler(e, "like")}
              />
              <label htmlFor="liked">Add to Liked</label>
            </div>
            <div className="playlist-item">
              <input
                type="checkbox"
                id="later"
                checked={isWatchLater ? isWatchLater : false}
                onChange={(e) => LikeLaterChangeHandler(e, "later")}
              />
              <label htmlFor="later">Add to Watch Later</label>
            </div>
            {playLists?.length !== 0 &&
              playLists.map((playList) => {
                const checked = playList?.videos.filter(
                  (video) => video._id === modalData._id
                ).length;

                return (
                  <div key={playList._id} className="playlist-item">
                    <input
                      type="checkbox"
                      id={playList._id}
                      name={playList.title}
                      checked={checked !== 0 ? true : false}
                      onChange={(e) => changeHandler(e, playList._id)}
                    />
                    <label htmlFor={playList._id}>
                      Add to {playList.title}
                    </label>
                  </div>
                );
              })}
          </div>
        </div>

        {!isFormVisible && (
          <div
            className="create-playlist-container"
            onClick={() => setIsFormVisible(true)}
          >
            <AddBoxIcon className="icon" />
            Create new playlist
          </div>
        )}

        {isFormVisible && (
          <form
            className="playlist-form-container"
            onSubmit={async (e) => {
              e.preventDefault();
              const playListIds = playLists.map((play) => play._id);
              const newPlaylists = await AddNewPlaylist(
                dispatch,
                token,
                title,
                desc,
                true
              );

              const playlistId = newPlaylists
                .filter((play) => playListIds.indexOf(play._id) === -1)
                .map((a) => a._id);

              AddVideoToPlaylist(dispatch, token, playlistId, modalData);
              setIsPlaylistModalOpen(false);
            }}
          >
            <div className="add-playlist-list">
              <div className="add-playlist-item">
                <label htmlFor="title">Playlist Name :</label>
                <input
                  type="input"
                  required
                  id="title"
                  name="title"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
              </div>
              <div className="add-playlist-item">
                <label htmlFor="desc">Description :</label>
                <input
                  required
                  id="desc"
                  name="desc"
                  value={desc}
                  onChange={(e) => setDesc(e.target.value)}
                />
              </div>
            </div>
            <button
              className="create-playlist-container"
              aria-label="button"
              type="submit"
            >
              <AddBoxIcon className="icon" />
              Add to New Playlist
            </button>
          </form>
        )}
      </div>
    </div>
  );
};
