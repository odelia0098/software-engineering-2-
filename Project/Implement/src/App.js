import React from "react";
import "./App.css";
import "./components/NavBar.css";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Login from "./components/Login";
import Home from "./components/StudentHome";
import Signup from "./components/Signup";
import StudentPanel from "./components/StudentPanel";
import StudentForm from "./components/StudentForms";
import TeacherForm from "./components/TeacherForms";
import TeacherPanel from "./components/TeacherPanel";
import StudentTimeTable from "./components/StudentTimeTable";
import TeacherTimeTable from "./components/TeacherTimeTable";
import StuRequest from "./components/StudentRequests";

const App = () => {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" exact component={Login} />
          <Route path="/home" component={Home} />
          <Route path="/signup" component={Signup} />
          <Route path="/studentPanel" component={StudentPanel} />
          <Route path="/studentform" component={StudentForm} />
          <Route path="/stuTimeTable" component={StudentTimeTable} />
          <Route path="/teachTimeTable" component={TeacherTimeTable} />
          <Route path="/teacherForm" component={TeacherForm} />
          <Route path="/teacherPanel" component={TeacherPanel} />
          <Route path="/requests" component={StuRequest} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
