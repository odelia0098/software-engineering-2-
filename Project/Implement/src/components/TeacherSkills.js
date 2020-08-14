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

var temp = [];

var record = [];

const Skills = () => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  // const [openEdit, setOpenEdit] = useState(false);
  const [showResults, setShowResults] = React.useState(false);
  const [pendingValue, setPendingValue] = useState("");

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    // PendingRecord.push(pendingValue);
    record = [];
    record.push(pendingValue);

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
          {/* {openEdit ? <handleEdit /> : null} */}
          edit
        </Icon>

        <span className="results" id="school">
          {record}
        </span>
      </div>
    );
  };

  const handleOnChange = (e, values) => {
    setPendingValue(values + " ");
  };

  // const getValues = () => {
  //   for (var i = 0; i < record.length; i = i + 2) {
  //     PendingRecord.push(record[i]);
  //   }
  //   return pendingValue;
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
                defaultValue={record || {}}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    style={{ width: 400, margin: 15 }}
                    variant="outlined"
                    label="Your Skills"
                    color="secondary"
                  />
                )}
                selectOnFocus
                onChange={handleOnChange}
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
