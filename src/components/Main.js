import React from "react";
import { Group } from "./Group";
import { IoIosAdd } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { createGroup } from "../features/groupSlice";
import { fetchDataAction } from "../features/dataSlice";

export const Main = () => {
  const dispatch = useDispatch();
  const group = useSelector((state) => state.group.value);
  const error = useSelector((state) => state.valid.value);
  // console.log(error);
  let handleClick = () => {
    dispatch(createGroup());
  };
  const handleShowResults = () => {
    dispatch(fetchDataAction());
    valid();
  };
  const valid = () => {
    let tempArr = range.filter((item) => item.start > start && item.end < end);
    console.log(tempArr);
    if (tempArr.length && index !== 1) {
      dispatch(validation({ error: "Start and End value is overlapping" }));
    }
    if (!tempArr.length && index > 1) {
      dispatch(validation({ error: "" }));
    }
  };

  return (
    <>
      <div className="mx-auto flex flex-col items-center my-10 gap-5">
        {group.map((item, index) => (
          <Group key={item.id} index={index + 1} />
        ))}
        {error.length && <p className=" text-red-700 text-sm">{error}</p>}
        <button
          className="border  px-2 py-1 rounded flex items-center text-sm disabled:opacity-50 disabled:cursor-not-allowed"
          onClick={handleClick}
          disabled={error.length > 0}
        >
          <IoIosAdd className=" text-blue-600 text-xl" />
          Add Group
        </button>
        <button
          onClick={handleShowResults}
          disabled={error.length > 0}
          className="border border-black rounded bg-black text-white py-3 px-8 disabled:bg-black/50 disabled:cursor-not-allowed"
        >
          Show Results
        </button>
      </div>
    </>
  );
};
