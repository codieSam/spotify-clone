import React from "react";

function SongItems({ name, image, desc, id }) {
  return (
    <div className="min-w-[180] p-2 px-3 rounded cursor-pointer hover:bg-[#ffffff26]">
      <img className="rounded" src={image} alt="" />
      <p className="mt-2 font-bold mb-1">{name}</p>
      <p className="text-sm text-slate-200">{desc}</p>
    </div>
  );
}

export default SongItems;
