import React from "react";
import "./Navbar.css";
import PersonIcon from "@mui/icons-material/Person";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import { Link, useLocation } from "react-router-dom";

export function Navbar() {
  const location = useLocation();

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
            <div className="nav-pills">
              <Link to="/playlists">Playlists</Link>
            </div>
          </div>
        </div>

        {!(
          location.pathname === "/login" || location.pathname === "/signUp"
        ) && (
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
        )}

        <div className="nav-right-container">
          <Link to={location.pathname === "/login" ? "/signUp" : "/login"}>
            <div className="icon-content-container">
              <span className="logo-container">
                <PersonIcon className="icon" />
              </span>
              <span className="content-container">
                {location.pathname === "/login" ? "SignUp" : "Login"}
              </span>
            </div>
          </Link>
        </div>
      </nav>
    </>
  );
}
