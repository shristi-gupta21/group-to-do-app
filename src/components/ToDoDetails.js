import React from "react";
import { useEffect } from "react";
import { useState } from "react";

export const ToDoDetails = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(`https://jsonplaceholder.typicode.com/todos/`);
        if (!res.ok) {
          throw new Error("failed to fetch todo");
        }
        const data = await res.json();
        setData(data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  let filteredData = data.filter((item) => item.id < 11);
  return <div>{JSON.stringify(filteredData)}</div>;
};
