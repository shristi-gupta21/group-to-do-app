import React, { useId, useState } from "react";
import { MdDelete } from "react-icons/md";
import { FaLongArrowAltRight } from "react-icons/fa";

export const Group = () => {
  const [startValue, setStartValue] = useState();
  const [endValue, setEndValue] = useState();
  const id = useId();
  const handleStartValueChange = (e) => {
    let inputVal = e.target.value;
    let numericValue = inputVal.replace(/\D/g, "");
    setStartValue(numericValue);
  };
  const handleEndValueChange = (e) => {
    let inputVal = e.target.value;
    let numericValue = inputVal.replace(/\D/g, "");
    setEndValue(numericValue);
  };
  return (
    <div
      key={id}
      className="mx-auto flex justify-center items-center my-10 gap-4"
    >
      <MdDelete className=" text-2xl" />
      <div className=" border rounded flex">
        <div className="border-r px-3 py-2 bg-gray-100">
          <span>Group 1</span>
        </div>
        <div className="border-r px-3 py-2 ">
          <input
            type="text"
            className="w-10 focus:outline-none"
            value={startValue}
            onChange={handleStartValueChange}
            maxLength={2}
          />
        </div>
        <div className="border-r px-3 py-2 bg-gray-100">
          <FaLongArrowAltRight />
        </div>
        <div className="border-r px-3 py-2 ">
          <input
            type="text"
            className="w-10 focus:outline-none"
            value={endValue}
            onChange={handleEndValueChange}
            maxLength={2}
          />
        </div>
      </div>
    </div>
  );
};