import React from "react";
import { useSelector } from "react-redux";

export const Result = ({ index, start, end }) => {
  const { value: data, loading, error } = useSelector((state) => state.data);
  const filteredData = data?.filter(
    (item) => item.id >= start && item.id <= end
  );

  return (
    <div className="w-96 border bg-gray-50 min-h-10 py-3 px-4">
      {!loading &&
        !error &&
        filteredData?.map((item) => (
          <span key={item.id}>
            ({item.id}) {item.completed ? "Completed" : "Not completed"}
          </span>
        ))}
      {filteredData?.length === 0 && (
        <p>No results found within the specified range.</p>
      )}
    </div>
  );
};
