import React from 'react'
import { Link } from "react-router-dom";
import '../assets/style/header.css'

export default function Header() {
  return (
    <>
      <div className="header-parent-c">
        <nav className="header-navigation-container">
          <div className="logo-p-sec">
            <Link to="/">
              <p>logo</p>
            </Link>
          </div>
          <div className="nav-list">
            <ul className="ul-li-items">
              {/* <Link to='/home'> <li>Home</li></Link> */}
              <Link to='/profile'> <li>Profile</li></Link>
              <Link to='/setting'> <li>Setting</li> </Link>
            </ul>
          </div>
        </nav>
      </div>
    </>
  )
}
