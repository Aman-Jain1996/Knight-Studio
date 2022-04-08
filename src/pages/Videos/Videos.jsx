import React, { useEffect } from "react";
import { Videocard, NavpillContainer } from "../../components";
import { useData } from "../../contexts";
import { useFilteredData } from "../../custom-hooks";
import "./Videos.css";

function Videos() {
  const { setLoader } = useData();
  const filteredVideos = useFilteredData();

  useEffect(() => {
    scrollTo(0, 0);
    setLoader(true);
    let timer = setTimeout(() => {
      setLoader(false);
    }, 1000);

    return () => {
      clearTimeout(timer);
    };
  }, []);

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
