import React from "react";
import "./moviecard.css";
import Verticalcard from "./Verticalcard";
import Rowcard from "./Rowcard";
function Moviecard() {
  return (
    <>
     <h1 className="title">Recomended For You</h1>
      <Verticalcard/>
      <h1 className="title">Popular Shows</h1>
      <Verticalcard/>
      <h1 className="title">Popular In Action</h1>
      <Rowcard/>
      <h1 className="title">Hotstar Specials</h1>
      <Verticalcard/>
      <h1 className="title">Popular Shows</h1>
      <Verticalcard/>
      <h1 className="title">Popular In Action</h1>
      <Rowcard/>
      <h1 className="title">Popular Shows</h1>
      <Verticalcard/>
      <h1 className="title">Popular Shows</h1>
      <Verticalcard/>
      <h1 className="title">Popular In Action</h1>
      <Rowcard/>
    </>
  );
}

export default Moviecard;
