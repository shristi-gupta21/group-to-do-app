import React, { useState } from "react";
import { Group } from "./Group";
import { IoIosAdd } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { createGroup } from "../features/groupSlice";

export const Main = () => {
  const dispatch = useDispatch();
  const group = useSelector((state) => state.value);
  //   let [group, setGroup] = useState([{ id: crypto.randomUUID() }]);
  let handleClick = () => {
    // let newGroup = { id: crypto.randomUUID() };
    // setGroup((prev) => [...prev, newGroup]);
    dispatch(createGroup());
  };
  console.log(group);
  return (
    <div className="mx-auto flex flex-col items-center my-10 gap-5">
      {/* {group.map((item, index) => (
        <Group key={item.id} index={index + 1} group={group} />
      ))} */}

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
