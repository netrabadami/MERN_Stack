import React, { Component } from 'react';
import '../bootstrap.css';
import { Navbar, NavItem, NavDropdown, MenuItem, Nav } from 'react-bootstrap';
import JustContext from './JustContext'
import { useContext } from 'react';
const NavBar =props=>  {
    const contextName = useContext(JustContext);
    return (
      <React.Fragment>
        <nav className="navbar navbar-dark bg-dark mb-3">
          <a className="navbar-brand" href="#">
            <h1>Name : <span className="badge badge-secondary">{contextName.state.name}</span></h1>
          </a>
        </nav>
      </React.Fragment>
    );
  
}
 
export default NavBar;