import React, { useState, useEffect } from "react";
import { MdDelete } from "react-icons/md";
import { FaLongArrowAltRight } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { deleteGroup } from "../features/groupSlice";

export const Group = ({ group, onUpdate }) => {
  const dispatch = useDispatch();
  const [from, setFrom] = useState(group.from);
  const [to, setTo] = useState(group.to);

  useEffect(() => {
    onUpdate(group.id, from, to);
  }, [from, to, group.id, onUpdate]);

  const handleStartValueChange = (e) => {
    const inputVal = e.target.value;
    const numericValue = inputVal === "" ? "" : parseInt(inputVal, 10);
    if (!isNaN(numericValue)) {
      setFrom(numericValue);
    }
  };

  const handleEndValueChange = (e) => {
    const inputVal = e.target.value;
    const numericValue = inputVal === "" ? "" : parseInt(inputVal, 10);
    if (!isNaN(numericValue)) {
      setTo(numericValue);
    }
  };

  const handleDelete = () => {
    dispatch(deleteGroup(group.id));
  };

  return (
    <div key={group.id} className="flex items-center gap-x-6">
      <div className="flex items-center gap-4">
        <button onClick={handleDelete}>
          <MdDelete className="text-2xl" />
        </button>
        <div className="border rounded flex">
          <div className="border-r px-3 py-2 bg-gray-100">
            <span>Group {group.index}</span>
          </div>
          <input
            type="number"
            value={from}
            onChange={handleStartValueChange}
            min="1"
            max="10"
          />
          <div className="border-r px-3 py-2 bg-gray-100">
            <FaLongArrowAltRight />
          </div>
          <input
            type="number"
            value={to}
            onChange={handleEndValueChange}
            min="1"
            max="10"
          />
        </div>
      </div>
    </div>
  );
};
