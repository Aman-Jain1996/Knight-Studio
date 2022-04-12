import React from "react";
import { useData } from "../../contexts";
import { actionType } from "../../reducers/actionTypes";

export function Navpill({ pill }) {
  const { state, dispatch } = useData();

  const categoryClickHandler = () => {
    dispatch({
      type: actionType.CATEGORY_FILTER_CHANGE,
      payload: { category: pill.categoryName },
    });
  };

  return (
    <div
      className={
        state.filters.category === pill.categoryName
          ? " navpill navpill-active"
          : "navpill"
      }
      onClick={categoryClickHandler}
    >
      {pill.categoryName}
    </div>
  );
}
