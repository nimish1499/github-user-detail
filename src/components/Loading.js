import React from "react";

export default function Loading() {
  return (
    <div className="flex justify-center items-center">
      <div
        className="animate-spin rounded-full h-4 w-4 border-b-4"
        style={{ borderColor: "#857ecd" }}
      ></div>
    </div>
  );
}
