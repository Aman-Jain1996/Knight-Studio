import React from "react";
import { Navpill } from "../../components";
import { useData } from "../../contexts";
import "./Navpill.css";

export function NavpillContainer() {
  const { state } = useData();

  return (
    <div className="navpill-outer-container">
      <div className="navpill-container">
        {state.categories.map((pill) => (
          <Navpill key={pill._id} pill={pill} />
        ))}
      </div>
    </div>
  );
}
