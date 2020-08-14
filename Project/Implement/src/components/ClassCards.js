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
// import DialogTitle from "@material-ui/core/DialogTitle";

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
  const [openDialog, setOpenDialog] = useState(false);
  const handleClose = () => {
    setOpenDialog(false);
  };

  const onClicked = () => {
    // console.log(props.course);
    // props.history.push({
    //   pathname: "/requests",
    //   course: props.course // your data array of objects
    // });
    setOpenDialog(true);
  };
  return (
    <div style={{ display: "inline" }}>
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
              Grade: {props.grade}
              <br />
              By {props.instructor}
              <br />
              Price: {props.price}
              <br />
              On: {props.days}
              <br />
              At: {props.startTime} until {props.endTime}
              <br />
              Location: {props.loc}
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
        </CardActions>
      </Card>
      <Dialog
        open={openDialog}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        {/* <DialogTitle id="form-dialog-title">A</DialogTitle> */}
        <DialogContent style={{ width: "500px" }}>
          Your request has been sent to {props.instructor}.
        </DialogContent>
        <DialogActions>
          <Button
            onClick={() => setOpenDialog(false)}
            color="secondary"
            style={{
              marginRight: "180px",
              color: "white",
              backgroundColor: "rgba(255, 90, 135, 1)",
              width: "150px"
            }}
          >
            OK!
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default withRouter(MiniCard);
