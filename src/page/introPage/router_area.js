import React from "react";
import Button from "@material-ui/core/Button";
import {Link } from "react-router-dom";

export default function Router_area() {
  return (
    <div>
      <h1>this is introduction page</h1>
      <ul className="intro-links-area">
        <Link to="/intro">
          <Button>宗教</Button>
        </Link>
        <Link to="/area">
          <Button>地理區</Button>
        </Link>
        <Link to="/history">
          <Button>歷史</Button>
        </Link>
      </ul> 
    </div>
  );
}
