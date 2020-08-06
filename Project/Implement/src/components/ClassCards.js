import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
// import { Link } from "react-router-dom";

import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import Alert from "@material-ui/lab/Alert";

import { withRouter } from "react-router-dom";

const useStyles = makeStyles({
  root: {
    maxWidth: 300,
    marginRight: 50,
    marginBottom: 100,
    display: "inline-block"
  },
  media: {
    height: 350
  }
});

const MiniCard = props => {
  const classes = useStyles();

  const [alert, setAlert] = useState(false);

  const closeAlert1 = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setAlert(false);

    // setAlertClose(false);
  };
  // const handleClose = () => {
  //   setOpenDialog(false);
  // };
  // const paymentClicked = () => {
  //   setHasPaied(true);
  //   setAlert(true);
  //   setOpenDialog(false);
  // };

  const onClicked = () => {
    // console.log(props.course);
    setAlert(true);
    // props.history.push({
    //   pathname: "/requests",
    //   course: props.course // your data array of objects
    // });
  };
  return (
    <div style={{ display: "inline" }}>
      <div style={{ display: "inline" }}>
        {alert ? (
          <Alert
            style={{
              marginLeft: "250px",
              marginRight: "300px"
            }}
            onClose={closeAlert1}
            severity="success"
            variant="filled"
          >
            Your request has been sent to {props.instructor}!
          </Alert>
        ) : null}
      </div>
      <Card className={classes.root}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            // style={{ height: 0, paddingTop: "56.25%" }}

            image={props.image}
            title="Contemplative Reptile"
          ></CardMedia>
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {props.course}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              grade: {props.grade}
              <br />
              by {props.instructor}
              <br />
              price: {props.price}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button
            style={{
              backgroundColor: "rgba(255, 90, 135, 1)",
              maxWidth: "280px",
              minWidth: "280px",
              color: "white"
            }}
            onClick={onClicked}
          >
            Register
          </Button>
          {/* <Link
          style={{
            backgroundColor: "rgba(255, 90, 135, 1)",
            maxWidth: "280px",
            minWidth: "280px",
            color: "white",
            textDecorationStyle: "none"
          }}
          to={{
            pathname: "/requests",
            course: props.course
          }}
        >
          Register
        </Link> */}
        </CardActions>
      </Card>
      {/* <Dialog
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
      </Dialog> */}
    </div>
  );
};

export default withRouter(MiniCard);
