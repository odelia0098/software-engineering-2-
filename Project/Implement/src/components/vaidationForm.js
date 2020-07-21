import React, { useState } from "react";
import { FiLogIn } from "react-icons/fi";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";

const initialState = {
  email: "",
  password: "",
  confirmPassword: "",
  captcha: "",
  emailError: "",
  passwordError: "",
  confirmPasswordError: "",
  captchaError: ""
};

const emailRegex = RegExp(
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
);
const passwordRegex = RegExp(/^[A-Za-z]\w{7,14}$/);
const ValidationForm = () => {
  const [state, setState] = useState(initialState);
  const [type, setType] = useState(initialState);

  const handleChange = event => {
    const target = event.target;
    setType(target.value);
    const check = target.type === "checkbox";
    setState(v => ({
      ...v,
      [target.name]: check ? target.checked : target.value
    }));

    switch (target.name) {
      case "email":
        setState(v => ({
          ...v,
          emailError: emailRegex.test(target.value) ? "" : "Invalid email"
        }));
        break;

      case "password":
        setState(v => ({
          ...v,
          passwordError: passwordRegex.test(target.value)
            ? ""
            : "password should be 7 to 15 characters which contain only characters, numeric digits, underscore and first character must be a letter"
        }));
        break;

      case "confirmPassword":
        console.log(state.password);
        console.log(target.value);
        console.log(state);
        setState(v => ({
          ...v,
          confirmPasswordError:
            state.password === target.value ? "" : "it does not match!"
        }));
        break;

      default:
        break;
    }
  };

  const validate = () => {
    if (state.emailError || state.passwordError || state.confirmPasswordError) {
      return false;
    } else if (
      !state.email ||
      !state.password ||
      !state.confirmPassword ||
      !state.captcha
    ) {
      alert("Please fill all fields!");
      return false;
    }

    return true;
  };

  const handleSubmit = event => {
    event.preventDefault();

    console.log(state);
    const isValid = validate();
    if (isValid) {
      console.log("valid!");

      setState(initialState);
      //window.location.href="/home";
    } else {
      console.log("invalid");
    }
  };
  return (
    <div className="form-wrapper">
      <form onSubmit={handleSubmit} noValidate>
        <FormControl>
          <RadioGroup
            aria-label="userType"
            name="type1"
            value={type}
            onChange={handleChange}
          >
            <FormControlLabel
              value="teacher"
              control={<Radio />}
              label="I am a teacher!"
            />
            <FormControlLabel
              value="student"
              control={<Radio />}
              label="I am a student!"
            />
          </RadioGroup>
        </FormControl>

        <div className="item-wrapper">
          <input
            type="Email"
            className="formItem"
            placeholder="EMAIL"
            name="email"
            value={state.email}
            onChange={handleChange}
          />
          <div className="form-error">{state.emailError}</div>
        </div>
        <div className="item-wrapper">
          <input
            type="password"
            className="formItem"
            placeholder="PASSWORD"
            name="password"
            value={state.password}
            onChange={handleChange}
          />
          <div className="form-error">{state.passwordError}</div>
        </div>
        <div className="item-wrapper">
          <input
            type="password"
            className="formItem"
            placeholder="CONFIRM PASSWORD"
            name="confirmPassword"
            value={state.confirmPassword}
            onChange={handleChange}
          />
          <div className="form-error">{state.confirmPasswordError}</div>
        </div>
        <div className="item-wrapper">
          <input
            type="text"
            className="formItem"
            placeholder="CAPTCHA"
            name="captcha"
            value={state.captcha}
            onChange={handleChange}
          />

          <div className="form-error">{state.captchaError}</div>
        </div>
        <div>
          <button type="submit" className="login-btn">
            Sign Up <FiLogIn size={"15"} />
          </button>
        </div>
      </form>
    </div>
  );
};

export default ValidationForm;
