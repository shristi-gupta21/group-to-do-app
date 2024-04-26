import React from "react";
import { useSelector } from "react-redux";

export const Result = ({ index, start, end }) => {
  const { value, loading, error } = useSelector((state) => state?.data);
  //   console.log("result", value, loading, error);
  console.log(value);
  let newArr = value?.filter(
    (item, index) => item.id >= start && item.id <= end
  );
  console.log(newArr);
  return (
    <div key={index} className=" w-96 border bg-gray-50 h-10 py-3 px-4">
      {loading && <p>Loading..</p>}
      {newArr.map((item) => (
        <span>
          ({item.id}) {item.completed ? "true " : "false "}
        </span>
      ))}
    </div>
  );
};
