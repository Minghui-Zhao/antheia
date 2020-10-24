import "./NavigationBar.scss";
import React, { Component } from "react";
import NavLinks from "./_NavLinks";
import SearchBar from "./_SearchBar";
import { Link } from "react-router-dom";

class NavigationBar extends Component {
  state = {
    show: false,
  };

  render() {
    return (
      <div className="bg-info">
        <nav className="navbar navbar-expand-md navbar-light navbar-width px-0 py-2">
          <Link className="navbar-brand company-logo text-white" to="/">
            Glogou
          </Link>
          <button
            className="navbar-toggler"
            onClick={() => this.setState({ show: !this.state.show })}
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div
            className={
              this.state.show
                ? "collapse navbar-collapse show"
                : "collapse navbar-collapse"
            }
          >
            <SearchBar />
            <NavLinks />
          </div>
        </nav>
      </div>
    );
  }
}

export default NavigationBar;
