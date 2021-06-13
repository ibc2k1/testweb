import React from "react";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import ImageAvatars from "./Avatar";

export default function Router_c() {
  return (
    <nav>
      
      <ImageAvatars/>
      <h1>Welcome to Egypt</h1>
      <div className="links">
        <Link to="/">
          <Button>首頁</Button>
        </Link>
        <Link to="/Intro">
          <Button>埃及介紹</Button>
        </Link>
        <Link to="/site">
          <Button>景點</Button>
        </Link>
        <Link to="/food">
          <Button>特色美食</Button>
        </Link>
        <Link to="/notices">
          <Button>注意事項</Button>
        </Link>
      </div>
    </nav>
  );
}
