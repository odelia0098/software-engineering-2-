import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";

const StudentNB = () => {
  return (
    <div>
      <nav className="NavigationBar_Container">
        <ul className="navbar-nav">
          <li
            className="nav-item"
            id="Home_Item"
            style={{ listStyleType: "none" }}
          >
            <Link className="nav-link" id="Home_Text" to="/home">
              Home
            </Link>
          </li>
          <li
            className="nav-item"
            id="EditProfile_Item"
            style={{ listStyleType: "none" }}
          >
            <Link className="nav-link" id="EditProfile_Text" to="/studentForm">
              Edit Profile
            </Link>
          </li>

          <li
            className="nav-item"
            id="TimeTable_Item"
            style={{ listStyleType: "none" }}
          >
            <Link className="nav-link" id="EditProfile_Text" to="/stuTimeTable">
              Time Table
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default StudentNB;
