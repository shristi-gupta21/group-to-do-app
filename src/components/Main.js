import React, { useState } from "react";
import { Group } from "./Group";
import { IoIosAdd } from "react-icons/io";

export const Main = () => {
  let [count, setCount] = useState(1);
  let handleClick = () => {
    count++;
    setCount(count);
  };

  return (
    <div className="mx-auto flex flex-col items-center my-10 gap-5">
      {Array.from({ length: count }, (_, index) => (
        <Group index={index + 1} />
      ))}

      {count}
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
