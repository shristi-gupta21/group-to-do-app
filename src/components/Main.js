import React from "react";
import { Group } from "./Group";
import { IoIosAdd } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { createGroup } from "../features/groupSlice";

export const Main = () => {
  const dispatch = useDispatch();
  const group = useSelector((state) => state.group.value);
  let handleClick = () => {
    dispatch(createGroup());
  };
  return (
    <div className="mx-auto flex flex-col items-center my-10 gap-5">
      {group.map((item, index) => (
        <Group key={item.id} index={index + 1} />
      ))}

      <button
        className="border  px-2 py-1 rounded flex items-center text-sm"
        onClick={handleClick}
      >
        <IoIosAdd className=" text-blue-600 text-xl" />
        Add Group
      </button>
    </div>
  );
};
