import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchDataAction } from "../features/dataSlice";

export const Result = () => {
  const dispatch = useDispatch();
  const { value, loading, error } = useSelector((state) => state.data);
  console.log(value, loading, error);
  useEffect(() => {
    dispatch(fetchDataAction());
  }, [dispatch]);

  return <div className=" w-96 border bg-gray-50 h-10 py-3 px-4"></div>;
};
