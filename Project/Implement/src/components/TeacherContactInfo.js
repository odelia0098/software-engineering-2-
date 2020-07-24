import React from "react";
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";
import Popup from "reactjs-popup";
import Button from "@material-ui/core/Button";
import MuiPhoneNumber from "material-ui-phone-number";

const states = [
  {
    value: "Azarbaijan Sharqi"
  },
  {
    value: "Azarbaijan Qarbi"
  },
  {
    value: "Ardebil"
  },
  {
    value: "Isfahan"
  },
  {
    value: "Alborz"
  },
  {
    value: "Ilam"
  },
  {
    value: "Booshehr"
  },
  {
    value: "Tehran"
  },
  {
    value: "Chahar Mahal"
  },
  {
    value: "Khorasan Jonoobi"
  },
  {
    value: "Khorasan Razavi"
  },
  {
    value: "Khorasan Shomali"
  },
  {
    value: "Khoozestan"
  },
  {
    value: "Zanjan"
  },
  {
    value: "Semnan"
  },
  {
    value: "Sistan Baloochestan"
  },
  {
    value: "Fars"
  },
  {
    value: "Qazvin"
  },
  {
    value: "Qom"
  },
  {
    value: "Kordestan"
  },
  {
    value: "Kermanshah"
  },
  {
    value: "Kerman"
  },
  {
    value: "Kohgooloye"
  },
  {
    value: "Golestan"
  },
  {
    value: "Gilan"
  },
  {
    value: "Lorestan"
  },
  {
    value: "Mazandran"
  },
  {
    value: "Homozgan"
  },
  {
    value: "Markazi"
  },
  {
    value: "Hamedan"
  },
  {
    value: "Yazd"
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
            id="tcr-email"
            variant="outlined"
            label="Email"
            type="email"
            onChange={props.handleChange("email")}
            helperText="Required"
            value={props.email}
          />

          <TextField
            required
            id="tcr-phone"
            variant="outlined"
            label="Phone Number"
            onChange={props.handleChange("phone")}
            helperText="Required"
            value={props.phone}
          />

          <MuiPhoneNumber
            id="tcr-cell_phone"
            defaultCountry="ir"
            label="CellPhone Number"
            variant="outlined"
            helperText="Required"
            onChange={props.handleChange("cellphone")}
            value={props.cellphone}
          />

          <TextField
            required
            select
            id="tcr-state"
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
            id="tcr-zipcode"
            variant="outlined"
            label="Zip Code"
            onChange={props.handleChange("zipCode")}
            helperText="Required"
            value={props.zipCode}
          />

          <Popup
            className="popup"
            trigger={
              <Button className="forms-buttons" variant="contained">
                SUBMIT CONTACT INFRMAION
              </Button>
            }
            position="right center"
          >
            <div>Your Contact information Added!</div>
          </Popup>
        </div>
      </form>
    </div>
  );
};

export default Contact;
