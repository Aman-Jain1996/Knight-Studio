import React from "react";
import { Outlet } from "react-router-dom";
import Asidenav from "../../components/Aside-Nav/Asidenav";
import NavpillContainer from "../../components/Nav-Pill/Navpill-Container";
import Videocard from "../../components/VideoCard/Videocard";
import "./Homescreen.css";

function Homescreen() {
  return (
    <div className="homescreen-container">
      <Asidenav />
      <main className="homescreen-main-container">
        <Outlet />
      </main>
    </div>
  );
}

export { Homescreen };
