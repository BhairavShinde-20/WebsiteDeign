import React, { useState } from "react";
import "./Uitask.css";
import Logo from "../img/logo.png";
import BgImg from "../img/bg.jpg";

import * as Icon from "react-bootstrap-icons";

const Uitask = () => {
  const [click, setClick] = useState(false);
  const [cursorX, setCursorX] = useState();
  const [cursorY, setCursorY] = useState();

  const handleclick = () => setClick(!click);

  const [color, setcolor] = useState(false);
  const changeColor = () => {
    if (window.scrollY >= 100) {
      setcolor(true);
    } else {
      setcolor(false);
    }
  };

  window.addEventListener("scroll", changeColor);

  window.addEventListener("mousemove", (e) => {
    setCursorX(e.pageX);
    setCursorY(e.pageY);
  });

  return (
    <>
      <div className={color ? "header header-bg " : "header icon"} id="home">
        <div className="logo">
          <img src={Logo} alt="" />
        </div>
        <div className="hamburger" onClick={handleclick}>
          {click ? (
            <Icon.X
              size={38}
              style={{ color: "#fff" }}
              className="icon "
            />
          ) : (
            <Icon.List
              size={30}
              style={{ color: "#fff" }}
              className="icon"
            />
          )}
        </div>
        <ul className={click ? "nav-menu active" : "nav-menu"}>
         
          <li>
            <a href="#about" onClick={()=>setClick(false)}>About</a>
          </li>
          <li>
            <a href="#section" onClick={()=>setClick(false)}>Services</a>
          </li>
          <li>
            <a href="#leader" onClick={()=>setClick(false)}>Leadership</a>
          </li>
          <li>
            <a href="#career" onClick={()=>setClick(false)}>Careers</a>
          </li>
          <li>
            <a href="#contact" onClick={()=>setClick(false)} >Contact</a>
          </li>
          <div
            className="cursor"
            style={{
              left: cursorX + "px",
              top: cursorY + "px",
            }}
          ></div>
        </ul>
      </div>

      {/* middel sec */}

      <div className="middel">
        <img src={BgImg} alt="" />
        <div className="content">
          <h1 className="thinkC">
            Think <span style={{ color: "#f9bb4e" }}>Beyond</span> Digital
          </h1>
        </div>
        <div className="about_1">
          <h1>ABOUT</h1>
          <a href="#about">
          <div  className="circle">
            <Icon.ChevronDown className="ChevronDown" />
          </div>
          </a>
        </div>
      </div>

    </>
  );
};

export default Uitask;
