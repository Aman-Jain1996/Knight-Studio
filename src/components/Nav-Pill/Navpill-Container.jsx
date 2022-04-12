import React from "react";
import { Navpill } from "../../components";
import "./Navpill.css";

export function NavpillContainer() {
  const categories = ["A", "B", "C", "D", "E", "F"];
  return (
    <div className="navpill-container">
      {categories.map((pill) => (
        <Navpill key={pill} pill={pill} />
      ))}
    </div>
  );
}
