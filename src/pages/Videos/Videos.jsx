import React from "react";
import { Videocard, NavpillContainer } from "../../components";
import { useFilteredData } from "../../custom-hooks";
import "./Videos.css";

function Videos() {
  const filteredVideos = useFilteredData();

  return (
    <>
      <NavpillContainer />
      <div className="video-list-container">
        {filteredVideos.map((video) => (
          <Videocard video={video} key={video._id} />
        ))}
      </div>
    </>
  );
}

export { Videos };
