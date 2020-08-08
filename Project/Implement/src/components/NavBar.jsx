import React from "react";
import { Link } from "react-router-dom";

import HomeIcon from "@material-ui/icons/Home";
import PersonIcon from "@material-ui/icons/Person";
import CalendarTodayIcon from "@material-ui/icons/CalendarToday";

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
              <HomeIcon id="Home_Icon" />
              Home
            </Link>
          </li>
          <li
            className="nav-item"
            id="EditProfile_Item"
            style={{ listStyleType: "none" }}
          >
            <Link className="nav-link" id="EditProfile_Text" to="/studentForm">
              <PersonIcon id="EditProfile_Icon" />
              Edit Profile
            </Link>
          </li>

          <li
            className="nav-item"
            id="TimeTable_Item"
            style={{ listStyleType: "none" }}
          >
            <Link className="nav-link" id="EditProfile_Text" to="/stuTimeTable">
              <CalendarTodayIcon id="time_Icon" />
              Time Table
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default StudentNB;
