import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import "./components/NavBar.css";
import Login from "./components/Login";
import Home from "./components/Home";
import Signup from "./components/Signup";
import StudentPanel from "./components/StudentPanel";
import StudentForm from "./components/Student'sForms";

const App = () => {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" exact component={Login} />
          <Route path="/home" component={Home} />
          <Route path="/signup" component={Signup} />
          <Route path="/studentPanel" component={StudentPanel} />
          <Route path="/studentForm" component={StudentForm} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;