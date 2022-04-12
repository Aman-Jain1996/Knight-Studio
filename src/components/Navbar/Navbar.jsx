import React, { useRef, useState } from "react";
import "./Navbar.css";
import PersonIcon from "@mui/icons-material/Person";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";
import { actionType } from "../../reducers/actionTypes";
import { useData } from "../../contexts";

export function Navbar() {
  const location = useLocation();
  const { user } = useAuth();
  const { dispatch } = useData();
  const [searchInput, setSearchInput] = useState("");
  const navigate = useNavigate();
  const searchRef = useRef();

  const closeHandler = () => {
    dispatch({
      type: actionType.SEARCH_FILTER_CHANGE,
      payload: {
        search: "",
      },
    });

    setSearchInput("");
  };

  const changeHandler = (e) => {
    if (e.target.value === "") {
      dispatch({
        type: actionType.SEARCH_FILTER_CHANGE,
        payload: {
          search: "",
        },
      });
    }
    setSearchInput(e.target.value);
  };

  const searchHandler = (e) => {
    if (e.key === "Enter") {
      dispatch({
        type: actionType.SEARCH_FILTER_CHANGE,
        payload: {
          search: searchInput,
        },
      });
      navigate("explore");
    } else if (e.type === "click") {
      dispatch({
        type: actionType.SEARCH_FILTER_CHANGE,
        payload: {
          search: searchRef.current.value,
        },
      });
      navigate("explore");
    }
  };

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
              <SearchOutlinedIcon
                className="mui-icon"
                onClick={(e) => searchHandler(e)}
              />
            </label>
            <input
              type="text"
              ref={searchRef}
              name="search"
              id="search"
              placeholder="Search your favourite videos here......."
              value={searchInput}
              onChange={(e) => changeHandler(e)}
              onKeyUp={(e) => searchHandler(e)}
            />

            {searchInput.length > 0 && (
              <label htmlFor="clear" className="icon">
                <CloseOutlinedIcon
                  className="mui-icon"
                  onClick={closeHandler}
                />
              </label>
            )}
          </div>
        )}

        <div className="nav-right-container">
          {user ? (
            <div className="icon-content-container">
              <span className="logo-container">
                <PersonIcon className="icon" />
              </span>
              <span className="content-container">Hi , {user.firstName}</span>
            </div>
          ) : (
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
          )}
        </div>
      </nav>
    </>
  );
}
