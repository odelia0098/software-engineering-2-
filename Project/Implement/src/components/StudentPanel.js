import React from "react";
import { Component } from "react";
import ReactDOM from "react-dom";
import StudentNB from "./NavBar";
import "./NavBar.css";

class StudentPanel extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-light topLabel">
          <img
            src={require("./Group_128.png")}
            id="logoIcon"
            alt="lamp"
            loading="lazy"
          />
          <span className="navbar-brand" id="LAMP">
            LAMP
          </span>
        </nav>
        <StudentNB />
      </div>
    );
  }
}

export default StudentPanel;
