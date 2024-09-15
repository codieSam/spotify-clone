import React from "react";
import Navbar from "./Navbar";
import { albumsData } from "../assets/assets";
import AlbumItem from "./AlbumItem";
import { songsData } from "../assets/assets";
import SongItems from "./SongItems";

function DisplayHome() {
  return (
    <>
      <Navbar />
      <div className="mb-4 "></div>
      <h1 className="my-5 font-bold text-2xl">Featured Charts</h1>
      <div className="flex overflow-auto">
        {albumsData.map((item, index) => (
          <AlbumItem
            key={index}
            image={item.image}
            name={item.name}
            desc={item.desc}
            id={item.id}
          />
        ))}
      </div>
      <div className="mb-4 "></div>
      <h1 className="my-5 font-bold text-2xl">Todays biggest hits</h1>
      <div className="flex overflow-auto">
        {songsData.map((item, index) => (
          <SongItems
            key={index}
            image={item.image}
            name={item.name}
            desc={item.desc}
            id={item.id}
          />
        ))}
      </div>
    </>
  );
}

export default DisplayHome;
