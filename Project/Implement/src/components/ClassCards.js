import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

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
  const onClicked = () => {
    console.log("Register clicked!");
  };
  return (
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
      </CardActions>
    </Card>
  );
};

export default MiniCard;
