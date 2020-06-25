import React from "react";
import { Component } from 'react';
import ReactDOM from "react-dom"
import stNavBar_ from "./NavBar"
import './NavBar.css'

const StudentPanel = () => {
  return (
  <div>
		<div>
			<stNavBar_/>
		</div>
		<div>
		  <h1>WELCOME</h1>
		</div>
	</div>
  );
};

export default StudentPanel;