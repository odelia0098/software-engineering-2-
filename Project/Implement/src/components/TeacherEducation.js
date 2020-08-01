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

const fields = [
  {
    value: "Chemistry",
  },
  {
    value: "Engineering",
  },
  {
    value: "Mathemathics",
  },
  {
    value: "Medical",
  },
  {
    value: "Philosophy",
  },
  {
    value: "Physics",
  },
];

const degrees = [
  {
    value: "Diploma",
  },
  {
    value: "Bachelorl",
  },
  { value: " Master" },
  { value: " P.H.D" },
];
var record = {
  institute: "",
  degree: "",
  field: "",
  startDate: "",
  endDate: "",
};
const Education = () => {
  const classes = useStyles();

  const [institute, setInstitute] = useState("");
  const [degree, setDegree] = useState("");
  const [field, setField] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [open, setOpen] = useState(false);
  const [isCurrent, setIsCurrent] = useState(false);
  const [showResults, setShowResults] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setShowResults(true);
  };

  const Results = () => {
    return (
      <div>
        <Icon
          className="editIcons"
          style={{ fontSize: 35 }}
          color="secondary"
          onClick={handleClickOpen}
        >
          edit
        </Icon>

        <span className="results" id="courseAndGrade">
          Studied {record.field + " " + record.degree}{" "}
        </span>
        {/* <span className="results"> {record.degree} </span> */}
        <span className="results" id="school">
          {record.institute}
        </span>
        <div className="resultWrapper">
          <span className="results" id="workingDate">
            {record.startDate + "-" + record.endDate}
          </span>
          {/* <span className="results">To Date: {record.endDate}</span> */}
        </div>
      </div>
    );
  };

  const handleChange = (input) => (e) => {
    //console.log(e.target.value);
    if (input === "startDate") {
      setStartDate(e.target.value);
      record.startDate = e.target.value;
    }

    if (input === "endDate") {
      setEndDate(e.target.value);
      record.endDate = e.target.value;
    }

    if (input === "degree") {
      setDegree(e.target.value);
      record.degree = e.target.value;
    }

    if (input === "institute") {
      setInstitute(e.target.value);
      record.institute = e.target.value;
    }

    if (input === "isCurrent") {
      setIsCurrent(e.target.checked);
      if (e.target.checked) {
        document.getElementById("tcr-enddate").disabled = true;
        record.endDate = "Current day";
      } else if (e.target.checked === false) {
        document.getElementById("tcr-enddate").disabled = false;
      }
    }

    if (input === "field") {
      //console.log("value:" + e.target.value + " checked: " + e.target.checked);

      setField(e.target.value);
      record.field = e.target.value;
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
            <span> Education</span>
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
          {showResults ? <Results /> : null}
        </div>
      </form>

      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title"> Education</DialogTitle>
        <DialogContent>
          <TextField
            style={{ width: 230, margin: 15 }}
            required
            id="tcr-instute"
            variant="outlined"
            label="Institute"
            onChange={handleChange("institute")}
            helperText="Required"
            value={institute}
            // SelectProps={{
            //   multiple: true
            // }}
          />

          <TextField
            style={{ width: 230, margin: 15 }}
            required
            select
            id="tcr-field"
            variant="outlined"
            label="Field of study"
            onChange={handleChange("field")}
            helperText="Required"
            value={field}
          >
            {" "}
            {fields.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.value}
              </MenuItem>
            ))}
          </TextField>

          <TextField
            style={{ width: 230, margin: 15 }}
            required
            select
            id="tcr-degree"
            variant="outlined"
            label="Degree"
            onChange={handleChange("degree")}
            helperText="Required"
            value={degree}
          >
            {degrees.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.value}
              </MenuItem>
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
            label="I am currently study in this major."
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

export default Education;
