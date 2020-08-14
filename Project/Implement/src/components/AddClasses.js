import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Icon from "@material-ui/core/Icon";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import MenuItem from "@material-ui/core/MenuItem";
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import TeacherPanel from "./TeacherPanel";
import NewClass from "./NewClassCards";

import "./Modals.css";

const useStyles = makeStyles(theme => ({
  root: {
    "& > span": {
      margin: theme.spacing(2)
    }
  }
}));

const courses = [
  {
    value: "Math"
  },
  {
    value: "Physics"
  },
  {
    value: "Biology"
  },
  {
    value: "Chemistry"
  },
  {
    value: "Literature"
  },
  {
    value: "Geography"
  },
  {
    value: "French"
  },
  {
    value: "English"
  }
];

var record = {
  id: 0,
  course: "",
  school: "",
  grade: "",
  startDate: "",
  endDate: ""
};
const grades = [
  {
    value: "1.st Garde"
  },
  {
    value: "2.nd Garde"
  },
  {
    value: "3.rd Garde"
  },
  {
    value: "4.th Garde"
  },
  {
    value: "5.th Garde"
  },
  {
    value: "6.th Garde"
  },
  {
    value: "7.th Garde"
  },
  {
    value: "8.th Garde"
  },
  {
    value: "9.th Garde"
  },
  {
    value: "10.th Garde"
  },
  {
    value: "11.th Garde"
  },
  {
    value: "12.th Garde"
  }
];

const days = [
  {
    id: 1,
    value: "Saturday",
    checked: false
  },
  {
    id: 2,
    value: "Sunday",
    checked: false
  },
  { id: 3, value: "Monday", checked: false },
  { id: 4, value: "Thuesday", checked: false },
  { id: 5, value: "Wednesday", checked: false },
  { id: 6, value: "Thurseday", checked: false },
  { id: 7, value: "Friday", checked: false }
];
const AddClass = () => {
  const classes = useStyles();

  const [course, setCourse] = useState("");
  const [day, setDays] = useState("");
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");
  const [grade, setGrade] = useState("");
  const [price, setPrice] = useState("");
  const [location, setLocation] = useState("");
  const [open, setOpen] = useState(false);
  const [newcard, showNewcard] = useState(false);
  const [allClasses, setAllClasses] = useState([]);
  const [activeDays, setActiveDays] = useState([]);
  const [ID, setID] = useState(0);
  const handleClickOpen = () => {
    setOpen(true);
    showNewcard(false);
  };
  const Test = item => {
    console.log("test");
    return (
      <div>
        <NewClass
          key={item.id}
          // status={course.status}
          // image={course.image}
          // instructor={course.instructor}
          courseName={item.courseName}
          grade={item.grade}
          days={item.days}
          startTime={item.startTime}
          endTime={item.endTime}
          price={item.price}
          location={item.location}
        />
      </div>
    );
  };

  const handleClose = () => {
    setOpen(false);
    showNewcard(true);
    const copyArray = Object.assign([], allClasses);
    allClasses.push({
      id: ID,
      courseName: course,
      grade1: grade,
      startTime1: startTime,
      price1: price,
      endTime1: endTime,
      location1: location,
      days1: activeDays.slice(-1)
    });
    setID(ID + 1);
    // allClasses.push({
    //   course: "hhhjjj",
    //   startTime: "j",
    //   price: "h"
    // });
    // allClasses = copyArray;
    console.log(allClasses);
    setAllClasses(allClasses);
    // return allClasses;
  };

  const handleChange = input => e => {
    // handles adding new info to cache

    if (input === "startTime") {
      setStartTime(e.target.value);
    }

    if (input === "endTime") {
      setEndTime(e.target.value);
    }

    if (input === "course") {
      setCourse(e.target.value);
    }

    if (input === "price") {
      setPrice(e.target.value);
    }

    if (input === "location") {
      setLocation(e.target.value);
    }

    if (input === "grade") {
      setGrade(e.target.value);
    }

    if (input === "day") {
      for (const each of days) {
        if (each.id == e.target.value) {
          each.checked = e.target.checked;

          setDays(days);
          activeDays.push(
            days
              .filter(item => item.checked === true)
              .map(activeDays => activeDays.value) + "  "
          );
          setActiveDays(activeDays);

          console.log(days);
          console.log(activeDays);
        }
      }
    }
  };

  return (
    <div>
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/icon?family=Material+Icons"
      />

      <TeacherPanel />
      <div id="edit_text">
        <span>Home</span>
      </div>

      <Button
        style={{
          borderRadius: "5px",
          backgroundColor: "rgba(255, 90, 135, 1)",
          padding: "20px",
          color: "white",
          marginLeft: "1100px",
          marginTop: "-30px"
        }}
        onClick={handleClickOpen}
      >
        Create New Class
      </Button>

      {/* {newcard
        ? allClasses.map(item => {
            return (
              <Test
                // status={course.status}
                // image={course.image}
                // instructor={course.instructor}
                course={item.course}
                // grade={grade}
                // days={days}
                time={item.startTime}
                price={item.price}
              />
            );
          })
        : null} */}
      {/* {showResults ? <Results /> : null} */}
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">New Class</DialogTitle>
        <DialogContent>
          <TextField
            style={{ width: 230, margin: 15 }}
            required
            select
            id="tcr-course"
            variant="outlined"
            label="Course"
            onChange={handleChange("course")}
            helperText="Required"
            value={course}
          >
            {" "}
            {courses.map(option => (
              <MenuItem key={option.value} value={option.value}>
                {option.value}
              </MenuItem>
            ))}
          </TextField>
          <TextField
            style={{ width: 230, margin: 15 }}
            required
            select
            id="grd"
            variant="outlined"
            label="Grade"
            onChange={handleChange("grade")}
            helperText="Required"
            value={grade}
          >
            {" "}
            {grades.map(option => (
              <MenuItem key={option.value} value={option.value}>
                {option.value}
              </MenuItem>
            ))}
          </TextField>

          <TextField
            style={{ width: 230, margin: 15 }}
            required
            id="strTime"
            variant="outlined"
            label="Start Time"
            type="time"
            InputLabelProps={{
              shrink: true
            }}
            onChange={handleChange("startTime")}
            helperText="Required"
            value={startTime}
          />
          <TextField
            style={{ width: 230, margin: 15 }}
            required
            id="endTime"
            variant="outlined"
            label="End Time"
            type="time"
            InputLabelProps={{
              shrink: true
            }}
            onChange={handleChange("endTime")}
            helperText="Required"
            value={endTime}
          />
          <TextField
            style={{ width: 230, margin: 15 }}
            required
            select
            id="days"
            variant="outlined"
            label="Days"
            onChange={handleChange("day")}
            helperText="Required"
            value={days}
            SelectProps={{
              multiple: true,
              value: days
            }}
          >
            {days.map(option => (
              <div style={{ marginLeft: "10px" }}>
                <FormControlLabel
                  control={
                    <Checkbox
                      key={option.id}
                      value={option.id}
                      onChange={handleChange("day")}
                    />
                  }
                  label={option.value}
                />
              </div>
            ))}
          </TextField>
          <TextField
            style={{ width: 230, margin: 15 }}
            required
            id="price"
            variant="outlined"
            label="Price (Toman per hour)"
            onChange={handleChange("price")}
            helperText="Required"
            value={price}
          />
          <TextField
            style={{ width: 230, margin: 15 }}
            required
            id="loc"
            variant="outlined"
            label="Location"
            onChange={handleChange("location")}
            helperText="Required"
            value={location}
          />
        </DialogContent>
        <DialogActions>
          <Button
            onClick={handleClose}
            color="secondary"
            style={{
              margin: "15px",
              marginTop: "-160px",
              marginRight: "60px",
              color: "white",
              width: "100px",
              backgroundColor: "rgba(255, 90, 135, 1)"
            }}
          >
            Add
          </Button>
        </DialogActions>
      </Dialog>
      {allClasses.map(item => {
        return (
          <Test
            key={item.id}
            // status={course.status}
            // image={course.image}
            // instructor={course.instructor}
            courseName={item.courseName}
            grade={item.grade1}
            days={item.days1}
            startTime={item.startTime1}
            endTime={item.endTime1}
            price={item.price1}
            location={item.location1}
          />
        );
      })}
    </div>
  );
};

export default AddClass;
