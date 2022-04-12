import React from "react";
import { Videocard, NavpillContainer } from "../../components";
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
