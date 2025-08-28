import React from "react";

const CardSkeleton = () => (
  <div className="rounded-lg bg-white shadow-md mt-5 p-2">
    <div className="w-full h-48 bg-gray-200 rounded-md animate-pulse" />
    <div className="mt-3 h-4 w-3/4 bg-gray-200 rounded animate-pulse" />
    <div className="mt-2 h-3 w-1/2 bg-gray-200 rounded animate-pulse" />
    <div className="mt-4 h-8 w-full bg-gray-200 rounded animate-pulse" />
  </div>
);
export default CardSkeleton;
