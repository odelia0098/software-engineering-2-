import React from "react";
import SearchIcon from "@material-ui/icons/Search";
import IconButton from "@material-ui/core/IconButton";
import "./NavBar.css";

const teacherInfo = {
  id: "",
  name: "",
  lastName: "",
  grade: "",
  city: "",
  classes: [{ id: "", time: "", location: "", price: "" }],
};

const SearchBox = () => {
  const handleSearch = (sParam) => {
    // alert("B works");
    // send sParam to server and store result in the teacherInfo
    //Put the codes below in a loop to get all the teachers with specified parameters
    teacherInfo.name = "TestName";
    teacherInfo.lastName = "testLastName";
    teacherInfo.grade = "1stGrade";
    teacherInfo.city = "Isfahan";
    teacherInfo.classes.id = "0";
    teacherInfo.classes.time = "8:00-10:00";
    teacherInfo.classes.location = "Library";
    teacherInfo.classes.price = "23.0T";

    var gotTeachers = [];
    gotTeachers.push(teacherInfo);
    return gotTeachers;
  };

  return (
    <div>
      <input
        type="text"
        id="Search_Text"
        name="SearchBox"
        placeholder="I'm searching for"
        className="test"
      />

      <IconButton aria-label="search" id="Search_Icon" onClick={handleSearch}>
        <SearchIcon />
      </IconButton>
    </div>
  );
};

export default SearchBox;
