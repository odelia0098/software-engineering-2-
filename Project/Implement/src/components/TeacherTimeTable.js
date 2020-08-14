import React from "react";
import TeacherPanel from "./TeacherPanel";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import Icon from "@material-ui/core/Icon";
import SearchIcon from "@material-ui/icons/Search";
import IconButton from "@material-ui/core/IconButton";
import TimeTable from "./TeacherTmeTableCard";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > span": {
      margin: theme.spacing(2),
    },
  },
}));

const myCourses = [
  {
    key: "1",
    image: require("../Images/Math1.jpeg"),
    student: "Sara Azizi",
    course: "Mathematics",
    grade: "Second grade",
    days: "Saturday,  Monday",
    time: "6:00 PM Until 7:30 PM",
    price: "150,000 T/H",
    location: "Isfahan/ Roodaki Street",
    status: "Finished",
    map: require("../Images/Map.png"),
  },
  {
    key: "2",
    image: require("../Images/Chemistry1.jpeg"),
    student: "Neda Ashoori",
    course: "Chemistry",
    grade: "Eleventh grade",
    days: "Saturday,  Monday",
    time: "6:00 PM Until 7:30 PM",
    price: "140,000 T/H",
    location: "Isfahan/ Nikbakht Street",
    status: "Pending for payment",
    map: require("../Images/Map.png"),
  },
  {
    key: "3",
    image: require("../Images/Chemistry1.jpeg"),
    student: "Neda Ashoori",
    course: "Chemistry",
    grade: "Eleventh grade",
    days: "Saturday,  Monday",
    time: "6:00 PM Until 7:30 PM",
    price: "140,000 T/H",
    location: "Isfahan/ Nikbakht Street",
    status: "Registered",
    map: require("../Images/Map.png"),
  },

  {
    key: "4",
    image: require("../Images/Chemistry1.jpeg"),
    student: "Neda Ashoori",
    course: "Chemistry",
    grade: "Eleventh grade",
    days: "Saturday,  Monday",
    time: "6:00 PM Until 7:30 PM",
    price: "140,000 T/H",
    location: "Isfahan/ Nikbakht Street",
    status: "Rejected",
    map: require("../Images/Map.png"),
  },
];

const StudentTimeTable = () => {
  const classes = useStyles();
  const RenderCards = (course) => {
    return (
      <TimeTable
        key={course.id}
        status={course.status}
        image={course.image}
        student={course.student}
        course={course.course}
        grade={course.grade}
        days={course.days}
        time={course.time}
        price={course.price}
        location={course.location}
        map={course.map}
      />
    );
  };
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
      <TeacherPanel />
      <div id="edit_text">
        <span>Time Table</span>
      </div>
      {myCourses.map((course) => {
        return (
          <RenderCards
            key={course.id}
            image={course.image}
            student={course.student}
            course={course.course}
            grade={course.grade}
            days={course.days}
            time={course.time}
            price={course.price}
            location={course.location}
            status={course.status}
            map={course.map}
          />
        );
      })}
    </div>
  );
};

export default StudentTimeTable;
