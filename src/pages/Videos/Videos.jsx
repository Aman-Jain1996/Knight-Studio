import React from "react";
import NavpillContainer from "../../components/Nav-Pill/Navpill-Container";
import Videocard from "../../components/VideoCard/Videocard";
import "./Videos.css";

function Videos() {
  return (
    <div>
      <NavpillContainer />
      <div className="video-list-container">
        <Videocard />
        <Videocard />
        <Videocard />
        <Videocard />
        <Videocard />
      </div>
    </div>
  );
}

export { Videos };
