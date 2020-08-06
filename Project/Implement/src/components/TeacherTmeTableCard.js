import React, { useState } from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import CardActions from "@material-ui/core/CardActions";
import Chip from "@material-ui/core/Chip";
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
    marginLeft: "250px",
    marginRight: "auto",
    maxWidth: "1000px"
  },

  cover: {
    width: 151,
    marginLeft: 30,
    marginTop: 3,
    marginBottom: 50
  }
}));

const TimeTableCards = props => {
  const classes = useStyles();
  const [openDialog, setOpenDialog] = useState(false);
  const [alert, setAlert] = useState(false);
  const [notAvailable, setNotAvailable] = useState(false);
  const [haspaied, setHasPaied] = useState(false);
  const [chipColor, setChipColor] = useState("");
  const [alert3, setAlert3] = useState(false);

  const handleClick = () => {
    if (props.status === "Pending for payment") {
      setOpenDialog(true);
    } else if (props.status === "Registered") {
      setAlert3(true);
    } else {
      setNotAvailable(true);
    }
  };
  const handleClose = () => {
    setOpenDialog(false);
    setAlert(true);
  };
  const paymentClicked = () => {
    setHasPaied(true);
    setAlert(true);
    setOpenDialog(false);
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
    setNotAvailable(false);

    // setAlertClose(false);
  };
  const closeAlert3 = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setAlert3(false);

    // setAlertClose(false);
  };

  const Tag = () => {
    if (props.status === "Requested") {
      setChipColor("rgba(159, 169, 188, 1)");
    }
    if (props.status === "Pending for payment") {
      setChipColor("rgba(250, 196, 8, 1)");
    }

    if (props.status === "Registered") {
      setChipColor("rgba(40,202,207,1)");
    }
    if (props.status === "Rejected") {
      setChipColor("rgba(255, 90, 135, 1)");
    }
    if (props.status === "Finished") {
      setChipColor("rgba(59,139,202,1)");
    }
    return (
      <div
        style={{
          backgroundColor: chipColor,
          fontSize: "15px",
          color: "white",
          textAlign: "center",
          marginBottom: " 2px",
          borderRadius: "5px"
          //   width: "80px"
        }}
      >
        {" "}
        {props.status}
      </div>
    );
  };
  return (
    <div>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
      />

      {alert ? (
        <Alert
          style={{ width: "500px", marginLeft: "500px", marginRight: "auto" }}
          onClose={closeAlert1}
          severity="success"
          variant="filled"
        >
          Payment process has done!
        </Alert>
      ) : null}

      {notAvailable ? (
        <Alert
          style={{ width: "500px", marginLeft: "500px", marginRight: "auto" }}
          onClose={closeAlert2}
          severity="error"
          variant="filled"
        >
          This class is not available!
        </Alert>
      ) : null}

      {alert3 ? (
        <Alert
          style={{ width: "500px", marginLeft: "500px", marginRight: "auto" }}
          onClose={closeAlert3}
          severity="success"
          variant="filled"
        >
          You have registered in this class!
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
                marginLeft: "80px"
              }}
            >
              <Typography component="h5" variant="h5">
                <div className="req_items">Status:</div>
                <div className="req_items">Course Name:</div>
                <div className="req_items">Grade:</div>
                <div className="req_items">student:</div>
                <div className="req_items">Days:</div>
                <div className="req_items">Time:</div>
                <div className="req_items">Price:</div>
                <div className="req_items">Location:</div>
              </Typography>
              <Typography variant="subtitle1" color="textSecondary">
                {/* <div className="req_details"> kkkkk</div> */}
                <Tag />
                <div className="req_details">{props.course}</div>
                <div className="req_details">{props.grade}</div>
                <div className="req_details">{props.student}</div>
                <div className="req_details">{props.days}</div>
                <div className="req_details">{props.time}</div>
                <div className="req_details">{props.price}</div>
                <div className="req_details">{props.location}</div>
              </Typography>
            </div>
          </CardContent>
        </div>

        <CardMedia
          style={{
            width: "370px",
            marginLeft: "20px",
            marginTop: 3,
            marginBottom: 50
          }}
          image={props.map}
        />
        <i
          className="fa fa-map-marker"
          aria-hidden="true"
          style={{
            fontSize: "50px",
            color: "rgba(255, 90, 135, 1)",
            marginLeft: "-180px",
            marginTop: "100px"
          }}
        ></i>
      </Card>
      <Dialog
        open={openDialog}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Payment</DialogTitle>
        <DialogContent style={{ width: "500px" }}>
          <span>
            The total price is {props.price}
            <br />
            Do you pay now?
          </span>
        </DialogContent>
        <DialogActions>
          <Button
            onClick={() => setOpenDialog(false)}
            color="secondary"
            style={{
              marginRight: "180px",
              color: "rgba(255, 90, 135, 1)",
              backgroundColor: "white",
              width: "150px",
              border: "rgba(255, 90, 135, 1) 1px solid"
            }}
          >
            Later
          </Button>
          <Button
            onClick={paymentClicked}
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

export default TimeTableCards;
