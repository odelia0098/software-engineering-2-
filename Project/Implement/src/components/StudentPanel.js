import React from "react";

import StudentNB from "./NavBar";
import "./NavBar.css";

const StudentPanel = () => {
  return (
    <div>
      <div className="topLabel_Wrapper">
        <nav className="navbar navbar-light" id="topLabel">
          <img
            src={require("./Group_128.png")}
            id="logoIcon"
            alt="lamp1"
            loading="lazy"
          />
          <span className="navbar-brand" id="LAMP">
            LAMP
          </span>

          <div id="Search_Box">
            <input
              type="text"
              id="Search_Text"
              name="SearchBox"
              placeholder="I'm searching for"
            />
          </div>

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

      <StudentNB />
    </div>
  );
};

export default StudentPanel;
