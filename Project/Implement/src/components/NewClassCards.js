import React, { useState } from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    height: 300,
    marginTop: 30,
    marginLeft: "auto",
    marginRight: "auto",
    maxWidth: "500px",
  },

  cover: {
    width: 151,
    marginLeft: 30,
    marginTop: 3,
    marginBottom: 50,
  },
}));

const TimeTableCards = (props) => {
  const classes = useStyles();
  const [openDialog, setOpenDialog] = useState(false);
  // const [imgPath, setImagePath] = useState("");

  const styles = {
    media: {
      width: "150px",
      height: "150px",
      paddingTop: "56.25%", // 16:9,
      marginTop: "30",
    },
  };
  return (
    <div>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
      />

      <Card className={classes.root}>
        <CardMedia
          className={classes.media}
          style={styles.media}
          src={props.image}
        >
          {/* <img src={require(props.image)} alt="Image not found" /> */}
        </CardMedia>
        {/* {alert("props image: " + props.image)} */}
        <div>
          {/* <CardContent className={classes.content}> */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "auto auto",
              width: "300px",
              marginLeft: "150px",

              marginTop: "20px",
            }}
          >
            <Typography component="h5" variant="h5">
              <div className="req_items">Course Name:</div>
              <div className="req_items">Grade:</div>

              <div className="req_items">Days:</div>
              <div className="req_items">Start Time:</div>
              <div className="req_items">End Time:</div>
              <div className="req_items">Price:</div>
              <div className="req_items">Location:</div>
            </Typography>
            <Typography variant="subtitle1" color="textSecondary">
              <div className="req_details">{props.courseName}</div>
              <div className="req_details">{props.grade}</div>

              <div className="req_details">{props.days}</div>
              <div className="req_details">{props.startTime}</div>
              <div className="req_details">{props.endTime}</div>
              <div className="req_details">{props.price}</div>
              <div className="req_details">{props.location}</div>
            </Typography>
          </div>
          {/* </CardContent> */}
        </div>

        {/* <CardMedia
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
        ></i> */}
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

export default TimeTableCards;
