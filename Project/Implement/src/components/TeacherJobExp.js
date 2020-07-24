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
  }
];

const grades = [
  {
    id: 1,
    value: "Primary School",
    checked: false
  },
  {
    id: 2,
    value: "Junior High School",
    checked: false
  },
  { id: 3, value: " High School", checked: false }
];

const Job = () => {
  const classes = useStyles();

  const [course, setCourse] = useState("");
  const [school, setSchool] = useState("");
  const [grade, setGrade] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [open, setOpen] = useState(false);
  const [isCurrent, setIsCurrent] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleChange = input => e => {
    //console.log(e.target.value);
    if (input === "startDate") {
      setStartDate(e.target.value);
    }

    if (input === "endDate") {
      setEndDate(e.target.value);
    }

    if (input === "course") {
      setCourse(e.target.value);
    }

    if (input === "school") {
      setSchool(e.target.value);
    }

    if (input === "isCurrent") {
      setIsCurrent(e.target.checked);
    }

    if (input === "grade") {
      //console.log("value:" + e.target.value + " checked: " + e.target.checked);
      for (const each of grades) {
        if (each.id == e.target.value) {
          each.checked = e.target.checked;
        }
      }
      setGrade(grades);
      //console.log(grades);
    }
  };

  return (
    <div>
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/icon?family=Material+Icons"
      />

      <form>
        <div className="personal-forms">
          <div className="forms-names">
            <span>Job Experience</span>
          </div>

          <div className={classes.root}>
            <Icon
              className="addIcons"
              style={{ fontSize: 35 }}
              color="secondary"
              onClick={handleClickOpen}
            >
              add_circle
            </Icon>
          </div>
          <div>
            <Icon
              className="editIcons"
              style={{ fontSize: 35 }}
              color="secondary"
              // onClick={Clicked}
            >
              edit
            </Icon>
          </div>
        </div>
      </form>

      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Job Experience</DialogTitle>
        <DialogContent>
          <TextField
            style={{ width: 230, margin: 15 }}
            required
            select
            id="tcr-corse"
            variant="outlined"
            label="Course"
            onChange={handleChange("course")}
            helperText="Required"
            value={course}
            // SelectProps={{
            //   multiple: true
            // }}
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
            id="tcr-school"
            variant="outlined"
            label="School"
            onChange={handleChange("school")}
            helperText="Required"
            value={school}
          ></TextField>

          <TextField
            style={{ width: 230, margin: 15 }}
            required
            select
            id="tcr-grade"
            variant="outlined"
            label="Grade"
            //onChange={handleChange("grade")}
            helperText="Required"
            value={grades}
            SelectProps={{
              multiple: true,
              value: grades
            }}
          >
            {grades.map(option => (
              <div style={{ marginLeft: "10px" }}>
                <FormControlLabel
                  control={
                    <Checkbox
                      key={option.id}
                      value={option.id}
                      onChange={handleChange("grade")}
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
            id="tcr-strdate"
            variant="outlined"
            label="Start Date"
            type="date"
            InputLabelProps={{
              shrink: true
            }}
            onChange={handleChange("startDate")}
            helperText="Required"
            value={startDate}
          />
          <TextField
            style={{ width: 230, margin: 15 }}
            required
            id="tcr-enddate"
            variant="outlined"
            label="End Date"
            type="date"
            InputLabelProps={{
              shrink: true
            }}
            onChange={handleChange("endDate")}
            helperText="Required"
            value={endDate}
          />
          <FormControlLabel
            control={
              <Checkbox
                style={{ marginLeft: "12px" }}
                value={isCurrent}
                onChange={handleChange("isCurrent")}
                checked={isCurrent}
              />
            }
            label="I am currently work in this position"
          />
        </DialogContent>
        <DialogActions>
          <Button
            onClick={handleClose}
            color="secondary"
            style={{
              margin: "15px",
              color: "white",
              backgroundColor: "rgba(255, 90, 135, 1)"
            }}
          >
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default Job;
