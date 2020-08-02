import React from "react";
import StudentPanel from "./StudentPanel";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import Icon from "@material-ui/core/Icon";
import SearchIcon from "@material-ui/icons/Search";
import IconButton from "@material-ui/core/IconButton";

const useStyles = makeStyles(theme => ({
  root: {
    "& > span": {
      margin: theme.spacing(2)
    }
  }
}));

const StudentTimeTable = () => {
  const classes = useStyles();
  return (
    <div>
      <link
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
        rel="stylesheet"
      />
      <link
        rel="stylesheet"
        href="https://use.fontawesome.com/releases/v5.8.1/css/solid.css"
      ></link>
      <StudentPanel />
      <div id="edit_text">
        <span>Time Table</span>
      </div>

      <div>
        <IconButton aria-label="search" id="search1">
          <SearchIcon style={{ fontSize: "40" }} />
        </IconButton>
        <input
          className="fontAwesome"
          type="text"
          id="searchBar"
          name="searchBar"
          placeholder="        Search for classes, teachers, etc"
        />
      </div>
    </div>
  );
};

export default StudentTimeTable;
