import React from 'react'
import { Link } from 'react-router-dom';
import { SliderData1 } from "./SliderData";
import ReactPlayer from "react-player";
import "../App.css"
function videoplayer() {
  return (
    <>
    { SliderData1.map((val,id)=>{return(
      
        <div>
           <Link to={`/movie/${val.name}/${val.id}`}>
      <div className="player-wrapper">
    <ReactPlayer
      url={val.video}
      className="react-player"
      playing
      width="100%"
      height="100%"
      controls={true}
    />
  </div>
           </Link>
        </div>
    )
      
    })
   
}
    </>
  )
}

export default videoplayer