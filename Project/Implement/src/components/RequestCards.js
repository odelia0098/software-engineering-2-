import React, { useState } from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import CardActions from "@material-ui/core/CardActions";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import Alert from "@material-ui/lab/Alert";
const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    height: 300,
    marginTop: 30,
    marginLeft: "450px",
    marginRight: "auto",
    maxWidth: 650
  },

  cover: {
    width: 151,
    marginLeft: 30,
    marginTop: 3,
    marginBottom: 50
  }
}));

const RequestCards = props => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [alert, setAlert] = useState(false);
  const [accepted, setAccepted] = useState(false);

  const acceptClicked = () => {
    setAccepted(true);
  };
  const rejectClicked = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
    setAlert(true);
  };

  const closeAlert1 = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setAlert(false);

    // setAlertClose(false);
  };
  const closeAlert2 = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setAccepted(false);

    // setAlertClose(false);
  };

  return (
    <div>
      {alert ? (
        <Alert
          style={{ width: "500px", marginLeft: "500px", marginRight: "auto" }}
          onClose={closeAlert1}
          severity="success"
          variant="filled"
        >
          request successfully rejected!
        </Alert>
      ) : null}

      {accepted ? (
        <Alert
          style={{ width: "500px", marginLeft: "500px", marginRight: "auto" }}
          onClose={closeAlert2}
          severity="success"
          variant="filled"
        >
          {props.student} added to your student's list!
        </Alert>
      ) : null}
      <Card className={classes.root}>
        <CardMedia className={classes.cover} image={props.image} />
        <div>
          <CardContent className={classes.content}>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "auto auto",
                width: "300px",
                marginLeft: "50px"
              }}
            >
              <Typography component="h5" variant="h5">
                <div className="req_items">Course Name:</div>
                <div className="req_items">Student Name:</div>
                <div className="req_items">Grade:</div>
                <div className="req_items">School Name:</div>
                <div className="req_items">Current GPA:</div>
                <div className="req_items">Email:</div>
                <div className="req_items">City:</div>
              </Typography>
              <Typography variant="subtitle1" color="textSecondary">
                <div className="req_details">{props.course}</div>
                <div className="req_details">{props.student}</div>
                <div className="req_details">{props.grade}</div>
                <div className="req_details">{props.school}</div>

                <div className="req_details">{props.gpa}</div>
                <div className="req_details">{props.email}</div>
                <div className="req_details">{props.city}</div>
              </Typography>
            </div>
          </CardContent>
          <CardActions>
            <div style={{ display: "inline" }}>
              <Button
                style={{
                  backgroundColor: "rgba(40,202,207,1)",
                  maxWidth: "100px",
                  minWidth: "100px",
                  color: "white",
                  marginLeft: "55px",
                  position: "relative"
                }}
                onClick={acceptClicked}
              >
                Accept
              </Button>
              <Button
                style={{
                  position: "relative",
                  marginLeft: "35px",
                  backgroundColor: "rgba(255, 90, 135, 1)",
                  maxWidth: "100px",
                  minWidth: "100px",
                  color: "white"
                }}
                onClick={rejectClicked}
              >
                Reject
              </Button>
            </div>
          </CardActions>
        </div>
      </Card>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Discard</DialogTitle>
        <DialogContent style={{ width: "500px" }}>
          <span>Are you sure you want to reject this student?</span>
        </DialogContent>
        <DialogActions>
          <Button
            onClick={() => setOpen(false)}
            color="secondary"
            style={{
              marginRight: "180px",
              color: "rgba(255, 90, 135, 1)",
              backgroundColor: "white",
              width: "150px",
              border: "rgba(255, 90, 135, 1) 1px solid"
            }}
          >
            Cancel
          </Button>
          <Button
            onClick={handleClose}
            color="secondary"
            style={{
              margin: "15px",
              color: "white",
              backgroundColor: "rgba(255, 90, 135, 1)",
              width: "150px"
            }}
          >
            Yes
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default RequestCards;
