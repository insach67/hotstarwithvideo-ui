import React from 'react'
import "./moviecard.css";
import { Data1} from "../../Data";
function Rowcard() {
  return (
   <>
      <div className="movies-list">
        <button className="pre-btn">
          <img src="images/pre.png" alt="" />
        </button>
        <button className="nxt-btn">
          <img src="images/nxt.png" alt="" />
        </button>
        <div className="card-container">
          {Data1.map((val, ind) => {
            return (
              <div className="card-row">
                <img src={val.image} className="card-img" alt="" />
                <div className="card-body">
                  <h2 className="name">{val.title}</h2>
                  <h6 className="des">{val.des}</h6>
                  <button className="watchlist-btn">{val.watch}</button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
   </>
  )
}

export default Rowcard