import React from "react";

import StudentNB from "./NavBar";
import "./NavBar.css";

const StudentPanel = () => {
  return (
    <div>
      <nav className="navbar navbar-light topLabel">
        <img
          src={require("./Group_128.png")}
          id="logoIcon"
          alt="lamp1"
          loading="lazy"
        />
        <span className="navbar-brand" id="LAMP">
          LAMP
        </span>
      </nav>
      <StudentNB />
    </div>
  );
};

export default StudentPanel;
