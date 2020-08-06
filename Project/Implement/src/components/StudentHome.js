import React, { useState } from "react";
import StudentPanel from "./StudentPanel";

import { makeStyles } from "@material-ui/core/styles";

import SearchIcon from "@material-ui/icons/Search";
import IconButton from "@material-ui/core/IconButton";

import MiniCard from "./ClassCards";
import { getThemeProps } from "@material-ui/styles";

const useStyles = makeStyles({
  root: {
    maxWidth: 345
  },
  media: {
    height: 140
  }
});

const courses = [
  {
    key: "1",
    image: require("../Images/math1.png"),
    name: "Mathematics",
    instructor: "Sara Azizi",
    price: "150,000 T/H",
    grade: "2"
  },
  {
    key: "2",
    image: require("../Images/math2.png"),
    name: "Mathematics",
    instructor: "Ali Khodaee",
    price: "150,000 T/H",
    grade: "3"
  },
  {
    key: "11",
    image: require("../Images/math3.png"),
    name: "Mathematics",
    instructor: "Tara Khodaee",
    price: "150,000 T/H",
    grade: "4"
  },

  {
    key: "12",
    image: require("../Images/math4.png"),
    name: "Mathematics",
    instructor: "Mehran jamali",
    price: "130,000 T/H",
    grade: "2"
  },
  {
    key: "3",
    image: require("../Images/bio1.jpeg"),
    name: "Biology",
    instructor: "Sam Omidi",
    price: "120,000 T/H",
    grade: "9"
  },
  {
    key: "4",
    image: require("../Images/chem1.jpeg"),
    name: "Chemistry",
    instructor: "Neda Ashoori",
    price: "140,000 T/H",
    grade: "11"
  },
  {
    key: "5",
    image: require("../Images/chem2.jpeg"),
    name: "Chemistry",
    instructor: "Neda Ashoori",
    price: "180,000 T/H",
    grade: "12"
  },
  {
    key: "6",
    image: require("../Images/english5.jpeg"),
    name: "English",
    instructor: "Helen Joveyre",
    price: "90,000 T/H",
    grade: "5"
  },
  {
    key: "7",
    image: require("../Images/french.jpeg"),
    name: "French",
    instructor: "Helen Joveyre",
    price: "120,000 T/H",
    grade: "10"
  },
  {
    key: "8",
    image: require("../Images/history1.jpeg"),
    name: "History",
    instructor: "Alireza yazdani",
    price: "90,000 T/H",
    grade: "8"
  },
  {
    key: "9",
    image: require("../Images/physics1.jpeg"),
    name: "Physics",
    instructor: "Alireza pegah",
    price: "180,000 T/H",
    grade: "9"
  },
  {
    key: "10",
    image: require("../Images/sci1.jpeg"),
    name: "Science",
    instructor: "Alireza pegah",
    price: "120,000 T/H",
    grade: "6"
  }
];

const StudentHome = props => {
  const [searchTerm, setSearchTerm] = React.useState("");
  const [searchResults, setSearchResults] = React.useState([]);

  const RenderCards = course => {
    return (
      <MiniCard
        key={course.id}
        image={course.image}
        course={course.name}
        instructor={course.instructor}
        grade={course.grade}
        price={course.price}
      />
    );
  };

  const handleChange = e => {
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
    const results = courses.filter(person =>
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
        {searchResults.map(el => {
          return (
            <RenderCards
              key={el.id}
              name={el.name}
              image={el.image}
              instructor={el.instructor}
              grade={el.grade}
              price={el.price}
            />
          );
        })}
      </div>
    </div>
  );
};

export default StudentHome;
