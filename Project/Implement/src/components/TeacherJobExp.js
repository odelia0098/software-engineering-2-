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

import "./Modals.css";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > span": {
      margin: theme.spacing(2),
    },
  },
}));
const cache = [];
const courses = [
  {
    value: "Math",
  },
  {
    value: "Physics",
  },
  {
    value: "Biology",
  },
  {
    value: "Chemistry",
  },
  {
    value: "Literature",
  },
  {
    value: "Geography",
  },
];

const grades = [
  {
    id: 1,
    value: "Primary School",
    checked: false,
  },
  {
    id: 2,
    value: "Junior High School",
    checked: false,
  },
  { id: 3, value: " High School", checked: false },
];

const Job = () => {
  var record = {
    id: 0,
    course: "",
    school: "",
    grade: "",
    startDate: "",
    endDate: "",
  };
  const classes = useStyles();

  const course = "";
  const school = "";
  const startDate = "";
  const endDate = "";

  const [open, setOpen] = useState(false);
  const [openEdit, setOpenEdit] = useState(false);
  const [isCurrent, setIsCurrent] = useState(false);
  const [showResults, setShowResults] = React.useState(false);
  const [showEdit, setShowEdit] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    record.id = record.id++;
    cache.push(record);
    console.log(cache);
    setOpen(false);
    setShowResults(true);
  };

  const showCourseAndGrade = cache.map(
    (cache) => cache.course + " " + cache.grade
  );
  const showSchool = cache.map((cache) => cache.school);
  const showDate = cache.map((cache) => cache.startDate + "-" + cache.endDate);

  const handleOpenEdit = () => {
    setOpenEdit(true);
  };
  const handleCloseEdit = () => {
    setOpenEdit(false);
  };
  var temp;
  const handleEdit = (input) => (e) => {
    temp = cache.find(e.key);
    console.log(e.key);
  };

  const editDialog = () => {
    return (
      <div>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
        />
        <Dialog
          open={openEdit}
          onClose={handleCloseEdit}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">Job Experience</DialogTitle>
          <DialogContent>
            <TextField
              style={{ width: 230, margin: 15 }}
              required
              select
              id="tcr-course"
              variant="outlined"
              label="Course"
              onChange={handleEdit("course")}
              helperText="Required"
              value={course}
            >
              {" "}
              {courses.map((option) => (
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
              onChange={handleChange("grade")}
              helperText="Required"
              value={grades}
              SelectProps={{
                multiple: false,
                value: grades,
              }}
            >
              {grades.map((option) => (
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
                shrink: true,
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
                shrink: true,
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
              label="I work in this position, currently"
            />
          </DialogContent>
          <DialogActions>
            <Button
              onClick={handleClose}
              color="secondary"
              style={{
                margin: "15px",
                color: "white",
                backgroundColor: "rgba(255, 90, 135, 1)",
              }}
            >
              Save
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  };
  const Results = () => {
    return (
      <div>
        <Icon
          className="editIcons"
          style={{ fontSize: 35 }}
          color="secondary"
          onClick={handleOpenEdit}
          key={cache.id}
        >
          edit
        </Icon>

        <span className="results" id="courseAndGrade" key={cache.id}>
          {showCourseAndGrade}
        </span>
        <span className="results" id="school" key={cache.id}>
          {showSchool}
        </span>

        <div className="resultWrapper">
          <span className="results" id="workingDate" key={cache.id}>
            {showDate}
          </span>
        </div>
      </div>
    );
  };

  const handleChange = (input) => (e) => {
    // handles adding new info to cache

    if (input === "startDate") {
      record.startDate = e.target.value;
    }

    if (input === "endDate") {
      record.endDate = e.target.value;
    }

    if (input === "course") {
      record.course = e.target.value;
    }

    if (input === "school") {
      record.school = e.target.value;
    }

    if (input === "isCurrent") {
      document.getElementById("tcr-enddate").disabled = true;
      record.endDate = "Current day";
    }

    if (input === "grade") {
      for (const each of grades) {
        if (each.id == e.target.value) {
          each.checked = e.target.checked;
          record.grade = each.value;
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
          <div>{showResults ? <Results /> : null}</div>
          <div>{showEdit ? <editDialog /> : null}</div>
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
            id="tcr-course"
            variant="outlined"
            label="Course"
            onChange={handleChange("course")}
            helperText="Required"
            value={course}
          >
            {" "}
            {courses.map((option) => (
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
            onChange={handleChange("grade")}
            helperText="Required"
            value={grades}
            SelectProps={{
              multiple: false,
              value: grades,
            }}
          >
            {grades.map((option) => (
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
              shrink: true,
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
              shrink: true,
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
            label="I work in this position, currently"
          />
        </DialogContent>
        <DialogActions>
          <Button
            onClick={handleClose}
            color="secondary"
            style={{
              margin: "15px",
              color: "white",
              backgroundColor: "rgba(255, 90, 135, 1)",
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
