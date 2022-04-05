import React from "react";
import { Videocard, NavpillContainer } from "../../components";
import { useData } from "../../contexts";
import "./Videos.css";

function Videos() {
  const { state } = useData();
  return (
    <>
      <NavpillContainer />
      <div className="video-list-container">
        {state.videos.map((video) => (
          <Videocard video={video} key={video._id} />
        ))}
      </div>
    </>
  );
}

export { Videos };
