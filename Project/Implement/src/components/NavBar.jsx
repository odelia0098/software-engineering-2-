import React from "react";
import { Component } from "react";
import "./NavBar.css";

class StudentNB extends Component {
  render() {
    return (
      <div>
        <nav className="navbar NavigationBar_Container">
          <ul className="navbar-nav">
            <li
              className="nav-item"
              id="Home_Item"
              style={{ listStyleType: "none" }}
            >
              <a className="nav-link" id="Home_Text" href="#">
                Home
              </a>
            </li>
            <li
              className="nav-item"
              id="EditProfile_Item"
              style={{ listStyleType: "none" }}
            >
              <a className="nav-link" id="EditProfile_Text" href="#">
                Link 2
              </a>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}

export default StudentNB;
