import React from "react";
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";
import Button from "@material-ui/core/Button";
import Popup from "reactjs-popup";

const genders = [
  {
    value: "Male"
  },
  {
    value: "Female"
  }
];

const countries = [
  {
    value: "Iran"
  },
  {
    value: "Afqanestan"
  }
];
const Personal = props => {
  //const func1 = () => {
  //   return <MyPopup />;

  //   // return (
  //   //   <div>
  //   //     {/* <Popup position="right center">
  //   //       {/* <List>
  //   //         <ListItem
  //   //           primaryText="Your first name is:"
  //   //           secondaryText={props.firstName}
  //   //         />
  //   //       </List> */}
  //   //       <h2>This is popup</h2>
  //   //     </Popup> */}
  //   //   </div>
  //   // );
  // };
  return (
    <div className="top-form">
      <form>
        <div className="forms-names">
          <span>Personal Information</span>
        </div>
        <div>
          <TextField
            required
            id="stu-first-name"
            variant="outlined"
            label="First Name"
            onChange={props.handleChange("firstName")}
            helperText="Required"
            value={props.firstName}
          />

          <TextField
            required
            id="stu-last-name"
            variant="outlined"
            label="Last Name"
            onChange={props.handleChange("lastName")}
            helperText="Required"
            value={props.lastName}
          />

          <TextField
            required
            select
            id="stu-gender"
            variant="outlined"
            label="Gender"
            onChange={props.handleChange("gender")}
            helperText="Required"
            value={props.gender}
          >
            {genders.map(option => (
              <MenuItem key={option.value} value={option.value}>
                {option.value}
              </MenuItem>
            ))}
          </TextField>

          <TextField
            required
            id="stu-birthday"
            variant="outlined"
            label="Date of birth"
            type="date"
            InputLabelProps={{
              shrink: true
            }}
            onChange={props.handleChange("birthday")}
            helperText="Required"
            value={props.birthdy}
          />

          <TextField
            required
            select
            id="stu-country"
            variant="outlined"
            label="Country"
            onChange={props.handleChange("country")}
            helperText="Required"
            value={props.country}
          >
            {countries.map(option => (
              <MenuItem key={option.value} value={option.value}>
                {option.value}
              </MenuItem>
            ))}
          </TextField>

          <Popup
            className="popup"
            trigger={
              <Button className="forms-buttons" variant="contained">
                SUBMIT PERSONAL INFRMAION
              </Button>
            }
            position="right center"
          >
            <div>Your Personal information Added!</div>
          </Popup>
        </div>
      </form>
    </div>
  );
};

export default Personal;
