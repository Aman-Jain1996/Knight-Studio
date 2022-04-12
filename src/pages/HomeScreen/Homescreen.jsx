import React from "react";
import { Outlet } from "react-router-dom";
import { Asidenav } from "../../components";
import { useAuth } from "../../contexts/AuthContext";
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
