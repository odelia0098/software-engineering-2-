import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import Icon from "@material-ui/core/Icon";

const useStyles = makeStyles(theme => ({
  root: {
    "& > span": {
      margin: theme.spacing(2)
    }
  }
}));

const Education = () => {
  const classes = useStyles();

  return (
    <div>
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/icon?family=Material+Icons"
      />

      <form>
        <div className="personal-forms">
          <div className="forms-names">
            <span>Education</span>
          </div>
          {/* <Plus fontSize="large" color="action" /> */}
          <div className={classes.root}>
            <Icon
              className="addIcons"
              style={{ fontSize: 35 }}
              color="secondary"
            >
              add_circle
            </Icon>
          </div>
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
    </div>
  );
};

export default Education;
