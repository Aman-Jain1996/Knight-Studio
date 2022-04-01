import React from "react";
import Navpill from "./Navpill";
import "./Navpill.css";

function NavpillContainer() {
  const categories = ["A", "B", "C", "D", "E", "F"];
  return (
    <div className="navpill-container">
      {categories.map((pill) => (
        <Navpill key={pill} pill={pill} />
      ))}
    </div>
  );
}

export default NavpillContainer;
