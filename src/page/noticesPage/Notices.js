import React from "react";
import { Entry, Wheather, Live, Culture } from "./Wheather";

export default function Home() {
  return (
    <div>
      <h1>this is notices page</h1>
      <Wheather/>
      <Entry/>
      <Live/>
      <Culture/>
    </div>
  );
}
