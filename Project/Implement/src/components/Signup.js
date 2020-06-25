import React from "react";
import ValidationForm from "./vaidationForm";

const Signup = () => {
  //  const routeChange=()=> {
  //     // let path = '/home';
  //     // let history = useHistory();
  //     // history.push(path);
  //     console.log("clicked")
  //     window.location.href="/home";
  //   }

  return (
    <div className="container">
      <div id="signup">
        <span>SIGN UP</span>
      </div>

      <div id="welcomeMessage">
        <span>WELCOME TO LAMP</span>
      </div>

      <div id="advertise">
        <span>
          Join our community that have more than 10000 subscribers and learn new
          things everyday
        </span>
      </div>

      <div>
        <ValidationForm />
      </div>
    </div>
  );
};

export default Signup;
