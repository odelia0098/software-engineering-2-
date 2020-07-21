import React from "react";
import { FiLogIn } from "react-icons/fi";
import { Link } from "react-router-dom";

const Login = () => {
  const loginClicked = () => {};

  return (
    <div>
      <div className="container">
        <div id="lamp-icon">
          <img src={require("./idea.png")} alt={"lamp"} />
        </div>

        <div id="lamp">
          <span>LAMP</span>
        </div>
        <div id="login-lable">
          <span>LOGIN</span>
        </div>
        <div id="login-wrapper">
          <form>
            <div className="item-wrapper">
              <input
                type="Email"
                className="formItem"
                placeholder="EMAIL"
                name="email"
              />
            </div>

            <div className="item-wrapper">
              <input
                type="password"
                className="formItem"
                placeholder="PASSWORD"
                name="password"
              />
              <div id="Forget">
                <a id="forget-text" href="/forget-password">
                  Forget password?
                </a>
              </div>
            </div>

            <div>
              <Link className="login-btn" to="/home">
                Login <FiLogIn size={"15"} />
              </Link>
              {/* <button
                type="submit"
                className="login-btn"
                onClick={loginClicked}
              >
                Login <FiLogIn size={"15"} />
              </button> */}
            </div>
          </form>
        </div>
      </div>

      <div className="container2">
        <div id="icon2">
          <img src={require("../Images/loginPage.png")} alt={"lamp"} />
        </div>
        <div id="welcome_back">
          <span>WELCOME BACK!</span>
        </div>

        <div id="join_us">
          <span>
            Join our community that have more than 10000 subscribers and learn
            new things everyday
          </span>
        </div>

        <div id="no-account">
          <span>Don't have account? </span>
          <Link id="want-to-signup" to="/signup">
            Sign Up!
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
