import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Icon from "@material-ui/core/Icon";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import Autocomplete from "@material-ui/lab/Autocomplete";

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
const skills = [
  "Math",

  "Physics",

  "Biology",

  "Chemistry",

  "Literature",

  "Geography",

  "Algebra",

  "English",

  "Arabic",

  "French",
];
var record = [];
const Skills = () => {
  const classes = useStyles();
  const [open, setOpen] = useState("");
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

        <span className="results" id="school">
          {record}
        </span>
        {/* <span className="results">from: {}</span> */}
      </div>
    );
  };

  // var i = 0;
  // const handleSkills = (e, values) => {
  //   record.push(values.value);
  //   // alert(skills[e.target.value]);
  //   // record.push(skills[e.target.value]);
  // };

  return (
    <div>
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/icon?family=Material+Icons"
      />

      <form>
        <div className="personal-forms">
          <div className="forms-names">
            <span> Skills & Endorsements</span>
          </div>
          {/* <Plus fontSize="large" color="action" /> */}
          <div className={classes.root}>
            <Icon
              className="addIcons"
              style={{ fontSize: 35 }}
              color="secondary"
              onClick={handleClickOpen}
            >
              add_circle
            </Icon>
            {showResults ? <Results /> : null}
          </div>

          <Dialog
            open={open}
            onClose={handleClose}
            aria-labelledby="form-dialog-title"
          >
            <DialogTitle id="form-dialog-title"> Add Skills</DialogTitle>
            <DialogContent>
              <Autocomplete
                multiple
                id="tags-outlined"
                options={skills}
                getOptionLabel={(option) => option}
                filterSelectedOptions
                renderInput={(params) => (
                  <TextField
                    {...params}
                    style={{ width: 400, margin: 15 }}
                    variant="outlined"
                    label="Your Skills"
                    color="secondary"
                  />
                )}
                onChange={(e, values) => {
                  for (var i = 0; i < values.length; i++) {
                    if (!record.includes(values[i])) {
                      record.push(values[i]);
                      record.push(" ");
                    }
                  }
                }}
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
      </form>
    </div>
  );
};

export default Skills;
