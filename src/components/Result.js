import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { validation } from "../features/validationSlice";
export const Result = ({ index, start, end }) => {
  const dispatch = useDispatch();
  const { value, loading } = useSelector((state) => state?.data);
  const error = useSelector((state) => state.valid.value);
  useEffect(() => {
    let newObj = {
      start: start,
      end: end,
      index: index,
      data: value?.filter((item) => item.id >= start && item.id <= end),
      error: error.length,
    };
    setRange((prev) => [...prev, newObj]);
  }, [start, end]);

  let data = value?.filter((item) => item.id >= start && item.id <= end);
  return (
    <div key={index} className=" w-96 border bg-gray-50 min-h-10 py-3 px-4">
      {data.map((item) =>
        item.error === 0 ? (
          <span key={crypto.randomUUID()}>
            {loading && <p>Loading..</p>}({item.id})
            {item.completed ? "true " : "false "}
          </span>
        ) : (
          ""
        )
      )}
    </div>
  );
};
