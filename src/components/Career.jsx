import React from "react";
import "./Career.css";
import Pin from "../img/pin.png";
import Sale from "../img/sale.png";

const Career = () => {
  return (
    <>
    <div className="main_career" id="career">
      <div className="career" >
        <h2 className="main_tag">CAREER</h2>
      </div>
      <div className="mainbox">
        <div className="box">
          <div className="imgmain">
            <img src={Sale} alt="" />
            <h2>Lead Full Stack Engineer</h2>
            <img src={Pin} alt="" className="pin" />
            <p>Pune</p>
          </div>
        </div>
        <div className="box">
        <div className="imgmain">
          <img src={Sale} alt="" />
          <h2>Lead Full Stack Engineer</h2>
          <img src={Pin} alt="" className="pin" />
            <p>Pune</p> </div>

        </div>
        <div className="box">
        <div className="imgmain">
          <img src={Sale} alt="" />
          <h2>Lead Full Stack Engineer</h2>
          <img src={Pin} alt="" className="pin" />
            <p>Pune</p> </div>

        </div>{" "}
        <div className="box">
        <div className="imgmain">
          <img src={Sale} alt="" />
          <h2>Lead Full Stack Engineer</h2>
          <img src={Pin} alt="" className="pin" />
            <p>Pune</p>
            </div>

        </div>
      </div>
      </div>
    </>
  );
};

export default Career;
