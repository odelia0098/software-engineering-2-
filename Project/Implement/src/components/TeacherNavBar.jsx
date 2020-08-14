import React from "react";
import { Link } from "react-router-dom";

import HomeIcon from "@material-ui/icons/Home";
import PersonIcon from "@material-ui/icons/Person";
import CalendarTodayIcon from "@material-ui/icons/CalendarToday";
import CheckCircleOutlineIcon from "@material-ui/icons/CheckCircleOutline";

import "./NavBar.css";

const TeacherNB = () => {
  return (
    <div>
      <nav className="NavigationBar_Container">
        <ul className="navbar-nav">
          <li
            className="nav-item"
            id="Home_Item"
            style={{ listStyleType: "none" }}
          >
            <Link className="nav-link" id="Home_Text" to="/addClass">
              <HomeIcon id="Home_Icon" />
              Home
            </Link>
          </li>
          <li
            className="nav-item"
            id="EditProfile_Item"
            style={{ listStyleType: "none" }}
          >
            <Link className="nav-link" id="EditProfile_Text" to="/teacherForm">
              <PersonIcon id="EditProfile_Icon" />
              Edit Profile
            </Link>

            <Link className="nav-link" id="req_Text" to="/requests">
              <CheckCircleOutlineIcon id="req_Icon" />
              Requests
            </Link>
            <Link className="nav-link" id="time_Text" to="/teachTimeTable">
              <CalendarTodayIcon id="time_Icon" />
              Time Table
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default TeacherNB;
