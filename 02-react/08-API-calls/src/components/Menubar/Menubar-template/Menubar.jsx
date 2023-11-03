import React, { useState } from "react";
import "./Menubar.css";

import logoImage from "../../assets/logo/user.png";

const Menubar = () => {
  const [menuBtnClicked, setMenuBtnClicked] = useState(false) 

  const setMenuBtnState = () => {
    console.log("Clicked!");
      setMenuBtnClicked(!menuBtnClicked)
  }
  return (
    <>
      <div className="main">
        <div className="container">
          <nav className="navbar">
            <div className="logo">
              <a href="#">
                <img src={logoImage} alt="" />
              </a>
            </div>
            
            <ul className={`nav-list ${menuBtnClicked ? "active" : "" }`} id="navi-list">
              <li className="list-item">
                <a href="/">Home</a>
              </li>
              <li className="list-item">
                <a href="/contact">Contact Us</a>
              </li>
              <li className="list-item">
                <a href="/books">Books</a>
              </li>
            </ul>

            
            <div className="menu" id="nav-icon" onClick={setMenuBtnState}>
              <div className="menu-line"></div>
              <div className="menu-line"></div>
              <div className="menu-line"></div>
            </div>
          </nav>
        </div>
        {/* <!-- container --> */}
      </div>
      {/* <!-- main --> */}
    </>
  );
};

export default Menubar;
