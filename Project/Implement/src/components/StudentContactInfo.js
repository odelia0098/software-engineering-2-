import React from "react";
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";

import Button from "@material-ui/core/Button";

const states = [
  {
    value: "Isfahan"
  },
  {
    value: "Tehran"
  },
  {
    value: "Yazd"
  },
  {
    value: "Gilan"
  }
];

const Contact = props => {
  return (
    <div>
      <form className="personal-forms">
        <div className="forms-names">
          <span>Contact Information</span>
        </div>
        <div>
          <TextField
            required
            id="stu-email"
            variant="outlined"
            label="Email"
            type="email"
            onChange={props.handleChange("email")}
            helperText="Required"
            value={props.email}
          />

          <TextField
            required
            id="stu-phone"
            variant="outlined"
            label="Phone Number"
            onChange={props.handleChange("phone")}
            helperText="Required"
            value={props.phone}
          />

          <TextField
            required
            id="stu-cell_phone"
            variant="outlined"
            label="CellPhone Number"
            onChange={props.handleChange("cellphone")}
            helperText="Required"
            value={props.cellphone}
          />
          <TextField
            required
            select
            id="stu-state"
            variant="outlined"
            label="State"
            onChange={props.handleChange("state")}
            helperText="Required"
            value={props.state}
          >
            {states.map(option => (
              <MenuItem key={option.value} value={option.value}>
                {option.value}
              </MenuItem>
            ))}
          </TextField>
          <TextField
            required
            id="stu-zipcode"
            variant="outlined"
            label="Zip Code"
            onChange={props.handleChange("zipCode")}
            helperText="Required"
            value={props.zipCode}
          />

          <Button className="forms-buttons" variant="contained">
            SUBMIT CONTACT INFRMAION
          </Button>
        </div>
      </form>
    </div>
  );
};

export default Contact;
