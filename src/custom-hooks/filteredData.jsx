import { useData } from "../contexts";

export const useFilteredData = () => {
  const { state } = useData();
  let filteredData = state.videos;

  if (state.filters.search) {
    filteredData = filteredData.filter((video) =>
      video.title.toLowerCase().includes(state.filters.search.toLowerCase())
    );
  }

  if (state.filters.category !== "All") {
    filteredData = filteredData.filter((video) =>
      video.categories.includes(state.filters.category)
    );
  }

  return filteredData;
};
