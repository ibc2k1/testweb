import React from "react";
import MediaCard from "./MediaCard";
import PictureList from "./api";

export default function Home() {
  return (
    <div className="homePage">
      <h1>this is home page</h1>
      <MediaCard/>
      <PictureList/>
    </div>
  );
}
