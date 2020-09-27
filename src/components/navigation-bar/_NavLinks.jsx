import React, { Component } from "react";

class NavLinks extends Component {
  render() {
    return (
      <ul className="navbar-nav ml-auto">
        <li className="nav-item active">
          <a className="nav-link" href="#">
            Contact 
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">
            Tel
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">
            Email
          </a>
        </li>
      </ul>
    );
  }
}

export default NavLinks;
