import React, { useState } from "react";
import "./AddPlaylistModal.css";
import CloseIcon from "@mui/icons-material/Close";
import AddBoxIcon from "@mui/icons-material/AddBox";
import { useAuth, useData } from "../../contexts";
import { useCreateNewPlaylist } from "../../custom-hooks";

export const AddPlaylistModal = () => {
  const { token } = useAuth();
  const { dispatch, setIsAddModalOpen } = useData();
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");

  return (
    <div
      className="playlist-modal-container"
      onClick={() => {
        setIsAddModalOpen(false);
      }}
    >
      <div className="playlist-modal" onClick={(e) => e.stopPropagation()}>
        <div className="modal-heading-container">
          <h5 className="modal-heading">Add new Playlist</h5>
          <span className="close-icon">
            <CloseIcon
              className="icon"
              onClick={() => setIsAddModalOpen(false)}
            />
          </span>
        </div>

        <form
          className="playlist-form-container"
          onSubmit={(e) => {
            e.preventDefault();
            setIsAddModalOpen(false);
            useCreateNewPlaylist(dispatch, token, title, desc);
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
              <textarea
                className="textarea-field"
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
            Add
          </button>
        </form>
      </div>
    </div>
  );
};
