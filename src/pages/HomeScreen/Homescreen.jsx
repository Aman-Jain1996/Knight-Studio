import React from "react";
import Asidenav from "../../components/Aside-Nav/Asidenav";
import "./Homescreen.css";

function Homescreen() {
  return (
    <div className="homescreen-container">
      <Asidenav />
      <main>Main area</main>
    </div>
  );
}

export default Homescreen;
