import React, { useCallback } from "react";
import { Group } from "./Group";
import { IoIosAdd } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { createGroup, updateGroup } from "../features/groupSlice";
import { fetchDataAction } from "../features/dataSlice";
import { Result } from "./Result";

export const Main = () => {
  const dispatch = useDispatch();
  const { value: data, loading, error } = useSelector((state) => state.data);

  const { value: groups, error: errorGroup } = useSelector(
    (state) => state.group
  );

  let handleAddClick = () => {
    dispatch(createGroup({ id: crypto.randomUUID(), from: 1, to: 10 }));
  };
  const handleShowResults = () => {
    dispatch(fetchDataAction());
  };

  return (
    <>
      <div className="mx-auto flex flex-col items-center my-10 gap-5">
        <p>Tip: You need to update start and end value every time. </p>
        {groups.map((group, index) => (
          <div key={group.id} className=" flex gap-4 items-center">
            <Group group={group} index={index + 1} />
            {!loading && !error && (
              <Result index={index + 1} start={group.from} end={group.to} />
            )}
          </div>
        ))}
        {errorGroup && <p className="text-red-500 font-medium">{errorGroup}</p>}
        <button
          onClick={handleAddClick}
          className="disabled:opacity-50 disabled:cursor-not-allowed border px-2 py-1 rounded flex items-center text-sm"
          disabled={errorGroup.length > 0}
        >
          <IoIosAdd className="text-blue-600 text-xl" />
          Add Group
        </button>
        <button
          onClick={handleShowResults}
          className="disabled:bg-black/50 disabled:cursor-not-allowed border border-black rounded bg-black text-white py-3 px-8"
        >
          Show Results
        </button>
        {loading && <p>Loading...</p>}
      </div>
      ;
    </>
  );
};
