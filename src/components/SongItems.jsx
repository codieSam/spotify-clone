import React, { useContext } from "react";
import { PlayerContext } from "../context/PlayerContext";

function SongItems({ name, image, desc, id }) {
  const { playWithId } = useContext(PlayerContext);
  return (
    <div
      onClick={() => playWithId(id)}
      className="min-w-[180px] p-2 px-3 rounded cursor-pointer hover:bg-[#ffffff26]"
    >
      <img className="rounded" src={image} alt="" />
      <p className="mt-2 font-bold mb-1">{name}</p>
      <p className="text-sm text-slate-200">{desc}</p>
    </div>
  );
}

export default SongItems;
