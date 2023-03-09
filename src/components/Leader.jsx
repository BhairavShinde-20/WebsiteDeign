import React from "react";
import "./Leader.css";
import person_1 from "../img/sunil.jpg";
import person_2 from "../img/manish.jpg";

const Leader = () => {
  return (
    <><div className="main_leader"id ="leader">
      <div className="heading">
        <h2 className="main_tag">LEADERSHIP</h2>
      </div>

      <div className="leader">
        <div className="img_1">
          <img src={person_1} alt="" />
          <h3 className="owner">Sunil Notani </h3> 
          <a href="#">View Bio  </a>
        </div>
        <div className="img_2">
          <img src={person_2} alt="" />
          <h3 className="owner">Manish Motiani</h3>
          <a href="#">View Bio  </a>
        </div>
      </div>
      <div className="view"></div>
      </div>
    </>
  );
};

export default Leader;
