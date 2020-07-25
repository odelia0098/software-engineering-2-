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

const License = () => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [organ, setOrgan] = useState("");
  const [credentialID, setCredentialID] = useState("");
  const [name, setName] = useState("");
  const [issueDate, setIssueDate] = useState("");
  const [expireDate, setExpireDate] = useState("");
  const [haveCredit, setHaveCredit] = useState(false);
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
        <Icon className="editIcons" style={{ fontSize: 35 }} color="secondary">
          edit
        </Icon>

        <span className="results">{name}</span>
        <span className="results">from: {organ}</span>
        <div className="resultWrapper">
          <span className="results">From Date: {issueDate}</span>
          <span className="results">To Date: {expireDate}</span>
        </div>
      </div>
    );
  };
  const handleChange = input => e => {
    //console.log(e.target.value);
    if (input === "expireDate") {
      console.log("hiii");
      setExpireDate(e.target.value);
    }

    if (input === "issueDate") {
      setIssueDate(e.target.value);
    }

    if (input === "name") {
      setName(e.target.value);
    }

    if (input === "organ") {
      setOrgan(e.target.value);
    }

    if (input === "credentialID") {
      setCredentialID(e.target.value);
      console.log("ldjmdk");
    }
    if (input === "haveCredit") {
      setHaveCredit(e.target.value);
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
            <span>Licenses & Certifications</span>
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
          {/* <div>
              <Icon
                className="editIcons"
                style={{ fontSize: 35 }}
                color="secondary"
              >
                edit
              </Icon>
            </div> */}
        </div>
      </form>

      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">
          Licenses & Certifications
        </DialogTitle>
        <DialogContent>
          <TextField
            style={{ width: 230, margin: 15 }}
            required
            id="license-name"
            variant="outlined"
            label="Name"
            onChange={handleChange("name")}
            helperText="Required"
            value={name}
            // SelectProps={{
            //   multiple: true
            // }}
          />

          <TextField
            style={{ width: 230, margin: 15 }}
            required
            id="license-organ"
            variant="outlined"
            label="Issuing Organization"
            onChange={handleChange("organ")}
            helperText="Required"
            value={organ}
          ></TextField>

          <TextField
            style={{ width: 230, margin: 15 }}
            required
            id="license_ID"
            variant="outlined"
            label="Credential ID"
            onChange={handleChange("credentialID")}
            helperText="Required"
            value={credentialID}
          />

          <TextField
            style={{ width: 230, margin: 15 }}
            required
            id="license-strdate"
            variant="outlined"
            label="Issue Date"
            type="date"
            InputLabelProps={{
              shrink: true
            }}
            onChange={handleChange("issueDate")}
            helperText="Required"
            value={issueDate}
          />
          <TextField
            style={{ width: 230, margin: 15 }}
            required
            id="license-enddate"
            variant="outlined"
            label="Expiration Date"
            type="date"
            InputLabelProps={{
              shrink: true
            }}
            onChange={handleChange("expireDate")}
            helperText="Required"
            value={expireDate}
          />
          <FormControlLabel
            control={
              <Checkbox
                style={{ marginLeft: "12px" }}
                value={haveCredit}
                onChange={handleChange("haveCredit")}
                checked={haveCredit}
              />
            }
            label="This credential does not expire."
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

export default License;
