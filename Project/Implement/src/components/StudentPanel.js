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
            <span id="Search_Text">I'm searching for</span>
          </div>
        </nav>
      </div>

      {/* <div className="NavBar_Wrapper"> */}
      <StudentNB />
      {/* </div> */}
    </div>
  );
};

export default StudentPanel;
