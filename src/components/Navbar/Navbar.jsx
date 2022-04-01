import React from "react";
import "./Navbar.css";
import PersonIcon from "@mui/icons-material/Person";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <nav className="navbar-container">
        <div className="nav-left-container">
          <div className="nav-logo">
            <Link to="/">Knight Studio</Link>
          </div>
          <div className="nav-left-pill-container">
            <div className="nav-pills">
              <Link to="/explore">Explore</Link>
            </div>
            <div className="nav-pills">Playlists</div>
          </div>
        </div>

        <div className="searchbar">
          <label htmlFor="search" className="icon">
            <SearchOutlinedIcon className="mui-icon" />
          </label>
          <input
            type="text"
            name="search"
            id="search"
            placeholder="Search your favourite videos here......."
          />
        </div>

        <div className="nav-right-container">
          <div className="icon-content-container">
            <span className="logo-container">
              <PersonIcon className="icon" />
            </span>
            <span className="content-container">Login</span>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
