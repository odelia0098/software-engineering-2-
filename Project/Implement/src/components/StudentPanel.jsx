import React, { Component } from "react";

import StudentNB from "./NavBar";
import SearchBox from "./Search";
import "./NavBar.css";

const StudentPanel = () => {
  return (
    <div id="StudentPanel">
      <div id="topLabel_BG">
        <div className="topLabel">
          <nav className="navbar navbar-light">
            <img
              src={require("./Group_128.png")}
              id="logoIcon"
              alt="lamp1"
              loading="lazy"
            />
            <span className="navbar-brand" id="LAMP">
              LAMP
            </span>
            {/* <div className="Search_Box">
              <SearchBox />
            </div> */}
            <div className="divider">
              <svg id="devider_Line" viewBox="0 0 1 30">
                <path d="M 0 0 L 0 30" />
              </svg>
            </div>
            <div className="profile_Indicator">
              <img
                src={require("../Images/Ellipse.png")}
                id="profile_Pic"
                alt="picture"
                loading="lazy"
              />
              <div id="profile_Name">Jack</div>
            </div>
          </nav>
        </div>
      </div>
      <div id="NB_BackGround">
        <StudentNB />
      </div>
    </div>
  );
};

export default StudentPanel;
