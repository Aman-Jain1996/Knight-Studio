import React from "react";
import Asidenav from "../../components/Aside-Nav/Asidenav";
import NavpillContainer from "../../components/Nav-Pill/Navpill-Container";
import Videocard from "../../components/VideoCard/Videocard";
import "./Homescreen.css";

function Homescreen() {
  return (
    <div className="homescreen-container">
      <Asidenav />
      <main className="homescreen-main-container">
        <NavpillContainer />
        <div className="video-list-container">
          <Videocard />
          <Videocard />
          <Videocard />
          <Videocard />
          <Videocard />
        </div>
      </main>
    </div>
  );
}

export default Homescreen;
