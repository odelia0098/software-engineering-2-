import React, { useState } from "react";
import StudentPanel from "./StudentPanel";

import { makeStyles } from "@material-ui/core/styles";

import SearchIcon from "@material-ui/icons/Search";
import IconButton from "@material-ui/core/IconButton";

import MiniCard from "./ClassCards";
import { getThemeProps } from "@material-ui/styles";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

const courses = [
  {
    key: "1",
    image: require("../Images/Math1.jpeg"),
    name: "Mathematics",
    instructor: "Sara Azizi",
    price: "150,000 T/H",
    grade: "2",

    days: "Sunday, Wednesday",
    startTime: "3 PM",
    endTime: "5 PM",
    loc: "Isfahan",
  },
  {
    key: "2",
    image: require("../Images/Math2.jpeg"),
    name: "Mathematics",
    instructor: "Ali Khodaee",
    price: "150,000 T/H",
    grade: "3",

    days: "Saturday, Wednesday",
    startTime: "4.5 PM",
    endTime: "6 PM",
    loc: "Tehran",
  },
  {
    key: "11",
    image: require("../Images/Math3.jpeg"),
    name: "Mathematics",
    instructor: "Tara Khodaee",
    price: "150,000 T/H",
    grade: "4",

    days: "Sunday, Wednesday",
    startTime: "7 PM",
    endTime: "8.5 PM",
    loc: "Semnan",
  },

  {
    key: "12",
    image: require("../Images/Math4.jpeg"),
    name: "Mathematics",
    instructor: "Mehran jamali",
    price: "130,000 T/H",
    grade: "2",
    days: "Monday, Wednesday",
    startTime: "10 AM",
    endTime: "12 AM",
    loc: "Isfahan",
  },
  {
    key: "3",
    image: require("../Images/Biology1.jpeg"),
    name: "Biology",
    instructor: "Sam Omidi",
    price: "120,000 T/H",
    grade: "9",
    days: "Sunday, Wednesday",
    startTime: "3 PM",
    endTime: "5 PM",
    loc: "Yazd",
  },
  {
    key: "4",
    image: require("../Images/Chemistry1.jpeg"),
    name: "Chemistry",
    instructor: "Neda Ashoori",
    price: "140,000 T/H",
    grade: "11",
    days: "Sunday, Thursday",
    startTime: "6 PM",
    endTime: "8 PM",
    loc: "Isfahan",
  },
  {
    key: "5",
    image: require("../Images/Chemistry2.jpeg"),
    name: "Chemistry",
    instructor: "Neda Ashoori",
    price: "180,000 T/H",
    grade: "12",
    days: "Sunday, Wednesday",
    startTime: "2.5 PM",
    endTime: "4 PM",
    loc: "Tehran",
  },
  {
    key: "6",
    image: require("../Images/English5.jpeg"),
    name: "English",
    instructor: "Helen Joveyre",
    price: "90,000 T/H",
    grade: "5",
    days: "Monday",
    startTime: "4.5 PM",
    endTime: "6.5 PM",
    loc: "Isfahan",
  },
  {
    key: "7",
    image: require("../Images/French1.jpeg"),
    name: "French",
    instructor: "Helen Joveyre",
    price: "120,000 T/H",
    grade: "10",
    days: "Sunday, Wednesday",
    startTime: "5.5 PM",
    endTime: "7 PM",
    loc: "Isfahan",
  },
  {
    key: "8",
    image: require("../Images/History1.jpeg"),
    name: "History",
    instructor: "Alireza yazdani",
    price: "90,000 T/H",
    grade: "8",
    days: "Sunday, Wednesday",
    startTime: "3 PM",
    endTime: "5 PM",
    loc: "Isfahan",
  },
  {
    key: "9",
    image: require("../Images/Physics1.jpeg"),
    name: "Physics",
    instructor: "Alireza pegah",
    price: "180,000 T/H",
    grade: "9",
    days: "Sunday, Wednesday",
    startTime: "3 PM",
    endTime: "5 PM",
    loc: "Isfahan",
  },
  {
    key: "10",
    image: require("../Images/Geography1.jpeg"),
    name: "Science",
    instructor: "Alireza pegah",
    price: "120,000 T/H",
    grade: "6",
    days: "Saturday, Wednesday",
    startTime: "7 PM",
    endTime: "8.5 PM",
    loc: "Qom",
  },
];

const StudentHome = (props) => {
  const [searchTerm, setSearchTerm] = React.useState("");
  const [searchResults, setSearchResults] = React.useState([]);

  const RenderCards = (course) => {
    return (
      <MiniCard
        key={course.id}
        image={course.image}
        course={course.name}
        instructor={course.instructor}
        grade={course.grade}
        price={course.price}
        days={course.days}
        startTime={course.startTime}
        endTime={course.endTime}
        loc={course.loc}
      />
    );
  };

  const handleChange = (e) => {
    // const searcjQery = e.target.value.toLowerCase(),
    //   display = courses.filter(el => {
    //     setSearch(el.name.toLowerCase());
    //     console.log(searcjQery);
    //     console.log(search);
    //     console.log(search.indexOf(searcjQery));
    //     return search.indexOf(searcjQery) !== -1;
    //   });
    // setDisplay(display);
    setSearchTerm(e.target.value);
  };
  React.useEffect(() => {
    const results = courses.filter((person) =>
      person.name.toLowerCase().includes(searchTerm)
    );
    setSearchResults(results);
  }, [searchTerm]);

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
        <span>Home</span>
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
          placeholder="        Search for classes!"
          onChange={handleChange}
          value={searchTerm}
        />
      </div>
      <div className="cardWrapper">
        {searchResults.map((el) => {
          return (
            <RenderCards
              key={el.id}
              name={el.name}
              image={el.image}
              instructor={el.instructor}
              grade={el.grade}
              price={el.price}
              days={el.days}
              startTime={el.startTime}
              endTime={el.endTime}
              loc={el.loc}
            />
          );
        })}
      </div>
    </div>
  );
};

export default StudentHome;
