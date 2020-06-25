
import React from 'react';
import { Component } from 'react';
import {NavLink} from 'react-router-dom';
import {Navbar} from 'react-bootstrap';
import {Nav} from 'react-bootstrap';
import {withRouter,Link} from 'react-router'
import './NavBar.css'
import Home from './Home';

class stNavBar_ extends Component{
	render() {
		const {params} = this.props.router;
		if(params.accountId === undefined) return null;
    return (      
      <ul className='NavigationBar_Container'>
		<li id='Home_Item'>
			<a href='#' id='Home_Text'>Home</a>
		</li>
	  </ul>
    );
  }
}
  
 export default stNavBar_;
