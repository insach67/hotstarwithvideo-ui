import React from 'react'
import {Link} from "react-router-dom"
import "./navbar.css"
function Navbar() {
  return (
   <>
   <nav className="navbar">
        <i class="fa fa-bars" id='nav'></i>
        <img src="images/logoht.svg" className="brand-logo" alt=""/>
        <ul className="nav-links">
            <li className="nav-items"><Link to="/tv">TV</Link></li>
            <li className="nav-items"><Link to="/movies">movies</Link></li>
            <li className="nav-items"><Link to="sports">sports</Link></li>
            <li className="nav-items"><Link to="/premium">premium</Link></li>
           <li> <Link to="/movies"></Link></li>
            <li className="nav-items kids"></li>
        </ul>
        <div className="right-container">
            <input type="text" className="search-box" placeholder="search"/>
            <button className="sub-btn">subscribe</button>
            <Link to="/login" className="login-link">login</Link>
        </div>
        <div>
        <i class="fa fa-magnifying-glass" id='sear'></i>
            </div>
    </nav>
   </>

  )
}

export default Navbar