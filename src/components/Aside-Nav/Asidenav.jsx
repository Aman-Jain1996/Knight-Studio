import React from "react";
import "./Asidenav.css";
import HomeIcon from "@mui/icons-material/Home";
import ExploreIcon from "@mui/icons-material/Explore";
import QueueIcon from "@mui/icons-material/Queue";
import ThumbUpAltIcon from "@mui/icons-material/ThumbUpAlt";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import HistoryIcon from "@mui/icons-material/History";
import { Link } from "react-router-dom";

function Asidenav() {
  return (
    <div className="asidenav-container">
      <div className="icon-content-container">
        <span className="logo-container">
          <HomeIcon className="icon" />
        </span>
        <span className="content-container">
          <Link to="">Home</Link>
        </span>
      </div>
      <div className="icon-content-container">
        <span className="logo-container">
          <ExploreIcon className="icon" />
        </span>
        <span className="content-container">
          <Link to="">Explore</Link>
        </span>
      </div>
      <div className="icon-content-container">
        <span className="logo-container">
          <QueueIcon className="icon" />
        </span>
        <span className="content-container">
          <Link to="">Playlists</Link>
        </span>
      </div>
      <div className="icon-content-container">
        <span className="logo-container">
          <ThumbUpAltIcon className="icon" />
        </span>
        <span className="content-container">
          <Link to="">Liked</Link>
        </span>
      </div>
      <div className="icon-content-container">
        <span className="logo-container">
          <BookmarkIcon className="icon" />
        </span>
        <span className="content-container">
          <Link to="">Watch Later</Link>
        </span>
      </div>
      <div className="icon-content-container">
        <span className="logo-container">
          <HistoryIcon className="icon" />
        </span>
        <span className="content-container">
          <Link to="">History</Link>
        </span>
      </div>
    </div>
  );
}

export default Asidenav;
