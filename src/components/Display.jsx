import React from "react";
import { Route, Routes } from "react-router-dom";
import DisplayHome from "../components/DisplayHome";

function Display() {
  return (
    <div className="w-[100%] m-2 px-6 rounded bg-[#121212] text-white overflow-auto lg:w-[75%] ml-0">
      <Routes>
        <Route path="/" element={<DisplayHome />} />
      </Routes>
    </div>
  );
}

export default Display;
